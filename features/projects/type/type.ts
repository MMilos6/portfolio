export interface IProjectProp {
    id: string;
    slug: string;
    tags: string[];
    projectName: string;
    projectCardImage: string;
}

export interface IProjectsProp {
    projects: IProjectProp[];
}