export interface IProjectCardProp {
    id: string;
    slug: string;
    tags: string[];
    projectName: string;
    projectCardImage: string;
}
export interface IProjectAllProp extends IProjectCardProp{
    seoTitle: string;
    mainImage: string;
    clientName: string;
    seoDescription: string;
    associatedWith?: string;
    projectTypeTags: string[];
    associatedWithUrl: string;
    projectTechStackTags: string[];
    projectDescriptionFirst: string;
    projectDescriptionSecond?: string;
}

export interface IProjectsProp {
    projects: IProjectCardProp[];
}
export interface IProjectProp {
    project: IProjectAllProp;
}