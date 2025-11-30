import { Hero } from '@/features';
import { heroQuery } from '@/groq';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function Home() {
    try {
        const data = await client.fetch(heroQuery(), {}, {
            next: { revalidate: 86400 }
        });

        if (!data) {
            console.warn("Data not found");
            return null;
        }

        const { links, avatars, documents, biography } = data;

        const optimizedAvatars = {
            avatar1Src: avatars.avatar1 
                ? urlFor(avatars.avatar1, { width: 500, height: 500, quality: 90 })?.url() || ''
                : '',
            avatar2Src: avatars.avatar2 
                ? urlFor(avatars.avatar2, { width: 500, height: 500, quality: 90 })?.url() || ''
                : undefined
        };

        return (
            <Hero
                links={links}
                avatars={optimizedAvatars}
                files={documents.files}
                position={biography.position}
                lastName={biography.lastName}
                firstName={biography.firstName}
            />
        );
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
        return null;
    }
}
