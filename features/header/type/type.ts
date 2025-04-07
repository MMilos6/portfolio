export interface NavItem {
    id: string;
    name: string;
    routePath: string;
    icon: React.ReactElement;
}

export interface NavLinkProps {
    name: string;
    pathname: string;
    routePath: string;
    onClick: () => void;
    icon: React.ReactNode;
}