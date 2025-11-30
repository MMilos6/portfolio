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
        "profileImage": media.profileImage.asset,
        "services": services.servicesList
    }
`;
