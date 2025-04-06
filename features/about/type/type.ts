export interface IAboutProps {
    email: string;
    phone: string;
    about?: string;
    address: string;
    birthday: string;
    profileImgSrc?: string;
}

export interface IPersonalInfoProps {
    title: string;
    value: string;
    link?: string;
    iconColor?: string;
    icon: React.ReactNode;
}