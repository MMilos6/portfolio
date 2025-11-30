export const projectsQuery = () => `
    *[_type == "project"] | order(projectYear desc) {
        "id": _id,
        projectName,
        projectYear,
        "slug": slug.current,
        "tags": projectTypeTags,
        "imageAsset": image.asset
    }
`;