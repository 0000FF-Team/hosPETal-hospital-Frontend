import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

export default function DesktopTimePicker01() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopTimePicker
        label="For desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
