import { defineField, defineType } from 'sanity';

export const links = defineType({
    name: 'links',
    title: 'Links',
    type: 'document',
    fields: [
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                defineField({
                    name: 'linkedinLabel',
                    title: 'LinkedIn Label',
                    type: 'string',
                    description: 'Custom label for your LinkedIn profile.',
                }),
                defineField({
                    name: 'linkedin',
                    title: 'LinkedIn URL',
                    type: 'url',
                    description: 'Your professional LinkedIn profile URL.',
                }),
                defineField({
                    name: 'githubLabel',
                    title: 'GitHub Label',
                    type: 'string',
                    description: 'Custom label for your GitHub profile.',
                }),
                defineField({
                    name: 'github',
                    title: 'GitHub URL',
                    type: 'url',
                    description: 'Your GitHub profile URL, showcasing your code repositories.',
                }),
            ],
        }),
        defineField({
            name: 'creativeLinks',
            title: 'Creative Links',
            type: 'object',
            fields: [
                defineField({
                    name: 'behanceLabel',
                    title: 'Behance Label',
                    type: 'string',
                    description: 'Custom label for your Behance profile.',
                }),
                defineField({
                    name: 'behance',
                    title: 'Behance URL',
                    type: 'url',
                    description: 'Your Behance profile URL, showcasing your design work.',
                }),
                defineField({
                    name: 'instagramLabel',
                    title: 'Instagram Label',
                    type: 'string',
                    description: 'Custom label for your Instagram profile.',
                }),
                defineField({
                    name: 'instagram',
                    title: 'Instagram URL',
                    type: 'url',
                    description: 'Your Instagram profile URL, showcasing your photography or design.',
                }),
            ],
        }),
        defineField({
            name: 'mediaLinks',
            title: 'Media Links',
            type: 'object',
            fields: [
                defineField({
                    name: 'facebookLabel',
                    title: 'Facebook Label',
                    type: 'string',
                    description: 'Custom label for your Facebook profile or page.',
                }),
                defineField({
                    name: 'facebook',
                    title: 'Facebook URL',
                    type: 'url',
                    description: 'Your Facebook profile or page URL.',
                }),
                defineField({
                    name: 'dribbbleLabel',
                    title: 'Dribbble Label',
                    type: 'string',
                    description: 'Custom label for your Dribbble profile.',
                }),
                defineField({
                    name: 'dribbble',
                    title: 'Dribbble URL',
                    type: 'url',
                    description: 'Your Dribbble profile URL, showcasing your design work.',
                }),
                defineField({
                    name: 'xLabel',
                    title: 'X Label',
                    type: 'string',
                    description: 'Custom label for your X profile.',
                }),
                defineField({
                    name: 'x',
                    title: 'X URL',
                    type: 'url',
                    description: 'Your X profile URL, for sharing work or thoughts.',
                }),
                defineField({
                    name: 'youtubeLabel',
                    title: 'YouTube Label',
                    type: 'string',
                    description: 'Custom label for your YouTube channel.',
                }),
                defineField({
                    name: 'youtube',
                    title: 'YouTube URL',
                    type: 'url',
                    description: 'Your YouTube channel URL, for photographers or content creators.',
                }),
            ],
        }),
    ],
});
