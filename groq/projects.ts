export const projectsQuery = () => `
    *[_type == "project"]{
        "id": _id,
        projectName, 
        "slug": slug.current,
        "projectTypes": projectType[]->title,
        "projectCardImage": projectCardImage.asset->url
    }
`;