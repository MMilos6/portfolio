import { defineField, defineType } from 'sanity';

export const media = defineType({
    name: 'media',
    title: 'Media',
    type: 'object',
    fields: [
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            description: 'The main profile image of the media. Will be resized to 300x400px.',
        }),
        defineField({
            name: 'avatar1',
            title: 'Avatar 1',
            type: 'image',
            description: 'At least one avatar (Avatar 1) is required. If both Avatar 1 and Avatar 2 are provided, they will be shown randomly each time the page is loaded. Both avatars should be sized at 250x250px.',
        }),
        defineField({
            name: 'avatar2',
            title: 'Avatar 2',
            type: 'image',
            description: 'If both Avatar 1 and Avatar 2 are provided, they will be shown randomly each time the page is loaded. Both avatars should be sized at 250x250px.',
        }),
    ],
});