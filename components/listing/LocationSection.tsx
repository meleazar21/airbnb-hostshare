import { useEffect } from "react";

interface ILocationSection {
    lat: number;
    long: number;
}
const LocationSection = (props: ILocationSection) => {

    useEffect(() => {
        const iframeData = document.getElementById("googleIframe") as HTMLIFrameElement;
        iframeData.src = `https://maps.google.com/maps?q=${props.lat},${props.long}&hl=es;&output=embed`
    }, [])

    return (
        <>
            <h2 className="text-2xl font-bold leading-none tracking-tight text-black mb-10">
                Where you'll be
            </h2>
            <iframe id="googleIframe" className="w-full" height="500px"></iframe>
        </>
    )
}
export default LocationSection;