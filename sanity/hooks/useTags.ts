import { useEffect, useState } from 'react';
import { useClient } from 'sanity';

export const useTags = () => {
    const client = useClient({ apiVersion: "2023-01-01" });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await client.fetch(`*[_type == 'project'][]{
                    projectTechStackTags, projectTypeTags
                }`);

                setTags(data);
            } catch (error) {
                console.error(`Error fetching blogs data page data:`, error);
                setError(error as Error | null);
            } finally {
                setIsLoading(false);
                setIsSuccess(true);
            }
        }

        fetchData();
    }, [client]);

    return { data: tags, isLoading, isSuccess, error };
};
