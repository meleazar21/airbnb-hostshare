import Image from "next/image";
import { useState } from "react";
import NextArrowIcon from "./icons/ArrowIcon";
import { ArrowType } from "@/enums/arrow.enum";
interface ICarousel {
    images: Array<string>;
}
const Carousel = (props: ICarousel) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const movePrev = () => {
        if (currentIndex > 0)
            setCurrentIndex((prevState: number) => prevState - 1);
        else
            setCurrentIndex(props.images.length - 1);
    };

    const moveNext = () => {
        if (currentIndex < props.images.length)
            setCurrentIndex((prevState: number) => prevState + 1);
        else
            setCurrentIndex(0);
    };


    return (
        <>
            <div id="controls-carousel" className="relative w-3/4 h-3/4" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {props.images.map((image: string, index: number) => {
                        return (
                            <div className={`${currentIndex !== index ? "hidden" : ""}`} data-carousel-item="active" key={index}>
                                <Image src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width={300} height={300} />
                            </div>

                        );
                    })}
                </div>
                <button type="button" onClick={movePrev} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <NextArrowIcon
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white-500 group-hover:bg-white dark:group-hover:bg-gray-200 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                        type={ArrowType.Previous}
                    />
                </button>
                <button type="button" onClick={moveNext} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <NextArrowIcon
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white-500 group-hover:bg-white dark:group-hover:bg-gray-200 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                        type={ArrowType.Next}
                    />
                </button>
            </div>
        </>
    );
}
export default Carousel;    