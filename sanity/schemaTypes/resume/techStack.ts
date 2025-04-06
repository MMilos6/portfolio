import { defineField, defineType } from 'sanity';

import { iconList } from '@/sanity/shared';

export const techStack = defineType({
    name: 'techStack',
    title: 'Tech Stack',
    type: 'document',
    fields: [
        defineField({
            name: 'techStackList',
            title: 'Tech Stack List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'techStackItem',
                    fields: [
                        defineField({
                            name: 'techCategory',
                            title: 'Tech Category',
                            type: 'string',
                            description: 'Enter the department/category name for the tech stack',
                            validation: Rule => Rule.required(),
                        }),

                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: {
                                list: iconList,
                            },
                            description: 'Choose an icon for the tech stack category',
                        }),

                        defineField({
                            name: 'iconColor',
                            title: 'Icon Color',
                            type: 'color',
                            description: 'Select a color for the icon',
                        }),

                        defineField({
                            name: 'techStackSkills',
                            title: 'Tech Stack Skills/Technologies',
                            type: 'array',
                            of: [{ type: 'string' }],
                            description: 'List the specific skills or technologies related to the selected category.',
                            validation: Rule => Rule.required().min(1),
                        }),
                    ],
                },
            ],
            description: 'List of custom tech stack categories, with skills or technologies associated with each department.',
        }),
    ],
});
