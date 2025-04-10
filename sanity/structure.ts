import { BiRocket } from 'react-icons/bi';

import { DocumentIcon, UserIcon } from '@sanity/icons';

import type { StructureResolver } from 'sanity/structure'
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Portfolio Settings')
        .items([
            S.listItem()
                .title('Personal Info')
                .icon(UserIcon)
                .child(
                    S.editor()
                        .title('Personal Info')
                        .schemaType('personalInfo')
                        .documentId('personalInfo')
                ),
            S.listItem()
                .title('Resume')
                .icon(DocumentIcon)
                .child(
                    S.editor()
                        .title('Resume')
                        .schemaType('resume')
                        .documentId('resume')
                ),
            S.divider(),
            S.listItem()
                .title('Projects')
                .icon(BiRocket)
                .schemaType('project')
                .child(
                    S.documentTypeList('project')
                        .title('Projects')
                        .child(
                            S.document()
                                .schemaType('project')
                        )
                ),
        ])
