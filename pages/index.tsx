import CardProperty from "@/components/CardProperty";
import FilterSection from "@/components/FilterSection";
import FooterHostShare from "@/components/FooterHostShare";
import NavBar from "@/components/NavBar";
import Skeleton from "@/components/Skeleton";
import { ICategoryFilter } from "@/interfaces/common.interface";
import { IProperty } from "@/models/property.model";
import { categoriesService } from "@/services/categories.service";
import { propertiesService } from "@/services/properties.service";
import { getCategoryName } from "@/utils/property.utils";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

export const getStaticProps: GetStaticProps = () => {
  const properties = propertiesService.getProperties();
  return {
    props: {
      properties
    }
  };
}

interface ISearch {
  city: string;
  guest: string;
}

interface IHome {
  properties: Array<IProperty>;
}
export default function Home(props: IHome) {

  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<ISearch>({ city: '', guest: '' });
  const [filteredProperties, setFilteredProperties] = useState<Array<IProperty>>(props.properties);
  const [categories, setCategories] = useState<Array<ICategoryFilter>>([]);

  const handleSearchGuest = (criteria: string) => {
    const guestsNumber = criteria.replace(/\D/g, '');
    setSearch({ ...search, guest: guestsNumber });
    setLoading(true);
  }

  const handleSearch = (criteria: string) => {
    setSearch({ ...search, city: criteria });
    setLoading(true);
  }

  const applyFilters = () => {
    const categoryIndex = categories.findIndex(c => c.selected);
    let newFiltered = propertiesService.getAllProperties();
    if (!search.city.trim() && !search.guest.trim() && categoryIndex === -1) {
      return [...props.properties];
    }
    if (search.city.trim()) {
      newFiltered = filteredProperties.filter(property => property.info.location.city.toLowerCase().includes(search.city.toLowerCase()));
    }
    if (search.guest.trim()) {
      const numberOfGuests = isNaN(parseInt(search.guest)) ? 0 : parseInt(search.guest)
      newFiltered = newFiltered.filter(property => property.info.maxGuestCapacity === numberOfGuests);
    }
    if (categoryIndex !== -1) {
      const categoryId = categories[categoryIndex]?.category.id;
      newFiltered = newFiltered.filter(property => property.category === categoryId);
    }
    return newFiltered;
  }

  const handleClickFilter = (filter: { categoryId: string; selected: boolean }) => {
    setLoading(true);
    const newFilteredCategories = categories as ICategoryFilter[];
    const result = newFilteredCategories.map(f => {
      if (f.category.id === filter.categoryId) {
        return { ...f, selected: filter.selected };
      }
      return { ...f };
    });
    result.forEach(item => {
      if (item.category.id !== filter.categoryId)
        item.selected = false;
      else
        item.selected = filter.selected;
    });

    let newFiltered = filter.selected ? propertiesService.getPropertiesByCategoryId(filter.categoryId)
      : propertiesService.getAllProperties();

    if (!isNaN(parseInt(search.guest))) {
      const numberOfGuests = isNaN(parseInt(search.guest)) ? 0 : parseInt(search.guest)
      newFiltered = newFiltered.filter(property => property.info.maxGuestCapacity === numberOfGuests);
    }
    if (search.city) {
      newFiltered = filteredProperties.filter(property => property.info.location.city.toLowerCase().includes(search.city.toLowerCase()));
    }
    setCategories(result);
    const searchByCategory = setTimeout(() => {
      if (filter.selected && (!search.city.trim() || !search.guest.trim())) {
        newFiltered = newFiltered.filter(property => property.category === filter.categoryId);
        setFilteredProperties(newFiltered);
      } else if (!filter.selected && (search.city.trim() || search.guest.trim())) {
        setFilteredProperties(newFiltered)
      } else {
        setFilteredProperties(props.properties);
      }

      setLoading(false);
    }, 2000);
    return () => clearTimeout(searchByCategory);
  }

  useEffect(() => {
    const filterDebounce = setTimeout(() => {
      const newFiltered = applyFilters();
      setFilteredProperties(newFiltered);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(filterDebounce);
  }, [search])

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
      <NavBar
        guestNumber={search.guest}
        onSearch={handleSearch}
        onSearchGuest={handleSearchGuest}
      />
      <FilterSection filter={categories} onHandleClick={handleClickFilter} />
      <section className="flex mb-2 justify-center px-1 py-1 flex-wrap items-stretch">
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
              type={getCategoryName(property?.category ?? "", categories.map(c => c.category)) ?? ""}
            />
          )
        })
          : <Skeleton />
        }
      </section>
      <FooterHostShare />
    </div>
  )
}
