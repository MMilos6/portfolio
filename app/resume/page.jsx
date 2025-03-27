import Tag from "@/components/tag/Tag";
import Resume from "@/components/resume/Resume";

export const metadata = { 
    title: "Miloš Milovanović - Portfolio",
    description: "Explore the portfolio of Miloš Milovanović, a frontend developer specializing in React, Next.js, and modern web technologies."
};

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-[#0c0c0c]">
            <div data-aos="fade">
                <div className="container sm:px-5 md:px-10 lg:px-20 ">
                    <div className="py-12 px-4 mt-[50px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                            <Resume />
                        </div>
                    </div>
                </div>

                <div className="container  bg-[#101010] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="w-full">
                        <h4 className="text-5xl text-white font-medium mb-4">
                            Tools & Tech I&apos;ve used in projects
                        </h4>

                        <div className="flex gap-3 flex-wrap">
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;