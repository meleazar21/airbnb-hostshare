
import { IIcon } from "@/interfaces/icon.interface";

const CountrySideIcon = (props: IIcon) => {
    return (
        <div style={{ maxWidth: props.width, maxHeight: props.heigth }}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 71.5" stroke="black" fill={`${props.selected ? "black" : "none"}`} className="w-6 h-6">
                <path d="M44.44,71.5H5.35H0L2.92,67L44.36,3.02c0.23-0.41,0.57-0.77,0.99-1.03c1.37-0.85,3.16-0.43,4.01,0.93l16.04,25.64v0 l3.37,5.38l-1.75,2.7l-4.09-6.54c-2.45-0.73-5.86,8.9-8.45,8.53c-3.57-0.51-7.61-12.43-10.16-9.32l-8.71,10.62l-9.13-3.95 L5.35,68.58h40.97L44.44,71.5L44.44,71.5z M119.06,71.28H59.77l-3.89,0L58,68.01l15.57-24.04l0.73-1.13h0l13.78-21.28 c0.17-0.3,0.41-0.56,0.72-0.75c0.99-0.62,2.3-0.31,2.91,0.68l11.65,18.61l0,0l17.42,27.83c0.05,0.07,0.1,0.14,0.14,0.22l1.96,3.13 L119.06,71.28L119.06,71.28z M59.77,69.16h59.29l-17.49-27.95c-1.78-0.53-4.25,6.46-6.14,6.19c-2.59-0.37-5.53-9.02-7.38-6.77 l-6.32,7.71l-6.63-2.87L59.77,69.16L59.77,69.16z M75.39,0c4.6,0,8.34,3.73,8.34,8.34s-3.73,8.34-8.34,8.34 c-4.6,0-8.34-3.73-8.34-8.34S70.78,0,75.39,0L75.39,0z" />
            </svg>
        </div>
    )
}

export default CountrySideIcon;