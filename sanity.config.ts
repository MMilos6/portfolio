'use client'

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';

import { Logo } from './features/header/logo';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

export default defineConfig({
    name: 'default',
    title: 'Studio',
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool({ structure }),
        colorInput(),
        visionTool({ defaultApiVersion: apiVersion }),
    ],
    studio: {
        components: {
            logo: Logo,
            icon: Logo
        },
    },
})
