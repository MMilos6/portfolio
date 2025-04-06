import { Hero } from '@/components';
import { heroQuery } from '@/groq/hero';
import { client } from '@/sanity/lib/client';

export default async function Home() {
    try {
        const data = await client.fetch(heroQuery());

        if (!data) {
            console.warn("Hero data not found");
            return null;
        }

        console.log(data)

        return (
            <Hero
                avatars={data.avatars}
                files={data.documents.files}
                position={data.biography.position}
                lastName={data.biography.lastName}
                firstName={data.biography.firstName}
            />
        );
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
        return null;
    }
}
