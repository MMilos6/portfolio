import Image from "next/image";
import PersonalInfo from "./PersonalInfo";

const index = () => {
    return (
        <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
            <div className="col-span-12 md:col-span-4">
                <Image
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src="/images/about/about.jpg"
                    width={300}
                    height={400}
                    alt="routePath"
                />
            </div>
            <div className="col-span-12 md:col-span-8 space-y-2.5">
                <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium  text-white mb-2.5 ">
                        Who am i?
                    </h3>
                    <p className="    text-color-910 leading-7">
                        I&apos;m Creative Director and UI/UX Designer from Sydney,
                        Australia, working in web development and print media. I enjoy
                        turning complex problems into simple, beautiful and intuitive
                        designs.
                    </p>
                    <p className="  leading-7 mt-2.5  text-color-910">
                        My aim is to bring across your message and identity in the most
                        creative way. I created web design for many famous brand companies.
                    </p>
                </div>
                <div>
                    <h3 className="text-4xl font-medium my-5  text-white">
                        Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
