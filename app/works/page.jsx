import dynamic from "next/dynamic";
import Works from "@/components/works/Works";

export const metadata = { title: "Miloš Milovanović - Portfolio" };

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-[#111111]  ">
            <div data-aos="fade">
                <div className=" mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="py-12">
                        <h2 className="after-effect  after:left-52 mt-12  lg:mt-0">
                            Portfolio
                        </h2>
                        <Works />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });