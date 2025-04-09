import { BiRocket } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

import { AutocompleteTags } from '../autocompleteTags/autocompleteTags';

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: BiRocket,
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'projectName',
            title: 'Project Name',
            type: 'string',
            group: 'content',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'seo',
            options: {
                source: 'projectName',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'projectCardImage',
            title: 'Project Card Image',
            type: 'image',
            group: 'content',
            description: 'This image will be resized to 670x450px.',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            group: 'content',
            description: 'Main visual image used in the project detail view.',
            options: { hotspot: true },
        }),
        {
            title: 'Project Type',
            name: 'projectTypeTags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            group: 'content',
            components: {
                input: AutocompleteTags,
            },
        },
        {
            title: 'Project Tech Stack',
            name: 'projectTechStackTags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            group: 'content',
            components: {
                input: AutocompleteTags,
            },
        },
        defineField({
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'associatedWith',
            title: 'Associated With',
            type: 'string',
            group: 'content',
            description: 'Associated company, agency or person.',
        }),
        defineField({
            name: 'associatedWithUrl',
            title: 'Associated With Url',
            type: 'url',
            group: 'content',
            description: 'Link to associated company, agency or person.',
        }),
        defineField({
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
            group: 'content',
            description: 'Live project URL (if available).',
        }),
        defineField({
            name: 'projectDescription',
            title: 'Project Description',
            type: 'text',
            group: 'content',
            rows: 5,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            group: 'seo',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            group: 'seo',
        }),
    ],
    preview: {
        select: {
            title: 'projectName',
            media: 'projectCardImage',
            subtitle: 'clientName',
        },
    },
})
