import { SchemaTypeDefinition } from 'sanity';

import * as personalInfo from './personalInfo/index';
import * as resume from './resume/index';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        ...Object.values(personalInfo),
        ...Object.values(resume)
    ],
}
