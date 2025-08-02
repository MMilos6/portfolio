export const aboutQuery = () => `
    *[_type == "personalInfo"][0]{
        biography{
            about,
            firstName,
            lastName,
            address,
            email,
            phone,
            birthday
        },
        "profileImgSrc": media.profileImage.asset->url,
        "services": services.servicesList
    }
`;
