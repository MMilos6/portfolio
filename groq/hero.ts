export const heroQuery = () => `
    *[_type == "personalInfo"][0]{
        biography{
            firstName,
            lastName,
            position,
        },
        "avatars": {
                "avatar1": media.avatar1.asset,
                "avatar2": media.avatar2.asset,
            },
        links,
        documents{
            "files": files[].asset->url
        }
    }
`;
