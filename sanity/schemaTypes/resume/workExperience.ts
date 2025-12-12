import { defineField, defineType } from 'sanity';

import { yearsList } from '@/sanity/shared';

export const workExperience = defineType({
    name: 'workExperience',
    title: 'Work Experience',
    type: 'object',
    fields: [
        defineField({
            name: 'experienceList',
            title: 'Work Experience List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'workExperienceItem',
                    fields: [
                        defineField({
                            name: 'companyName',
                            title: 'Company Name',
                            type: 'string',
                            description: 'The name of the company where you worked.',
                        }),
                        defineField({
                            name: 'role',
                            title: 'Role/Position',
                            type: 'string',
                            description: 'Your job title or position at the company.',
                        }),
                        defineField({
                            name: 'startDate',
                            title: 'Start Date',
                            type: 'string',
                            description: 'The date when you started working at the company.',
                            options: {
                                list: yearsList.map(year => ({ title: year, value: year })),
                            },
                        }),
                        defineField({
                            name: 'endDate',
                            title: 'End Date',
                            type: 'string',
                            description: 'The date when you finished working at the company. Leave blank if you are still employed.',
                            options: {
                                list: yearsList.map(year => ({ title: year, value: year })),
                            },
                        }),
                        defineField({
                            name: 'companyLink',
                            title: 'Company Website Link',
                            type: 'url',
                            description: 'The official website of the company.',
                        }),
                    ],
                },
            ],
            description: 'List of your work experiences, including company names, roles, dates, and company links.',
        }),
    ],
});
