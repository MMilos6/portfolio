import Works from "@/components/works/Works";

export const metadata = { 
    title: "Miloš Milovanović - Frontend Developer Profile",
    description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies."
};

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-[#0c0c0c]  ">
            <div data-aos="fade">
                <div className="px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="py-12 mt-[70px]">
                        <Works />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;