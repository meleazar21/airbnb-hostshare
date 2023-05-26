import { ICategory, ICategoryFilter } from "@/interfaces/common.interface"
import HomeIcon from "./icons/HomeIcon";
import { IconType } from "@/constants/icons-type.constants"
import CabinIcon from "./icons/CabinIcon"
import PoolIcon from "./icons/PoolIcon"
import CountrySideIcon from "./icons/CountrySideIcon"
import CitiesIcon from "./icons/CitiesIcon"
import FarmIcon from "./icons/FarmIcon"
import CampingIcon from "./icons/CampingIcon"
import LakeIcon from "./icons/LakeIcon"
import ViewIcon from "./icons/ViewIcon"
import PlayIcon from "./icons/PlayIcon"
import ParkIcon from "./icons/ParkIcon"
import BeachIcon from "./icons/BeachIcon"
import SkiingIcon from "./icons/SkiingIcon"
import VineyardsIcon from "./icons/VineyardsIcon"
import KitchenIcon from "./icons/KitchenIcon"
import GolfIcon from "./icons/GolfIcon"
import SurfingIcon from "./icons/SurfingIcon"
import DesertIcon from "./icons/DesertIcon"
import IslandIcon from "./icons/IslandIcon"
import CastleIcon from "./icons/CastleIcon"
import RoomIcon from "./icons/RoomIcon"

interface IFilterCategory {
    filter: ICategoryFilter;
    onHandleClick: Function;
}

const FilterCategory = (props: IFilterCategory) => {

    const getIconByCategory = (className: string, width: number, heigth: number, categoryId: string, selected: boolean) => {
        switch (categoryId) {
            case IconType.Rooms:
                return <RoomIcon className={className} width={width} heigth={heigth} selected={selected} />;
            case IconType.Cabins:
                return <CabinIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Pools:
                return <PoolIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.CountrySide:
                return <CountrySideIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Cities:
                return <CitiesIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Farms:
                return <FarmIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Camping:
                return <CampingIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Lake || IconType.LakeFront || IconType.Boat:
                return <LakeIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Views:
                return <ViewIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Parks:
                return <PlayIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Play:
                return <ParkIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Beach || IconType.FrontBeach:
                return <BeachIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Skiing:
                return <SkiingIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.VineyYards:
                return <VineyardsIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Cheff:
                return <KitchenIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Golfing:
                return <GolfIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Surfing:
                return <SurfingIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Desert:
                return <DesertIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Island:
                return <IslandIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.Castle:
                return <CastleIcon className={className} width={width} heigth={heigth} selected={selected} />
            case IconType.TinyHomes || IconType.EarthHomes || IconType.HistoricalHomes:
                return <HomeIcon className={className} width={width} heigth={heigth} selected={selected} />
            default:
                return <HomeIcon className={className} width={width} heigth={heigth} selected={selected} />;
        }
    }

    const handleClick = () => {
        props.onHandleClick({ categoryId: props.filter.category.id, selected: !props.filter.selected });
    }

    return (
        <div className="flex content-center items-stretch w-50 h-50 hover:border-b-indigo-500">
            <button
                className="flex flex-col items-stretch h-35 w-32 rounded shadow-lg hover:cursor-pointer"
                onClick={handleClick}
            >
                <div className="flex items-stretch justify-center my-2">
                    {getIconByCategory("w-full", 16, 16, props.filter.category.id, props.filter.selected)}
                </div>
                <div className="flex justify-center my-2">
                    <p>{props.filter.category.title}</p>
                </div>
            </button>
        </div>
    )
}
export default FilterCategory