import serviceData from "@/data/serviceData";

const Service = () => {
    return (
        <>
            {serviceData.map(({id, color, icon, title, des}) => (
                <div
                    className="about-box bg-transparent"
                    key={id}
                >
                    <span
                        className='text-[30px]'
                        style={{color: color}}
                    >
                        {icon}
                    </span>

                    <div className="space-y-2">
                        <h3 className=" text-white text-xl font-semibold">
                            {title}
                        </h3>
                        <p className=" leading-8  text-[#A6A6A6]">
                            {des}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Service;