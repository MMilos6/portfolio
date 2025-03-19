import dynamic from "next/dynamic";
import Address from "@/components/contact/Address";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = { title: "Miloš Milovanović - Portfolio" };

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111] ">
            <div data-aos="fade">
                <div className="py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                    <h2 className="after-effect after:left-52 mb-[40px] mt-12  lg:mt-0">
                        Contact
                    </h2>

                    <div className="lg:flex gap-x-20">
                        <div className="w-full xl:w-[40%] space-y-6">
                            <Address />
                        </div>
                        <div className="w-full mt-8 lg:mt-0 xl:w-[60%]">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });