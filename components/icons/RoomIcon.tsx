import { IIcon } from "@/interfaces/icon.interface";

const RoomIcon = (props: IIcon) => {
    return (
        <div className={props.className} style={{ maxWidth: props.width, maxHeight: props.heigth }}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 96.43 122.88" stroke="black" fill={`${props.selected ? "black" : "none"}`} className="w-6 h-6">
                <path d="M0,115.27h4.39V1.99V0h1.99h82.93h1.99v1.99v113.28h5.14v7.61H0V115.27L0,115.27z M13.88,8.32H81.8h0.83v0.83 v104.89h4.69V3.97H8.36v111.3h4.69V9.15V8.32H13.88L13.88,8.32z M19.75,59.66l4.23-1.21v15.81l-4.23-1.53V59.66L19.75,59.66z" />
            </svg>
        </div >
    )
}

export default RoomIcon;