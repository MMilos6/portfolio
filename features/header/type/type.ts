export interface NavItem {
    id: string;
    name: string;
    routePath: string;
}

export interface NavLinkProps {
    name: string;
    pathname: string;
    routePath: string;
    onClick: () => void;
}