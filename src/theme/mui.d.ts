import "@mui/material/Card";
import "@mui/material/Paper";

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    softBorder: true;
    plain: true;
    darkBorder: true;
    strongBorder: true;
    luxe: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    softBorder: true;
    plain: true;
    darkBorder: true;
    strongBorder: true;
    luxe: true;
  }
}

export {};
