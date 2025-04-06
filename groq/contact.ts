export const contactQuery = () => `
    *[_type == "personalInfo"][0]{
        "phone": biography.phone,
        links,
    }
`;
