export const formatLinkLabel = (link: string): string => {
    if (link.startsWith("https://")) {
        const url = new URL(link);
        return url.host;
    }

    if (link.endsWith("/")) {
        return link.slice(0, -1);
    }

    return link;
};