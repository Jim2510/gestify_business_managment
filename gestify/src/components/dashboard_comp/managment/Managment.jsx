import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

export function Managment() {
  let data = {
    nodes: [
      {
        name: "Task 1",
        deadline: new Date(),
        type: "Type 1",
        isComplete: true,
        nodes: [{}, {}, {}], // Esempio di dati nidificati
      },
      {
        name: "Task 2",
        deadline: new Date(),
        type: "Type 2",
        isComplete: false,
        nodes: [],
      },
      {
        name: "Task 2",
        deadline: new Date(),
        type: "Type 2",
        isComplete: false,
        nodes: [],
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

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
          background-color: #eaf5fd;
        `,
      Row: `
          &:nth-of-type(odd) {
            background-color: #d2e9fb;
          }
  
          &:nth-of-type(even) {
            background-color: #eaf5fd;
          }
        `,
    },
  ]);

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
      <div className="mt-[100px]">
        <h2 className="text-center drop-shadow-lg shadow-black font-bold text-[40px] animate__backInDown animate__animated py-5">
          ADMINISTRATION
        </h2>
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
      </div>
    </>
  );
}
