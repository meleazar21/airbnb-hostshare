import StarIcon from "../icons/StarIcon";

interface IReservationWidget {
    pricePerNight: string;
    rating: number;
    reviews: number;
}

const ReservationWidget = (props: IReservationWidget) => {
    return (
        <>
            <div className="p-4 max-w-sm rounded overflow-hidden shadow-lg w-full">
                <div className="flex justify-between">
                    <p>
                        <span className="text-xl font-bold leading-none tracking-tight text-black">{`${props.pricePerNight} `}</span>
                        <span>night</span>
                    </p>
                    <div className="flex items-center">
                        <StarIcon width={14} heigth={14} />
                        <p className="mx-2">{props.rating} · <u className="uderline text-color-gray-300">{`${props.reviews} reviews`}</u></p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex items-center sm:inline-flex">
                        <div>
                            <input name="start" type="date" className="border border-brand text-black text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-white dark:placeholder-brand dark:text-black" placeholder="Start Date" />
                        </div>
                        <span> To </span>
                        <div>
                            <input name="end" type="date" className="border border-brand text-black text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-white  dark:placeholder-brand dark:text-black" placeholder="End Date" />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-3">
                    <input
                        type="number"
                        name="guest"
                        className="bg-white border border-brand text-black sm:text-sm rounded-lg w-full pl-10 p-2.5"
                        placeholder="Number of Guest"
                        min={0}
                    />
                </div>
                <div className="mt-6">
                    <button type="button" className="text-white bg-brand w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Reserve</button>
                </div>
                <div className="flex justify-center mt-3">
                    <p>You won't be charged yet</p>
                </div>
                <div className="mt-6">

                </div>
            </div >
        </>
    )
}
export default ReservationWidget