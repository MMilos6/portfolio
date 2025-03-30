import Image from "next/image";
import PersonalInfo from "./PersonalInfo";

const index = () => {
    return (
        <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-4">
                <Image
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-[30px]"
                    src="/images/about/about.jpg"
                    width={300}
                    height={400}
                    alt="routePath"
                />
            </div>
            <div className="col-span-12 md:col-span-8 space-y-2.5">
                <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium mt-[-8px] text-white mb-2.5 ">
                        Who am I?
                    </h3>
                    <p className="text-color-910 leading-7">
                        Hi, I&apos;m 32 years old with over six years of experience as a software developer, primarily focused on frontend development, along with expertise in UI/UX design and photography. I have an excellent command of verbal and written English.
                    </p>
                    <p className="mt-2.5 text-color-910 leading-7">
                        I currently live in Belgrade. Passionate about self-improvement, I love exploring new technologies, tackling challenges, and putting in great effort to deliver high-quality products.
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