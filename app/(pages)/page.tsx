import { Hero } from '@/features';
import { heroQuery, settingsQuery } from '@/groq';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function Home() {
    try {
        const [heroData, settingsData] = await Promise.all([
            client.fetch(heroQuery(), {}, {
                next: { revalidate: 86400 }
            }),
            client.fetch(settingsQuery(), {}, {
                next: { revalidate: 86400 }
            })
        ]);

        if (!heroData) {
            console.warn("Data not found");
            return null;
        }

        const { links, avatars, documents, biography } = heroData;
        const showHat = settingsData?.settings?.snowfall?.enabled === true ? true : false;

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
                showHat={showHat}
            />
        );
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
        return null;
    }
}
