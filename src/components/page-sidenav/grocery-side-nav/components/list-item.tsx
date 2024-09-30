"use client";

import { SvgIconComponent } from "@mui/icons-material";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "@/components/Typography";
import FlexBox from "@/components/flex-box/flex-box";
// CUSTOM ICON COMPONENTS
import appIcons from "@/icons";

// ==============================================================
interface Props {
  icon: keyof typeof appIcons;
  title: string;
}
// ==============================================================

export default function ListItem({ title, icon }: Props) {
  const Icon = appIcons[icon];

  return (
    <FlexBox py={1} gap={1.5} alignItems="center">
      <Icon fontSize="small" />
      <Span fontWeight={600}>{title}</Span>
    </FlexBox>
  );
}
