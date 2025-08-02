export interface IAboutProps {
    email: string;
    phone: string;
    about?: string;
    address: string;
    lastName?: string;
    birthday: string;
    firstName?: string;
    profileImgSrc?: string;
}

export interface IPersonalInfoProps {
    title: string;
    value: string;
    link?: string;
    iconColor?: string;
    icon: React.ReactNode;
}