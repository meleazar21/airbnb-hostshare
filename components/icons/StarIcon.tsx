import { IIcon } from "@/interfaces/icon.interface";

const StarIcon = (props: IIcon) => {
    return (
        <div style={{ maxWidth: props.width, maxHeight: props.heigth }}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={`${props.width}px`} height={`${props.heigth}px`} viewBox="0 0 122.88 116.864" enableBackground="new 0 0 122.88 116.864" >
                <polygon fillRule="evenodd" clipRule="evenodd" points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0" />
            </svg>
        </div>
    )
}

export default StarIcon;