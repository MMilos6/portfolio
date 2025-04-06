import { Hero } from '@/features';
import { heroQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

export default async function Home() {
    try {
        const data = await client.fetch(heroQuery());

        if (!data) {
            console.warn("Data not found");
            return null;
        }

        const { links, avatars, documents, biography } = data;

        return (
            <Hero
                links={links}
                avatars={avatars}
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
