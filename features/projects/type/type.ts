export interface IProjectCardProp {
    id: string;
    slug: string;
    tags: string[];
    projectYear: string;
    projectName: string;
    projectCardImage: string;
}

export interface IProjectContributorProp {
    name: string;
    lnProfile: string;
}
export interface IProjectAllProp extends IProjectCardProp{
    seoTitle: string;
    mainImage: string;
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