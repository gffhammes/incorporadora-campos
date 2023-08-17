import { styled, SxProps, TextField } from "@mui/material";
import { useField } from "formik";
import React, { FC, useMemo } from "react";

interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  color?: "grey" | "white" | "secondary" | "white-contained";
  sx?: SxProps;
  multiline?: boolean;
  rows?: number;
  InputProps?: any;
}

const padding = ".5rem 1.5rem";
const borderRadius = "1.5rem";

const CssTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius,
    "& .MuiOutlinedInput-input": {
      color: "white",
      padding,
    },
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const CssTextFieldGrey = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius,
    "& .MuiOutlinedInput-input": {
      color: "#000",
      padding,
    },
    "& fieldset": {
      borderColor: "#CDCDCD",
    },
    "&:hover fieldset": {
      borderColor: "#CDCDCD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#CDCDCD",
    },
  },
});

const SecondaryTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius,
    "& .MuiOutlinedInput-input": {
      color: "#000",
      padding,
    },
    "& fieldset": {
      borderColor: "#1A47BC",
    },
    "&:hover fieldset": {
      borderColor: "#1A47BC",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1A47BC",
    },
  },
});

const WhiteContainedTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius,
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-input": {
      color: "#000",
      padding,
    },
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

export const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  type,
  required,
  color,
  sx,
  name,
  multiline = false,
  rows = 6,
  InputProps,
}) => {
  const [field, meta] = useField({ name: name ?? "" });

  const textFieldProps = {
    id: id,
    label: label,
    placeholder: placeholder,
    variant: "outlined",
    required: required,
    type: type,
    sx: { ...sx },
  };

  const helperTextMemo = useMemo(() => {
    return meta.error && meta.touched ? meta.error : null;
  }, [meta.error, meta.touched]);

  switch (color) {
    case "grey":
      return (
        <CssTextFieldGrey
          inputProps={textFieldProps}
          multiline={multiline}
          rows={rows}
          {...field}
          helperText={helperTextMemo}
          error={!!helperTextMemo}
          InputProps={InputProps}
        />
      );

    case "secondary":
      return (
        <SecondaryTextField
          inputProps={textFieldProps}
          multiline={multiline}
          rows={rows}
          {...field}
          helperText={helperTextMemo}
          error={!!helperTextMemo}
          InputProps={InputProps}
        />
      );

    case "white-contained":
      return (
        <WhiteContainedTextField
          inputProps={textFieldProps}
          multiline={multiline}
          rows={rows}
          {...field}
          helperText={helperTextMemo}
          error={!!helperTextMemo}
          InputProps={InputProps}
        />
      );

    default:
      return (
        <CssTextField
          inputProps={textFieldProps}
          multiline={multiline}
          rows={rows}
          {...field}
          helperText={helperTextMemo}
          error={!!helperTextMemo}
          InputProps={InputProps}
        />
      );
  }
};
