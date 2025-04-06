export interface ILinksProp {
    github?: string;
    githubLabel?: string;
    linkedin?: string;
    linkedinLabel?: string;
    behance?: string;
    behanceLabel?: string;
    instagram?: string;
    instagramLabel?: string;
    youtube?: string;
    youtubeLabel?: string;
    facebook?: string;
    facebookLabel?: string;
    dribbble?: string;
    dribbbleLabel?: string;
    x?: string;
    xLabel?: string;
    _type?: string;
}

export interface ILinksData {
    phone?: string;
    type?: '1' | '2';
    links: ILinksProp;
}