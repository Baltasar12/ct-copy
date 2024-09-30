import { Fragment } from "react";
import { SvgIconComponent } from "@mui/icons-material";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "@/components/Typography";
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
    <Fragment>
      <Icon fontSize="small" />
      <Span fontWeight="600">{title}</Span>
    </Fragment>
  );
}
