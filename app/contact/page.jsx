import Address from "@/components/contact/Address";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = { 
    title: "Miloš Milovanović - Frontend Developer Profile",
    description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies."
};

const index = () => {
    return (
        <div className="container lg:rounded-2xl bg-[#0c0c0c] ">
            <div data-aos="fade">
                <div className="py-12 mt-[70px] px-4 sm:px-5 md:px-10 lg:px-20">
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

export default index;