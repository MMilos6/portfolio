import { useMemo, useState } from 'react';
import { ObjectInputProps, set } from 'sanity';

import { useTags } from '@/sanity/hooks/useTags';
import { CloseIcon } from '@sanity/icons';
import { Autocomplete, BaseAutocompleteOption, useTheme } from '@sanity/ui';

import styles from './style.module.css';

type Project = {
    projectTypeTags?: string[];
    projectTechStackTags?: string[];
};

export const AutocompleteTags = ({ onChange, value }: ObjectInputProps) => {
    const { sanity: theme } = useTheme();
    const { data, isLoading, isSuccess } = useTags();

    const [selectedTags, setSelectedTags] = useState<string[]>(
        Array.isArray(value) ? (value as string[]) : []
    );
    const [inputValue, setInputValue] = useState('');
    const [newTag, setNewTag] = useState<string | undefined>();

    const isDark = theme.color.dark;
    const selectedTagClass = `${styles.selectedTag} ${isDark ? styles.selectedTagDark : styles.selectedTagLight}`;
    const removeButtonClass = `${styles.removeButton} ${isDark ? styles.removeButtonDark : styles.removeButtonLight}`;

    const isString = (value: unknown): value is string => typeof value === 'string';

    const availableTags = useMemo((): string[] => {
        if (!isSuccess) return [];

        const allTags = data.reduce<string[]>((acc, obj: Project) => {
            acc.push(...(obj.projectTechStackTags || []));
            acc.push(...(obj.projectTypeTags || []));
            return acc;
        }, []);

        return Array.from(new Set([...(isString(newTag) ? [newTag] : []), ...allTags]));
    }, [data, isSuccess, newTag]);

    const handleSelect = (tag: string) => {
        if (selectedTags.includes(tag)) return;

        const updatedTags = [...selectedTags, tag];
        setSelectedTags(updatedTags);
        onChange(set(updatedTags));
        setInputValue('');
    };

    const handleRemove = (index: number) => {
        const updatedTags = [...selectedTags.slice(0, index), ...selectedTags.slice(index + 1)];
        setSelectedTags(updatedTags);
        onChange(set(updatedTags));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            handleSelect(inputValue.trim());
        }
    };

    const handleQueryChange = (query: string | null) => {
        const trimmed = query?.trim();
        setNewTag(trimmed && !selectedTags.includes(trimmed) ? trimmed : undefined);
    };

    if (isLoading) return null;

    return (
        <div className={styles.autocompleteWrapper}>
            <Autocomplete<BaseAutocompleteOption>
                id="autocomplete"
                options={availableTags.map((tag) => ({ value: tag }))}
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={setInputValue}
                onQueryChange={handleQueryChange}
                placeholder="Type to search..."
                filterOption={(query, option) =>
                    option.value?.toLowerCase().includes(query.toLowerCase())
                }
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedTags.map((tag, index) => (
                    <div key={tag} className={selectedTagClass}>
                        <span>{tag}</span>
                        <button onClick={() => handleRemove(index)} className={removeButtonClass}>
                            <CloseIcon />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
