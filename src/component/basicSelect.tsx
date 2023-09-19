import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IProps {
  onChange: (value: any) => void;
  value: string;
  options: any[];
}

export default function BasicSelect(props: IProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, []);

  return (
    <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#fff" }}  size="small">
      <Select onChange={handleChange} defaultValue={value}>
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
