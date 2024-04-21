import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "sales",
    label: "Sales",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "refund",
    label: "Refund",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tot",
    label: "%",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, sales, refund) {
  const tot = sales / refund;
  return { name, code, sales, refund, tot };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
const rows2 = [
  createData("India", "IN", 3245, 234),
  createData("China", "CN", 2342525, 2367),
  createData("Italy", "IT", 235262, 3340),
  createData("United States", "US", 3271434, 98335),
  createData("Canada", "CA", 372103, 4670),
  createData("Australia", "AU", 255400, 92024),
  createData("Germany", "DE", 19200, 578),
  createData("Ireland", "IE", 57000, 273),
  createData("Mexico", "MX", 6577691, 2550),
  createData("Japan", "JP", 317000, 7973),
  createData("France", "FR", 22000, 679),
  createData("United Kingdom", "GB", 45757, 495),
  createData("Russia", "RU", 793744, 98246),
  createData("Nigeria", "NG", 962417, 768),
  createData("Brazil", "BR", 147125, 5767),
];
const rows3 = [
  createData("India", "IN", 18225, 2081),
  createData("China", "CN", 49150, 8169),
  createData("Italy", "IT", 50055, 9376),
  createData("United States", "US", 63495, 2669),
  createData("Canada", "CA", 11657, 3722),
  createData("Australia", "AU", 65189, 4920),
  createData("Germany", "DE", 24188, 2589),
  createData("Ireland", "IE", 97803, 9216),
  createData("Mexico", "MX", 18813, 1564),
  createData("Japan", "JP", 73790, 3795),
  createData("France", "FR", 81824, 4403),
  createData("United Kingdom", "GB", 74894, 7641),
  createData("Russia", "RU", 11966, 7525),
  createData("Nigeria", "NG", 28233, 2602),
  createData("Brazil", "BR", 96367, 4894),
];
const rows4 = [
  createData("India", "IN", 97965, 6286),
  createData("China", "CN", 56538, 1121),
  createData("Italy", "IT", 69459, 79),
  createData("United States", "US", 20965, 1111),
  createData("Canada", "CA", 56434, 2912),
  createData("Australia", "AU", 41958, 1371),
  createData("Germany", "DE", 77213, 5414),
  createData("Ireland", "IE", 92885, 3872),
  createData("Mexico", "MX", 63804, 7691),
  createData("Japan", "JP", 53365, 1498),
  createData("France", "FR", 38769, 7261),
  createData("United Kingdom", "GB", 44139, 5332),
  createData("Russia", "RU", 71499, 1719),
  createData("Nigeria", "NG", 33593, 8142),
  createData("Brazil", "BR", 30355, 1598),
];

export function Tables() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataCol, setDataCol] = useState([]);

  const changeData = (row) => {
    setDataCol(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="w-full px-5 md:mt-[130px] mt-[100px]">
        <div className="flex w-full justify-center items-center my-8">
          <p className="text-[40px] font-bold text-black dark:text-white px-5 animate__animated animate__backInDown">
            TABLES
          </p>
        </div>
        <div className="w-full h-[40px] flex justify-center items-center">
          <button
            className="p-2 rounded-t-xl shadow-lg"
            onClick={() => changeData(rows)}
          >
            tab one
          </button>
          <button
            className="p-2 rounded-t-xl shadow-lg"
            onClick={() => changeData(rows2)}
          >
            tab two
          </button>
          <button
            className="p-2 rounded-t-xl shadow-lg"
            onClick={() => changeData(rows3)}
          >
            tab three
          </button>
          <button
            className="p-2 rounded-t-xl shadow-lg"
            onClick={() => changeData(rows4)}
          >
            tab four
          </button>
        </div>
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Country
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataCol
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
