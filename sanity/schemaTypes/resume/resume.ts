import { defineField, defineType } from 'sanity';

export const resume = defineType({
    name: 'resume',
    title: 'Resume',
    type: 'document',
    groups: [
        { name: 'education', title: 'Education', default: true },
        { name: 'workExperience', title: 'Work Experience' },
        { name: 'personal', title: 'Personal' },
        { name: 'techStack', title: 'Tech Stack' },
    ],
    fields: [
        defineField({
            name: 'education',
            type: 'education',
            group: 'education',
        }),
        defineField({
            name: 'workExperience',
            type: 'workExperience',
            group: 'workExperience',
        }),
        defineField({
            name: 'personal',
            type: 'personal',
            group: 'personal',
        }),
        defineField({
            name: 'techStack',
            type: 'techStack',
            group: 'techStack',
        }),
    ],
})
