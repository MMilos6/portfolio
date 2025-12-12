import { defineField, defineType } from 'sanity';

import { yearsList } from '@/sanity/shared';

export const education = defineType({
    name: 'education',
    title: 'Education',
    type: 'object',
    fields: [
        defineField({
            name: 'educationList',
            title: 'Education List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'educationItem',
                    fields: [
                        defineField({
                            name: 'schoolName',
                            title: 'School/Institution Name',
                            type: 'string',
                            description: 'The name of the school or institution where you studied.',
                        }),
                        defineField({
                            name: 'degree',
                            title: 'Degree/Qualification',
                            type: 'string',
                            description: 'The degree or qualification you received upon graduation.',
                        }),
                        defineField({
                            name: 'startDate',
                            title: 'Start Date',
                            type: 'string',
                            description: 'The date when your studies began.',
                            options: {
                                list: yearsList.map(year => ({ title: year, value: year })),
                            },
                        }),
                        defineField({
                            name: 'endDate',
                            title: 'End Date',
                            type: 'string',
                            description: 'The date when you completed your studies or graduated. Leave blank if you are still studying.',
                            options: {
                                list: yearsList.map(year => ({ title: year, value: year })),
                            },
                        }),
                        defineField({
                            name: 'institutionLink',
                            title: 'Institution Website Link',
                            type: 'url',
                            description: 'The link to the institution’s official website.',
                        }),
                    ],
                },
            ],
            description: 'List of your educational experiences, including schools, degrees, and dates.',
        }),
    ],
});
