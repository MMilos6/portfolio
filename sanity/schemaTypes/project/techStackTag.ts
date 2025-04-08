import { defineField, defineType } from 'sanity';

export const techStackTag = defineType({
    name: 'techStackTag',
    title: 'Tech Stack Tag',
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
