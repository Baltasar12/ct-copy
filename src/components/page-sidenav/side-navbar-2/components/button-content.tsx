import Box from "@mui/material/Box";
import { SvgIconComponent } from "@mui/icons-material";
// STYLED COMPONENT
import { ListIconWrapper } from "../styles";
// CUSTOM ICON COMPONENTS
import Icons from "@/icons/grocery-4";
import appIcons from "@/icons";

// ==============================================================
interface Props {
  name: string;
  icon?: keyof typeof appIcons;
}
// ==============================================================

export default function ButtonContent({ icon, name }: Props) {
  const Icon = icon ? Icons[icon as keyof typeof Icons] : null;

  return (
    <Box display="flex" alignItems="center">
      {Icon ? (
        <ListIconWrapper>
          <Icon />
        </ListIconWrapper>
      ) : (
        <Box marginRight="0.6rem" />
      )}

      {name}
    </Box>
  );
}
