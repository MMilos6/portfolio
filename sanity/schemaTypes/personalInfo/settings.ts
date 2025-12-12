import { defineField, defineType } from 'sanity';

export const settings = defineType({
    name: 'settings',
    title: 'Settings',
    type: 'object',
    fields: [
        defineField({
            name: 'snowfall',
            title: 'Snowfall Settings',
            type: 'object',
            fields: [
                defineField({
                    name: 'enabled',
                    title: 'Enable Snowfall',
                    type: 'boolean',
                    description: 'Toggle snowfall effect on/off',
                    initialValue: false,
                }),
                defineField({
                    name: 'snowflakeCount',
                    title: 'Snowflake Count',
                    type: 'number',
                    description: 'Number of snowflakes to render (default: 150)',
                    initialValue: 150,
                    validation: Rule => Rule.min(0).max(1000).integer(),
                }),
                defineField({
                    name: 'speed',
                    title: 'Speed',
                    type: 'array',
                    description: 'Speed range [min, max] (default: [0.5, 3])',
                    of: [{ type: 'number' }],
                    initialValue: [0.5, 3],
                    validation: Rule => Rule.min(2).max(2).custom((value: unknown) => {
                        if (!Array.isArray(value) || value.length !== 2) {
                            return 'Must have exactly 2 values [min, max]';
                        }
                        const [min, max] = value as number[];
                        if (min < 0 || max < 0) {
                            return 'Speed values must be positive';
                        }
                        if (min > max) {
                            return 'Min speed must be less than max speed';
                        }
                        return true;
                    }),
                }),
                defineField({
                    name: 'wind',
                    title: 'Wind',
                    type: 'array',
                    description: 'Wind range [min, max] (default: [-0.5, 0.5])',
                    of: [{ type: 'number' }],
                    initialValue: [-0.5, 0.5],
                    validation: Rule => Rule.min(2).max(2).custom((value: unknown) => {
                        if (!Array.isArray(value) || value.length !== 2) {
                            return 'Must have exactly 2 values [min, max]';
                        }
                        const [min, max] = value as number[];
                        if (min > max) {
                            return 'Min wind must be less than max wind';
                        }
                        return true;
                    }),
                }),
                defineField({
                    name: 'radius',
                    title: 'Radius',
                    type: 'array',
                    description: 'Radius range [min, max] in pixels (default: [0.5, 3.0])',
                    of: [{ type: 'number' }],
                    initialValue: [0.5, 3.0],
                    validation: Rule => Rule.min(2).max(2).custom((value: unknown) => {
                        if (!Array.isArray(value) || value.length !== 2) {
                            return 'Must have exactly 2 values [min, max]';
                        }
                        const [min, max] = value as number[];
                        if (min < 0 || max < 0) {
                            return 'Radius values must be positive';
                        }
                        if (min > max) {
                            return 'Min radius must be less than max radius';
                        }
                        return true;
                    }),
                }),
                defineField({
                    name: 'rotationSpeed',
                    title: 'Rotation Speed',
                    type: 'array',
                    description: 'Rotation speed range [min, max] in degrees per second (default: [0, 0])',
                    of: [{ type: 'number' }],
                    initialValue: [0, 0],
                    validation: Rule => Rule.min(2).max(2).custom((value: unknown) => {
                        if (!Array.isArray(value) || value.length !== 2) {
                            return 'Must have exactly 2 values [min, max]';
                        }
                        const [min, max] = value as number[];
                        if (min > max) {
                            return 'Min rotation speed must be less than max rotation speed';
                        }
                        return true;
                    }),
                }),
            ],
        }),
    ],
});

