import { defineField, defineType } from 'sanity';

export const documents = defineType({
    name: 'documents',
    title: 'Documents',
    type: 'document',
    fields: [
        defineField({
            name: 'files',
            title: 'Upload Documents',
            type: 'array',
            of: [
                defineField({
                    name: 'file',
                    title: 'File',
                    type: 'file',
                    description: 'Upload your document (PDF, DOCX, etc.).',
                }),
            ],
            description: 'Upload any files related to your CV, cover letters, certificates, etc.',
        }),
    ],
});
