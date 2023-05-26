import { ArrowType } from "@/enums/arrow.enum";

interface IArrowIcon {
    type: ArrowType;
    className: string;
}
const ArrowIcon = (props: IArrowIcon) => {
    return (
        <>
            {props.type === ArrowType.Next ? (
                <span className={props.className}>
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span className="sr-only">Next</span>
                </span>
            )
                : (
                    <span className={props.className}>
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                )
            }
        </>
    )
}
export default ArrowIcon;