import CardProperty from "@/components/CardProperty";
import FilterSection from "@/components/FilterSection";
import HeaderHostShare from "@/components/HeaderHostShare";
import NavBar from "@/components/NavBar";
import Skeleton from "@/components/Skeleton";
import { ICategoryFilter } from "@/interfaces/common.interface";
import { IProperty } from "@/models/property.model";
import { categoriesService } from "@/services/categories.service";
import { propertiesService } from "@/services/properties.service";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";

export const getStaticProps: GetStaticProps = () => {
  const properties = propertiesService.getProperties();
  return {
    props: {
      properties
    }
  };
}

interface IHome {
  properties: Array<IProperty>;
}
export default function Home(props: IHome) {

  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filteredProperties, setFilteredProperties] = useState<Array<IProperty>>(props.properties);
  const [categories, setCategories] = useState<Array<ICategoryFilter>>([]);

  const handleSearchByGuest = (guests: number) => {
    setLoading(true);
    const searchGuest = setTimeout(() => {
      if (isNaN(guests)) {
        setFilteredProperties(props.properties)
      } else {
        const newFiltered = filteredProperties.filter(p => p.info.maxGuestCapacity === guests);
        setFilteredProperties(newFiltered);
      }
      setLoading(false);
    }, 2000);
    return () => clearTimeout(searchGuest);
  }

  const handleSearch = useCallback((criteria: string) => {
    setSearch(criteria);
    setLoading(true);
  }, [search])

  const handleClickFilter = (filter: { categoryId: string; selected: boolean }) => {
    setLoading(true);
    const newFiltered = categories as ICategoryFilter[];
    const result = newFiltered.map(f => {
      if (f.category.id === filter.categoryId) {
        return { ...f, selected: filter.selected };
      }

      return { ...f };
    });
    setCategories(result);
    const searchByCategory = setTimeout(() => {
      if (filter.selected) {
        const newFiltered = filteredProperties.filter(property => property.category === filter.categoryId);
        setFilteredProperties(newFiltered);
      } else {
        setFilteredProperties(props.properties);
      }

      setLoading(false);
    }, 2000);
    return () => clearTimeout(searchByCategory);
  }

  useEffect(() => {
    const filterDebounce = setTimeout(() => {
      if (search) {
        const newFiltered = filteredProperties.filter(property => property.info.location.city.toLowerCase().includes(search.toLowerCase()));
        setFilteredProperties(newFiltered);
      } else {
        setFilteredProperties(props.properties);
      }
      setLoading(false);
    }, 2000);
    return () => clearTimeout(filterDebounce);
  }, [handleSearch])


  useEffect(() => {
    const result = categoriesService.getCategories();
    setCategories(result);
  }, [])

  return (
    <div className="max-w-full">
      <Head>
        <title>HostShare</title>
        <meta name="description" content="Code challenge for HostShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar onSearch={handleSearch} onSearchGuest={handleSearchByGuest} />
      <FilterSection filter={categories} onHandleClick={handleClickFilter} />
      <section className="flex justify-center px-1 py-1 flex-wrap items-stretch">
        {!loading ? filteredProperties.length > 0 && filteredProperties.map((property, index) => {
          return (
            <CardProperty
              key={index}
              id={property.info.id}
              imageUrl={property.info.images.data[0].url}
              title={property.info.title}
              rate={property.info.ratings.guestSatisfactionOverall}
              price={`${property.info.currency.symbol} ${property.info.price}`}
              guestCapacity={`${property.info.maxGuestCapacity} Guests`}
              location={`${property.info.location.city}, ${property.info.location.country.title}`}
            />
          )
        })
          : <Skeleton />
        }
      </section>
      <HeaderHostShare />
    </div>
  )
}
