"use client";
import { useTheme } from "next-themes";
import addressData from "@/data/addressData";

const Address = () => {
    return (
        <>
            {addressData.map((item, i) => (
                <div
                    key={i}
                    style={{
                        background: "#101010",
                    }}
                    className="flex flex-wrap p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
                >
                    <div className="space-y-2">
                        <p className="text-xl font-semibold  text-white">
                            {item?.title} :
                        </p>
                        {item?.info}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Address;