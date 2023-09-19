import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface IBasicSelectOption {
  id: string;
  value: string;
  label: string;
  plugin?: any[];
}

interface IProps {
  onChange: (value: any) => void;
  value: string;
  options: IBasicSelectOption[];
  defaultValue?: string;
}

export default function BasicSelect(props: IProps) {
  const [value, setValue] = React.useState(props.defaultValue || "");

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setValue(newValue);
    props.onChange(newValue);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120, backgroundColor: "#fff" }}
      size="small"
    >
      <Select onChange={handleChange} value={value || props.defaultValue}>
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
