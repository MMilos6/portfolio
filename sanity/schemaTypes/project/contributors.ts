import { defineField, defineType } from 'sanity';

export const contributors = defineType({
    name: 'contributors',
    title: 'Contributor',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
            validation: Rule =>
            Rule.uri({
                scheme: ['http', 'https'],
                allowRelative: false,
            }),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'linkedinUrl',
        },
    },
});