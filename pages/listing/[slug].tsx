import StarIcon from "@/components/icons/StarIcon";
import { IParam } from "@/interfaces/iparam.interface";
import { IProperty } from "@/models/property.model";
import { propertiesService } from "@/services/properties.service";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = (context) => {
    const params = context.params as IParam;
    console.log({ slug: params.slug });
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
    console.log(props.property);
    return (
        <>
            <Head>
                <title>Listing Property</title>
            </Head>
            <section className="m-3 p-3">
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
        </>
    )
}
export default Listing;