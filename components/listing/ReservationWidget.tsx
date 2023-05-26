interface IReservationWidget {
    pricePerNight: string;
    rating: number;
    reviews: number;
}

const ReservationWidget = (props: IReservationWidget) => {
    return (
        <>
            <div className="p-4 m-4 max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>

        </>
    )
}
export default ReservationWidget