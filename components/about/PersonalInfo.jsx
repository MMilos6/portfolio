import personalInfo from "@/data/personalInfo";

const PersonalInfo = () => {
    return (
        <>
            {personalInfo.map(({iconColor, id, icon, name, meta}) => (
                <div className="flex" key={id}>
                    <span
                        className={`bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
                        style={{color: iconColor}}
                    >
                        {icon}
                    </span>
                    <div className="space-y-1">
                        <p className="text-xs    text-color-910">
                            {name}
                        </p>
                        <p className="font-medium  text-white">{meta}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PersonalInfo;