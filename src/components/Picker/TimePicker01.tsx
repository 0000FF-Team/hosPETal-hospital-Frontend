import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface IPropsTimePicker {
  label?: string;
}

export default function TimePicker01({ label }: IPropsTimePicker) {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2023-01-01T00:00:00.000Z")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        showToolbar
        value={value}
        onChange={setValue}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
