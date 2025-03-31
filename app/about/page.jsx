import About from "@/components/about";
import Service from "@/components/service/Service";

export const metadata = { 
    title: "Miloš Milovanović - Frontend Developer Profile",
    description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies."
};

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-[#0c0c0c] pb-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <div data-aos="fade">
                <div className="py-12 mt-[70px]">
                    <About />
                </div>
                <div className="pb-12 ">
                    <h3 className="text-[35px] text-white font-medium pb-5">
                        My expertise
                    </h3>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 " >
                        <Service />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;