import { Checkbox, FormControlLabel } from "@mui/material";
import { useField } from "formik";
import React from "react";

interface ICheckBoxProps {
  label: string;
  name: string;
}

const CheckBox = ({ label, name }: ICheckBoxProps) => {
  const [field] = useField({ name });

  return (
    <FormControlLabel
      {...field}
      control={<Checkbox checked={!!field.value} color="secondary" />}
      label={label}
    />
  );
};

export default CheckBox;
