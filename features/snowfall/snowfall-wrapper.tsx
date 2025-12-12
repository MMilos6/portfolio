"use client";

import { useEffect, useState } from 'react';

import { client } from '@/sanity/lib/client';
import { settingsQuery } from '@/groq';

import { SnowfallEffect } from './snowfall';
import { ISettings } from './type/type';

export const SnowfallWrapper = () => {
    const [settings, setSettings] = useState<ISettings | undefined>(undefined);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await client.fetch(settingsQuery());
                console.log('Snowfall settings data:', data);
                console.log('Settings object:', data?.settings);
                console.log('Snowfall enabled:', data?.settings?.snowfall?.enabled);
                setSettings(data?.settings);
            } catch (error) {
                console.error('Failed to fetch snowfall settings:', error);
            }
        };

        fetchSettings();
    }, []);

    if (!settings) {
        console.log('Settings not loaded yet or not found');
        return null;
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <SnowfallEffect settings={settings} />
        </div>
    );
};

