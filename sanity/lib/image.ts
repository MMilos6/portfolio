import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '../env';

const builder = createImageUrlBuilder({ projectId, dataset })

export interface ImageOptions {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'pjpg' | 'png';
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
}

export const urlFor = (source: SanityImageSource, options?: ImageOptions) => {
    if (!source) return null;
    
    let imageBuilder = builder.image(source);
    
    if (options?.width) {
        imageBuilder = imageBuilder.width(options.width);
    }
    
    if (options?.height) {
        imageBuilder = imageBuilder.height(options.height);
    }
    
    if (options?.quality) {
        imageBuilder = imageBuilder.quality(options.quality);
    } else {
        imageBuilder = imageBuilder.quality(85);
    }
    
    if (options?.format) {
        imageBuilder = imageBuilder.format(options.format);
    } else {
        imageBuilder = imageBuilder.format('webp');
    }
    
    if (options?.fit) {
        imageBuilder = imageBuilder.fit(options.fit);
    }
    
    return imageBuilder;
}
