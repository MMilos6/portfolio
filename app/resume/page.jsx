import dynamic from "next/dynamic";
import Tag from "@/components/tag/Tag";
import Resume from "@/components/resume/Resume";

export const metadata = { title: "Miloš Milovanović - Portfolio" };

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
                <div className="container sm:px-5 md:px-10 lg:px-20 ">
                    <div className="py-12 px-4">
                        <h2 className="after-effect after:left-52 mb-[40px] mt-12 lg:mt-0">
                            Resume
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                            <Resume />
                        </div>
                    </div>
                </div>

                <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="w-full">
                        <h4 className="text-5xl dark:text-white font-medium mb-8">
                            Tech Stack
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

export default dynamic(() => Promise.resolve(index), { ssr: false });