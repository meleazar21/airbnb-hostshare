import Carousel from "@/components/Carousel";
import CheckIcon from "@/components/icons/CheckIcon";
import StarIcon from "@/components/icons/StarIcon";
import Amenities from "@/components/listing/Amenities";
import LocationSection from "@/components/listing/LocationSection";
import ReservationWidget from "@/components/listing/ReservationWidget";
import { IParam } from "@/interfaces/iparam.interface";
import { IProperty } from "@/models/property.model";
import { propertiesService } from "@/services/properties.service";
import { getPropertyDetails } from "@/utils/property.utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

export const getStaticProps: GetStaticProps = (context) => {
    const params = context.params as IParam;
    const data = propertiesService.getProperties();
    const property = data.find(p => p.info.id === params.slug);
    return {
        props: {
            property
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const data = propertiesService.getProperties();
    const paths = data.map(p => {
        return {
            params: {
                slug: p.info.id
            }
        }
    });
    return {
        paths,
        fallback: true
    };
}

interface IListing {
    property: IProperty;
}
const Listing = (props: IListing) => {
    const getPhotoImages = () => {
        return props.property.info.images.data.filter(i => i.type === "photo").map(i => i.url);
    }

    return (
        <div className="m-3 p-5">
            <Head>
                <title>Listing Property</title>
            </Head>
            <section>
                <h4 className="text-4xl font-semi-bold leading-none tracking-tight text-black">
                    {props.property.info.title}
                </h4>
                <div className="flex mt-3">
                    <div className="flex items-center">
                        <StarIcon width={16} heigth={16} />
                        <p className="mx-2">
                            {`${props.property.info.ratings.guestSatisfactionOverall}`} ·
                            <u className="underline">{`${props.property.info.visibleReviewCount} reviews`}</u>
                            · <u className="uderline">{`${props.property.info.location.city}, ${props.property.info.location.country.title}`}</u>
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center	m-3 p-3">
                <Carousel images={getPhotoImages()} />
            </section>
            <aside>
                <div className="flex">
                    <div className="float-left w-2/4 mx-3">
                        <div className="flex justify-between mb-4">
                            <div>
                                <h4 className="text-2xl font-semi-bold leading-none tracking-tight text-black">
                                    {props.property.info.type} hosted by {props.property.info.host.name}
                                </h4>
                                <p className="mt-1.5">
                                    {getPropertyDetails(props.property)}
                                </p>
                            </div>
                            <div>
                                <span className="text-sm bg-gray-800 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600">
                                    <Image
                                        className="w-15 h-15 rounded-full"
                                        src={props.property.info.host.avatar.url}
                                        alt={`profile_${props.property.info.id}`}
                                        width={45}
                                        height={45} />
                                </span>
                            </div>
                        </div>
                        <hr className="mb-5" />
                        <div className="mt-10">
                            <Amenities amenities={props.property.info.amenities} />
                        </div>
                    </div>
                    <div className="float-right w-2/4 mx-3">
                        <div className="flex justify-center sticky top-0">
                            <ReservationWidget
                                pricePerNight={props.property.info.price}
                                currencyCode={props.property.info.currency.code}
                                currencySymbol={props.property.info.currency.symbol}
                                rating={props.property.info.ratings.guestSatisfactionOverall}
                                reviews={props.property.info.visibleReviewCount}
                                guestCapacity={props.property.info.maxGuestCapacity}
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mt-10">
                    <LocationSection
                        lat={props.property.info.location.lat}
                        long={props.property.info.location.long}
                    />
                </div>
            </aside>
        </div>
    )
}
export default Listing;