import { defineField, defineType } from 'sanity';

import { yearsList } from '@/sanity/shared';

export const personal = defineType({
    name: 'personal',
    title: 'Personal',
    type: 'document',
    fields: [
        defineField({
            name: 'personalList',
            title: 'Personal Achievements List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'achievementItem',
                    fields: [
                        defineField({
                            name: 'startDate',
                            title: 'Start Date',
                            type: 'string',
                            description: 'The start date of the achievement or milestone.',
                            options: {
                                list: yearsList.map(year => ({ title: year, value: year })),
                            },
                        }),
                        defineField({
                            name: 'endDate',
                            title: 'End Date',
                            type: 'string',
                            description: 'The end date of the achievement or milestone. Leave blank if it is still ongoing.',
                            options: {
                                list: yearsList.map(year => ({ title: year, value: year })),
                            },
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'The title or name of the achievement or milestone.',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            description: 'A brief description or summary of the achievement or event.',
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'url',
                            description: 'An optional link to more information related to the achievement or event.',
                        }),
                        defineField({
                            name: 'achievements',
                            title: 'Achievements',
                            type: 'array',
                            of: [{ type: 'string' }],
                            description: 'List of key accomplishments or milestones achieved during this time.',
                        }),
                    ],
                },
            ],
            description: 'List of personal achievements or milestones, including start and end dates, title, description, and related link.',
        }),
    ],
});
