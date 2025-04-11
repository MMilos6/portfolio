export const projectQuery = (slug: string) => `
    *[_type == "project" && slug.current == "${slug}"][0]{
        projectName,
        clientName,
        projectDescriptionFirst,
        projectDescriptionSecond,
        "slug": slug.current,
        "image": image.asset->url,
        projectTypeTags,
        projectTechStackTags,
        associatedWith,
        associatedWithUrl,
        seoTitle,
        seoDescription,
        projectLink,
        projectIndustry,
        projectYear,
        contributors[]{
            name,
            "lnProfile": linkedinUrl
        }
    }
`;
