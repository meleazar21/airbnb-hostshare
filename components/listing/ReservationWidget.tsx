import { FormEvent, useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getNumberOfNights } from "@/utils/dates.utils";
import { HOSTSHARE_FEE, MAX_LENGTH_NUMBER_INPUT, NUMBER_OF_DECIMALS } from "@/constants/commonStrings";
import { calculateSubtotal } from "@/utils/property.utils";

interface IReservationWidget {
    pricePerNight: number;
    currencyCode: string;
    currencySymbol: string;
    rating: number;
    reviews: number;
    guestCapacity: number;
}

interface IReservationStates {
    guests: string;
    startDate: Date;
    endDate: Date;
    nights: number;
    subtotal: number;
    total: number;
}

const ReservationWidget = (props: IReservationWidget) => {

    const [reservationStates, setReservationStates] = useState<IReservationStates>({ guests: "2", startDate: new Date(), endDate: new Date(new Date().setDate(new Date().getDate() + 1)), nights: 0, subtotal: 0, total: 0 });

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget;
        switch (name) {
            case "start":
                setReservationStates({
                    ...reservationStates,
                    startDate: new Date(value)
                });
                break;
            case "end":
                setReservationStates({
                    ...reservationStates,
                    endDate: new Date(value)
                });
                break;
            case "guests":
                const numericValue = value.replace(/\D/g, '');
                setReservationStates({
                    ...reservationStates,
                    guests: numericValue
                });
                break;
        }

    }

    useEffect(() => {
        const nights = getNumberOfNights(reservationStates.startDate, reservationStates.endDate);
        const subtotal = calculateSubtotal(props.pricePerNight, nights, reservationStates.guests ? parseInt(reservationStates.guests) : 0, props.guestCapacity);
        const total = subtotal + (subtotal > 0 ? parseInt(HOSTSHARE_FEE) : 0);
        setReservationStates({ ...reservationStates, nights: nights, subtotal, total });
    }, [reservationStates.startDate, reservationStates.endDate, reservationStates.guests])

    return (
        <>
            <div className="p-4 max-w-sm rounded overflow-hidden shadow-lg w-full">
                <div className="flex justify-between">
                    <p>
                        <span className="text-xl font-bold leading-none tracking-tight text-black">{`${props.currencyCode} ${props.pricePerNight} `}</span>
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
                            <DatePicker
                                name="start"
                                value={reservationStates.startDate.toLocaleDateString()}
                                onChange={(e: Date) => setReservationStates({ ...reservationStates, startDate: e })}
                                className="border border-brand text-black text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-white dark:placeholder-brand dark:text-black"
                                minDate={reservationStates.startDate}
                            />
                        </div>
                        <span> To </span>
                        <div>
                            <DatePicker
                                name="end"
                                value={reservationStates.endDate.toLocaleDateString()}
                                onChange={(e: Date) => setReservationStates({ ...reservationStates, endDate: e })}
                                className="border border-brand text-black text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-white  dark:placeholder-brand dark:text-black"
                                minDate={reservationStates.startDate}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-3">
                    <span>Guests</span>
                    <input
                        onChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}
                        type="text"
                        name="guests"
                        className="bg-white border border-brand text-black sm:text-sm rounded-lg w-full pl-10 p-2.5"
                        min={0}
                        value={reservationStates.guests}
                        maxLength={parseInt(MAX_LENGTH_NUMBER_INPUT)}
                    />
                </div>
                <div className="mt-6">
                    <button type="button" className="text-white bg-brand w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Reserve</button>
                </div>
                <div className="flex justify-center mt-3">
                    <p>You won't be charged yet</p>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between">
                        <p>
                            <u className="uderline">{`${props.currencyCode} ${props.pricePerNight} x ${reservationStates.nights} ${reservationStates.nights == 1 ? 'night' : 'nights'}`}</u>
                        </p>
                        <p>{`${props.currencySymbol} ${reservationStates.subtotal.toFixed(parseInt(NUMBER_OF_DECIMALS))} ${props.currencyCode}`}</p>
                    </div>
                    <div className="mt-1 flex justify-between">
                        <p>
                            <u className="uderline">HostShare service fee</u>
                        </p>
                        <p>{`${props.currencySymbol} ${reservationStates.subtotal > 0 ? HOSTSHARE_FEE : 0} ${props.currencyCode}`}</p>
                    </div>
                    <div className="mt-6">
                        <hr />
                        <div className="mt-1 flex justify-between">
                            <p className="font-bold">Total</p>
                            <p>{`${props.currencySymbol} ${reservationStates.total.toFixed(parseInt(NUMBER_OF_DECIMALS))} ${props.currencyCode}`}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default ReservationWidget