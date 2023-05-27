const FooterHostShare = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-1.5 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-1.5 dark:bg-gray-800 dark:border-gray-600">
            < div className="w-full max-w-screen-xl mx-auto" >
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">{`© ${new Date().getFullYear()} HostShare. All Rights Reserved.`}</span>
            </div >
        </footer >
    );
}
export default FooterHostShare;