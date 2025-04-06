import { iconsMap } from '@/shared';

import { ILinksData } from '../type/type';

export const useLinks = (links: ILinksData['links']) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _type, ...filteredLinks } = links;

    const linkItems = Object.entries(filteredLinks)
        .filter(([key, value]) => value && !key.endsWith('Label'))
        .map(([key, href]) => {
            const labelKey = `${key}Label` as keyof ILinksData['links'];
            const label = links[labelKey] || '';

            const iconKey = `Fa${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof typeof iconsMap;
            const IconComponent = iconsMap[iconKey];

            return { key, href, label, IconComponent };
        });

    return linkItems;
};