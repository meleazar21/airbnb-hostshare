import { IIcon } from "@/interfaces/icon.interface";

const KitchenIcon = (props: IIcon) => {
    return (
        <div style={{ maxWidth: props.width, maxHeight: props.heigth }}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 98.89" stroke="black" fill={`${props.selected ? "black" : "none"}`} className="w-6 h-6">
                <path d="M1.72,92h119.43c0.94,0,1.72,0.79,1.72,1.72v3.44c0,0.93-0.78,1.72-1.72,1.72H1.72C0.78,98.89,0,98.12,0,97.17 v-3.44C0,92.78,0.78,92,1.72,92L1.72,92z M66.4,19.73c31.57,2.52,56.4,25.25,56.4,57.47c0,2.62-0.17,5.19-0.48,7.72l-121.75,0 c-0.32-2.56-0.48-5.14-0.48-7.73c0-32.37,25.06-55.19,56.83-57.5V9.92l-9.68,0c-0.98,0-1.78-0.8-1.78-1.78V1.78 c0-0.98,0.8-1.78,1.78-1.78h28.7c0.98,0,1.78,0.8,1.78,1.78v6.37c0,0.98-0.8,1.78-1.78,1.78H66.4L66.4,19.73L66.4,19.73L66.4,19.73 z" />
            </svg>
        </div>
    )
}

export default KitchenIcon;