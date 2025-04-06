export interface IEducationItemProp {
    degree: string;
    endDate?: string;
    startDate: string;
    schoolName: string;
    institutionLink?: string;
}

export interface IPersonalItemProp {
    title: string;
    endDate?: string;
    startDate: string;
    description?: string;
}

export interface IWorkExperienceItemProp {
    role: string;
    endDate?: string;
    startDate: string;
    companyLink?: string;
    companyName?: string;
}

export interface IResumeProp {
    personal: IPersonalItemProp[];
    education: IEducationItemProp[];
    workExperience: IWorkExperienceItemProp[];
}

export interface IResumeColumnItem {
    title: string;
    icon: React.ReactNode;
    items: (IEducationItemProp | IPersonalItemProp | IWorkExperienceItemProp)[];
    renderItem: (item: IEducationItemProp | IPersonalItemProp | IWorkExperienceItemProp, index: number) => React.ReactNode;
}