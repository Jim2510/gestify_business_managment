export function TableOrders({
  numero,
  sigla,
  cliente,
  totale,
  data,
  stato_q,
  pagamento,
  vettore,
}) {
  return (
    <>
      <div className="w-full grid grid-cols-12 grid-row-1 min-h-[30px] text-center border-b-2 border-gray-200">
        <div className="col-span-1 border-gray-200 ">{numero}</div>
        <div className="col-span-1 border-l-2 border-grey-400 ">{sigla}</div>
        <div className="col-span-3 border-l-2 border-grey-400 ">{cliente}</div>
        <div className="col-span-1 border-l-2 border-grey-400 ">{totale}</div>
        <div className="col-span-2 border-l-2 border-grey-400 ">{data}</div>
        <div className="col-span-1 border-l-2 border-grey-400 ">{stato_q}</div>
        <div className="col-span-2 border-l-2 border-grey-400 ">
          {pagamento}
        </div>
        <div className="col-span-1 border-l-2 border-grey-400 ">{vettore}</div>
      </div>
    </>
  );
}
