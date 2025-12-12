import { defineField, defineType } from 'sanity';

import { iconList } from '@/sanity/shared';

export const services = defineType({
    name: 'services',
    title: 'Services',
    type: 'object',
    fields: [
        defineField({
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'serviceItem',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'Title of the service',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            description: 'A brief description of the service',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: {
                                list: iconList,
                            },
                            description: 'Choose an icon for the service',
                        }),
                    ],
                },
            ],
            description: 'List of services with titles, descriptions, and icons.',
        }),
    ],
});
