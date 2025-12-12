import { defineField, defineType } from 'sanity';

export const personalInfo = defineType({
    name: 'personalInfo',
    title: 'Personal Info',
    type: 'document',
    groups: [
        { name: 'biography', title: 'Biography', default: true },
        { name: 'media', title: 'Media' },
        { name: 'links', title: 'Links' },
        { name: 'documents', title: 'Documents' },
        { name: 'services', title: 'Services' },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({
            name: 'biography',
            type: 'biography',
            group: 'biography',
        }),
        defineField({
            name: 'media',
            type: 'media',
            group: 'media',
        }),
        defineField({
            name: 'links',
            type: 'links',
            group: 'links',
        }),
        defineField({
            name: 'documents',
            type: 'documents',
            group: 'documents',
        }),
        defineField({
            name: 'services',
            type: 'services',
            group: 'services',
        }),
        defineField({
            name: 'settings',
            type: 'settings',
            group: 'settings',
        }),
    ],
})
