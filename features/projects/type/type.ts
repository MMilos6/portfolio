export interface IProjectCardProp {
    id: string;
    slug: string;
    image: string;
    tags: string[];
    projectYear: string;
    projectName: string;
}

export interface IProjectContributorProp {
    name: string;
    lnProfile: string;
}
export interface IProjectAllProp extends IProjectCardProp{
    seoTitle: string;
    clientName: string;
    projectLink?: string;
    seoDescription: string;
    associatedWith?: string;
    projectIndustry: string;
    projectTypeTags: string[];
    associatedWithUrl?: string;
    projectTechStackTags: string[];
    projectDescriptionFirst: string;
    projectDescriptionSecond?: string;
    contributors?: IProjectContributorProp[];
}

export interface IProjectsProp {
    projects: IProjectCardProp[];
}
export interface IProjectProp {
    project: IProjectAllProp;
}