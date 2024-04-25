import { Link } from "react-router-dom";

const data = [
  { btn: "Tabelle", path: "/dashboard/tables" },
  { btn: "Acquisti", path: "/dashboard/expenditure" },
  { btn: "Vendite", path: "/dashboard/sales" },
  { btn: "Logistica", path: "/dashboard/logistic" },
];

function Button({ name_btn, link }) {
  return (
    <>
      <Link to={link}>
        <button className="text-[14px] relative flex flex-col justify-center items-center h-full rounded-xl dark:hover:shadow-gray-100 px-5 py-1 text-black dark:text-white">
          {name_btn}
        </button>
      </Link>
    </>
  );
}

export function NavDash() {
  return (
    <>
      <div className="z-[100] fixed font-semibold w-full h-[50px] shadow-lg bg-white mt-[40px] dark:bg-slate-900 text-black dark:text-white flex justify-end items-center">
        {data &&
          data.map((el, index) => (
            <Button key={index} name_btn={el.btn} link={el.path} />
          ))}
      </div>
    </>
  );
}
