import Link from "next/link";

export const metadata = { title: "404 || Miloš Milovanović - Portfolio" };

const NotFound = () => {
    return (
        <div className="mt-12 w-full h-full flex flex-col justify-center items-center">
            <h1 className="mt-12 text-7xl leading-none text-white font-extrabold md:text-8xl">
                404!
            </h1>
            <p className="text-medium text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
                the page you are looking for does not exist
            </p>

            <Link
                href="/"
                className="flex items-center mx-auto bg-gradient-to-r from-[#2E8B57] to-[#3a9f3a] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[5px]"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default NotFound;
