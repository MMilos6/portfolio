import { ILinksProp } from '@/features/links/type/type';

interface IAvatarsProps {
    avatar1Src: string;
    avatar2Src?: string;
}

export interface IHeroProps {
    files?: string[];
    lastName: string;
    position: string;
    firstName: string;
    avatars: IAvatarsProps;
    links: ILinksProp;
    showHat?: boolean;
}