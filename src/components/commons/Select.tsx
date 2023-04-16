import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  styled,
} from "@mui/material";
import { ChangeEvent } from "react";

const padding = ".5rem 1.5rem";

const StyledSelect = styled(MuiSelect)({
  borderRadius: "20rem",
  color: "white",
  "& .MuiOutlinedInput-input": {
    color: "white",
    padding,
  },
  "& fieldset": {
    borderColor: "rgba(255, 255, 255, 0.75)",
  },
  "&:hover fieldset": {
    borderColor: "rgba(255, 255, 255, 0.75)!important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.75)!important",
    "& legend": {
      color: "white",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
});

interface IProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  width?: string | number;
  maxWidth?: string | number;
}

export const Select = ({
  label,
  options,
  value,
  handleChange,
  width,
  maxWidth,
}: IProps) => {
  return (
    <FormControl
      sx={{ width: width || "100%", mx: "auto", maxWidth: maxWidth }}
    >
      <InputLabel
        sx={{
          color: "rgba(255, 255, 255, 0.5)",
          "&.Mui-focused": { color: "white!important" },
          "&.MuiInputLabel-root": {
            lineHeight: 1,
          },
          "&:not(.MuiInputLabel-shrink)": {
            transform: "translate(14px, 12px) scale(1)",
          },
        }}
      >
        {label}
      </InputLabel>
      <StyledSelect
        value={value}
        onChange={handleChange}
        label={label}
        MenuProps={{ disableScrollLock: true }}
        sx={{ width: width || "100%" }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};
