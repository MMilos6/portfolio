export const projectsQuery = () => `
    *[_type == "project"]{
        "id": _id,
        projectName, 
        "slug": slug.current,
        "tags": projectTypeTags,
        "projectCardImage": projectCardImage.asset->url
    }
`;