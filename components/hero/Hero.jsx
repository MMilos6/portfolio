import Image from "next/image";
import Social from "../social/Social";

const Hero = () => {
    return (
        <div
            className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
            data-aos="fade"
        >
            <Image
                className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] shadow-[0_6px_10px_rgba(0,0,0,1)]"
                src="/images/about/avatar.jpg"
                width={250}
                height={250}
                priority
                alt="hero image"
            />
            <h3 className="mt-6 mb-1 text-5xl font-semibold text-white">
                Miloš Milovanović
            </h3>
            <p className="mb-4 text-center px-5 text-[#7B7B7B]">Software Developer | Graphic Designer | Photographer</p>
            <div className="flex space-x-3">
                <Social />
            </div>
            <a
                download
                href="/images/cv.pdf"
                className="flex text-[#A6A6A6] items-center transition ease-linear bg-gradient-to-r from-[#3d6037] to-[#182f17] px-8 py-3 text-lg text-white rounded-[35px] mt-6 shadow-[0_5px_10px_rgba(0,0,0,1)]"
            >
                Download CV
            </a>

        </div>
    );
};

export default Hero;