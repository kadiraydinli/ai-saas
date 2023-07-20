import { LucideIcon } from "lucide-react";

export type RouteType = {
    label: string;
    href: string;
    icon: LucideIcon;
    color?: string;
}

export type ToolType = {
    label: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    href: string;
}