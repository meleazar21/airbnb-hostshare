import { IAmenities } from "@/models/property.model";
import CheckIcon from "../icons/CheckIcon";

interface IAmenetiesComponent {
    amenities: IAmenities;
}
const Amenities = (props: IAmenetiesComponent) => {
    return (
        <>
            <h2 className="text-2xl font-bold leading-none tracking-tight text-black">What this place offers</h2>
            <div>
                <ul className="h-full flex w-fullflex-col flex-wrap mt-5 mb-8 text-left text-black dark:text-black">
                    {props.amenities?.data.map((a, index: number) => {
                        return (
                            <li className="flex items-center block m-2" key={index}>
                                <CheckIcon />
                                <span>{a.title}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Amenities