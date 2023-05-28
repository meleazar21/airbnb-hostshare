import Image from "next/image";
import { FormEvent } from "react";
import SearchIncon from "./icons/SearchIcon";

interface INavBar {
    guestNumber: string;
    onSearch: Function;
    onSearchGuest: Function;
}
const NavBar = (props: INavBar) => {

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'city')
            props.onSearch(e.currentTarget.value);
        else
            props.onSearchGuest(e.currentTarget.value);
    }

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="sm:flex-nowrap md:flex lg:flex flex-wrap justify-between items-center">
                    <div className="sm:mx-1 flex justify-start items-center">
                        <Image src="/statics/logo.png" className="mr-3 h-8" alt="logo" width={130} height={36} />
                    </div>
                    <div className="sm:flex flex-nowrap mt-2 md:flex lg:flex jutify-center lg:pl-2">
                        <div className="sm:mx-1 md:mx-3 lg:mx-3">
                            <label htmlFor="topbar-search" className="sr-only">Search</label>
                            <div className="relative mt-1 lg:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <SearchIncon />
                                </div>
                                <input
                                    onChange={handleChange}
                                    name="city"
                                    id="seach-nav-bar"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="search by city"
                                />
                            </div>
                        </div>
                        <div className="mb-relative mt-1 lg:2/4  md:mx-3 lg:mx-3">
                            <input
                                value={props.guestNumber}
                                onChange={handleChange}
                                name="guest"
                                id="guest-nav-bar"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="number of guests"
                            />
                        </div>
                    </div>
                    <div className="sm:flex items-center lg:order-2">
                        <Image className="sm:mt-1 w-10 h-10 rounded-full" src="/statics/profile.jpg" alt="profile photo" width={36} height={36} />
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default NavBar;