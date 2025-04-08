export interface IProjectProp {
    id: string;
    slug: string;
    projectName: string;
    projectTypes: string[];
    projectCardImage: string;
}

export interface IProjectsProp {
    projects: IProjectProp[];
}