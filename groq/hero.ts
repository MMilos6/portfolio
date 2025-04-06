export const heroQuery = () => `
    *[_type == "personalInfo"][0]{
        biography{
            firstName,
            lastName,
            position,
        },
        "avatars": {
                "avatar1Src": media.avatar1.asset->url,
                "avatar2Src": media.avatar2.asset->url,
            },
        links,
        documents{
            "files": files[].asset->url
        }
    }
`;
