"use client";

import { Snowfall } from 'react-snowfall';

import { ISnowfallProps } from './type/type';

export const SnowfallEffect = ({ settings }: ISnowfallProps) => {
    console.log('SnowfallEffect rendered with settings:', settings);
    
    if (!settings?.snowfall?.enabled) {
        console.log('Snowfall is disabled or settings not found');
        return null;
    }
    
    console.log('Snowfall is enabled, rendering...');

    const snowfallSettings = settings.snowfall || {};
    
    const snowflakeCount = snowfallSettings.snowflakeCount ?? 150;
    const speed: [number, number] = (snowfallSettings.speed && snowfallSettings.speed.length === 2) 
        ? [snowfallSettings.speed[0], snowfallSettings.speed[1]]
        : [0.5, 3];
    const wind: [number, number] = (snowfallSettings.wind && snowfallSettings.wind.length === 2)
        ? [snowfallSettings.wind[0], snowfallSettings.wind[1]]
        : [-0.5, 0.5];
    const radius: [number, number] = (snowfallSettings.radius && snowfallSettings.radius.length === 2)
        ? [snowfallSettings.radius[0], snowfallSettings.radius[1]]
        : [0.5, 3.0];
    const rotationSpeed: [number, number] = (snowfallSettings.rotationSpeed && snowfallSettings.rotationSpeed.length === 2)
        ? [snowfallSettings.rotationSpeed[0], snowfallSettings.rotationSpeed[1]]
        : [0, 0];

    return (
        <Snowfall
            snowflakeCount={snowflakeCount}
            speed={speed}
            wind={wind}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
};

