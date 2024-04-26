import { useEffect, useState } from "react"
import { Product } from "../components/storage_comp/Product";
import { useSelector } from "react-redux";


export function Storage() {
    const prods = useSelector((state) => state.prods.value)
    const [filteredProducts, setFilteredProducts] = useState(prods);
    const [input, setSearchInput] = useState('')
    useEffect(() => {
        const filterProducts = prods.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
        setFilteredProducts(filterProducts)
    }, [input, prods])

    return (
        <div className="flex flex-col w-[100vw] h-[100vh] text-center justify-center items-center">
            <h1 className="font-bold text-[30px]">Storage</h1>
            <div className="flex flex-col w-[80%] shadow-lg border-t-[4px] border-t-[#1E293B] rounded-md ">
                <input className="mb-[20px] mt-[15px] ml-[15px] w-[200px]" onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search" />
                <div className="w-full flex">
                    {prods && filteredProducts.map((product) => <Product key={product.id} product={product} />)}
                </div>
                <div className="flex self-end m-[15px]">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="" class="fill-[#1E293B] mr-[5px]" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg></button><button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="" class="fill-[#1E293B]" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg></button>
                </div>

            </div>
        </div>
    )
}