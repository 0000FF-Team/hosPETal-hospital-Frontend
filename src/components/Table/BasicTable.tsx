import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TimePicker01 from "../TimePicker/TimePicker01";
import Stack from "@mui/material/Stack";

function createData(
  day: string,
  isDayOff: boolean,
  workingHour: string,
  islLunchTime: boolean,
  lunchHour: string
) {
  return { day, isDayOff, workingHour, islLunchTime, lunchHour };
}

const rows = [
  createData("월", false, "9~6", true, "12~1"),
  createData("화", false, "9~6", true, "12~1"),
  createData("수", false, "9~6", true, "12~1"),
  createData("목", false, "9~6", true, "12~1"),
  createData("금", false, "9~6", true, "12~1"),
  createData("토", false, "9~6", true, "12~1"),
  createData("일", false, "9~6", true, "12~1"),
  createData("공휴일", false, "9~6", true, "12~1"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>요일</TableCell>
            <TableCell align="center">휴진일</TableCell>
            <TableCell align="center">진료시간</TableCell>
            <TableCell align="center">
              점심시간
              <br /> 없음
            </TableCell>
            <TableCell align="center">점심시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="center">
                <input className="checkbox" type="checkbox" />
              </TableCell>
              <TableCell align="center">
                <Stack spacing={2}>
                  <TimePicker01 label="진료 시작 시간" />
                  <TimePicker01 label="진료 종료 시간" />
                </Stack>
              </TableCell>
              <TableCell align="center">
                <input className="checkbox" type="checkbox" />
              </TableCell>
              <TableCell>
                <Stack spacing={2}>
                  <TimePicker01 label="점심시간 시작" />
                  <TimePicker01 label="점심시간 종료" />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
