export const resumeQuery = () => `
    *[_type == "resume"][0]{
        "education": education.educationList,
        "workExperience": workExperience.experienceList,
        "personal": personal.personalList,
        "techStack": techStack.techStackList,
    }
`;
