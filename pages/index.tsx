import CardProperty from "@/components/CardProperty";
import FilterSection from "@/components/FilterSection";
import NavBar from "@/components/NavBar";
import { ICategoryFilter } from "@/interfaces/common.interface";
import { IProperty } from "@/models/property.model";
import { categoriesService } from "@/services/categories.service";
import { propertiesService } from "@/services/properties.service";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";


export const getStaticProps: GetStaticProps = () => {
  const categories = categoriesService.getCategories();
  const properties = propertiesService.getProperties();
  return {
    props: {
      filter: categories,
      properties
    }
  };
}

interface IHome {
  filter: Array<ICategoryFilter>;
  properties: Array<IProperty>;
}
export default function Home(props: IHome) {

  const [search, setSearch] = useState<string>("");
  const [filteredProperties, setFilteredProperties] = useState<Array<IProperty>>(props.properties);

  const handleSearch = useCallback((criteria: string) => {
    setSearch(criteria);
  }, [search])

  useEffect(() => {

  }, [handleSearch])

  return (
    <div className="max-w-full">
      <Head>
        <title>HostShare</title>
        <meta name="description" content="Code challenge for HostShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar onSearch={handleSearch} />
      <FilterSection filter={props.filter} />
      <section className="flex flex-wrap items-stretch">
        {filteredProperties.length > 0 && filteredProperties.map((property, index) => {
          return (
            <CardProperty
              key={index}
              id={property.info.id}
              imageUrl={property.info.images.data[0].url}
              title={property.info.title}
              rate={property.info.ratings.guestSatisfactionOverall}
              price={`${property.info.currency.symbol} ${property.info.price}`}
              guestCapacity={`${property.info.maxGuestCapacity} Guests`}
            />
          )
        })}
      </section>
    </div>
  )
}
