export const projectQuery = (slug: string) => `
    *[_type == "project" && slug.current == "${slug}"][0]{
        projectName,
        clientName,
        projectDescription,
        "slug": slug.current,
        "projectCardImage": projectCardImage.asset->url,
        "mainImage": mainImage.asset->url,
        projectType[]->{
            _id,
            title
        },
        projectTechStack[]->{
            _id,
            title
        },
        associatedWith,
        associatedWithUrl,
        seoTitle,
        seoDescription
    }
`;
