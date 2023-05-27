import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StarIcon from "./icons/StarIcon";
import { Paths } from "@/constants/paths";

interface ICard {
    imageUrl: string;
    title: string;
    id: string;
    rate: number;
    price: string;
    guestCapacity: string;
    location: string;
    type: string;
}

const CardProperty = (props: ICard) => {

    return (
        <>
            <motion.div whileHover={{ scaleY: 1.1 }} className="max-w-sm max-h-sm bg-white m-3 border border-brand rounded-lg shadow dark:bg-white dark:border-brand">
                <div className="max-w-sm h-none">
                    <Link href={`${Paths.Listing}${props.id}`} className="max-w-full">
                        <Image className="rounded-t-lg w-96 h-60" src={props.imageUrl} width={300} height={300} alt={props.id} />
                    </Link>
                </div>
                <div className="p-2">
                    <div className="flex justify-between items-baseline">
                        <div>
                            <h6 className="mb-1 font-bold tracking-tight text-black dark:text-black">{props.title}</h6>
                        </div>
                        <div className="flex items-center">
                            <StarIcon width={16} heigth={16} />
                            <p className="mx-2">{`${props.rate}`}</p>
                        </div>
                    </div>
                    <p className="mb-1 text-gray-500 dark:text-gray-500">{props.location}</p>
                    <p className="mb-1 text-gray-500 dark:text-gray-500">{props.guestCapacity}</p>
                    <p className="mb-1 text-gray-500 dark:text-gray-500">{props.type}</p>
                    <p className="mb-1 font-bold text-black dark:text-black">{`${props.price} night`}</p>
                </div>
            </motion.div>
        </>
    );
}
export default CardProperty;