import { defineField, defineType } from 'sanity';

import { TagIcon } from '@sanity/icons';

export const biography = defineType({
    name: 'biography',
    title: 'Biography',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        }),
        defineField({
            name: 'birthday',
            title: 'Birthday',
            type: 'date',
        }),
        defineField({
            name: 'position',
            title: 'Position / Role',
            type: 'string',
            description: 'Provide the professional position or role (e.g., Frontend Developer, Graphic Designer, Photographer).',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.email().error('Must be a valid email'),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'text',
            description: 'Provide a brief description about the person. You can use paragraphs or line breaks to separate content.',
        }),
    ],
});
