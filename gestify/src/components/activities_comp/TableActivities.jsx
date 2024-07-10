import { IntActivities } from "./IntActivities";
import objects from "../../data/orders";
import { TableOrders } from "./TableOrders";
import { useFetchOrders } from "../../hooks/useFetchOrders";
import { LoadingCircle } from "../../components/storage_comp/LoadingCircle";

export function TableActivities() {
  
  const {data, loading} = useFetchOrders();

  console.log(data);

  return (
    <>
      <div className="w-full h-full flex justify-center flex-col overflow-auto bg-white scrollbar">
        <div className="sticky top-0 z-[50] bg-white">
          <IntActivities />
        </div>

        <div className="w-full h-full mt-14 ">
          {loading && <LoadingCircle/>}
          {data &&
            data.map((l, index) => {
              return (
                <TableOrders
                  key={index}
                  numero={l.numero}
                  sigla={l.sigla}
                  cliente={l.cliente}
                  totale={l.totale}
                  data={l.data}
                  stato_q={l.stato_q}
                  pagamento={l.pagamento}
                  vettore={l.vettore}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
