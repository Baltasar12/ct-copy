"use client";

import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
// CUSTOM ICON COMPONENTS
import appIcons from "@/icons";

// ==============================================================
interface Props extends SvgIconProps {
  icon: keyof typeof appIcons;
}
// ==============================================================

export default function IconComponent({ icon, ...props }: Props) {
  const Icon = appIcons[icon];
  return <Icon {...props} />;
}
