export interface ISnowfallSettings {
    enabled?: boolean;
    snowflakeCount?: number;
    speed?: number[];
    wind?: number[];
    radius?: number[];
    rotationSpeed?: number[];
}

export interface ISettings {
    snowfall?: ISnowfallSettings;
}

export interface ISnowfallProps {
    settings?: ISettings;
}

