import { IntActivities } from "./IntActivities";
import  objects  from '../../data/orders';
import { TableOrders } from "./TableOrders";

export function TableActivities() {
    return (
        <>
        <div className="w-full h-full flex justify-center flex-col overflow-auto">
            <div className="sticky top-0 z-[50] bg-white">
            <IntActivities />
            </div>
            
            <div className="w-full h-full mt-5">
            {objects && objects.map((l, index) => {
                return <TableOrders key={index} numero={l.numero} sigla={l.sigla} cliente={l.cliente} totale={l.totale} data={l.data} stato_q={l.stato_q} pagamento={l.pagamento} vettore={l.vettore}/>
            })}
            </div>
            
        </div>
        </>
        
    )
}