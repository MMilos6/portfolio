export const settingsQuery = () => `
    *[_type == "personalInfo"][0]{
        settings{
            snowfall{
                enabled,
                snowflakeCount,
                speed,
                wind,
                radius,
                rotationSpeed
            }
        }
    }
`;

