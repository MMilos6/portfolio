import Works from "@/components/works/Works";

export const metadata = { title: "Miloš Milovanović - Portfolio" };

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-[#0c0c0c]  ">
            <div data-aos="fade">
                <div className="px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="py-12 mt-[50px]">
                        <Works />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;