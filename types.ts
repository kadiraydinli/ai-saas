import { RefAttributes } from "react";
import { LucideIcon, LucideProps, dynamicIconImports } from "lucide-react";

export type RouteType = {
    label: string;
    href: string;
    icon: LucideIcon;
    color?: string;
}