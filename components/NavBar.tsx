import Image from "next/image";
import { FormEvent, useState } from "react";
import CalendarInputIcon from "./icons/CalendarInputIcon";

interface INavBar {
    onSearch: Function;
}
const NavBar = (props: INavBar) => {

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        props.onSearch(e.currentTarget.value);
    }

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="grid grid-flow-col justify-stretch">
                    <div>
                        <Image src="/statics/logo.png" className="mr-3 h-8" alt="logo" width={130} height={36} />
                    </div>
                    <div className="content-center">
                        <div className="flex items-stretch">
                            <div className="relative flex-1 mx-2">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                </div>
                                <input
                                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}
                                    type="text"
                                    name="email"
                                    id="topbar-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search by city"
                                />
                            </div>
                            <div className="flex-1 mx-2">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <input name="start" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                                    </div>
                                    <span className="mx-4 text-white font-bold">to</span>
                                    <div className="relative">
                                        <input name="end" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="text-sm bg-gray-800 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600">
                            <Image className="w-10 h-10 rounded-full" src="/statics/profile.jpg" alt="profile photo" width={36} height={36} />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default NavBar;