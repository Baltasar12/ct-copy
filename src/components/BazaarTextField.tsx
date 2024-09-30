import Box, { BoxProps } from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
// CUSTOM COMPONENT
import { H6 } from "./Typography";

// ==============================================================
type Props = TextFieldProps & BoxProps & { label?: string };
// ==============================================================

export default function BazaarTextField({ label, InputProps, ...props }: Props) {
  const boxProps: Partial<BoxProps> = {};
  const textFieldProps: any = {};

  Object.keys(props).forEach((key) => {
    // Type guard for keys that belong to BoxProps
    if (SPACE_PROPS_LIST.includes(key as any)) {
      boxProps[key as keyof BoxProps] = props[key as keyof BoxProps];
    } 
    // Type guard for keys that belong to TextFieldProps
    /* else {
      textFieldProps[key] = props[key as any];
    } */
  });

  return (
    <Box {...boxProps}>
      {/* INPUT LEVEL TEXT */}
      {label ? (
        <H6 mb={1} fontSize={13} color="grey.700">
          {label}
        </H6>
      ) : null}

      {/* INPUT FIELD SECTION */}
      <TextField
        InputProps={{ ...InputProps, style: { ...InputProps?.style, height: 44 } }}
        {...textFieldProps}
      />
    </Box>
  );
}

const SPACE_PROPS_LIST: Array<keyof BoxProps> = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];