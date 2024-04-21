import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

export function Ex() {
  let data = {
    nodes: [
      {
        name: "Task 1",
        deadline: new Date(),
        type: "Type 1",
        isComplete: true,
        nodes: [{}, {}, {}],
      },
      {
        name: "Task 2",
        deadline: new Date(),
        type: "Type 2",
        isComplete: false,
        nodes: [],
      },
    ],
  };

  const theme = useTheme(getTheme());

  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const COLUMNS = [
    { label: "Task", renderCell: (item) => item.name },
    {
      label: "Deadline",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Type", renderCell: (item) => item.type },
    {
      label: "Complete",
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: "Tasks", renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <div className="w-full mt-[100px] px-5">
        <h2 className=" text-center drop-shadow-lg shadow-black font-bold text-[40px] animate__backInDown animate__animated py-5">
          EXPENDITURES
        </h2>
        <label htmlFor="search">
          Search by Task:&nbsp;
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
          />
        </label>
        <br />

        <CompactTable columns={COLUMNS} data={data} theme={theme} />

        <br />
      </div>
    </>
  );
}
