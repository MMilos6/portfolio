import { defineField, defineType } from 'sanity';

export const projectTypeTag = defineType({
    name: 'projectTypeTag',
    title: 'Project Type Tag',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(50),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
});
