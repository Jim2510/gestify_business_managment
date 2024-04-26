import { useEffect, useState } from "react"
import { Product } from "../components/storage_comp/Product";
import { useSelector } from "react-redux";


export function Storage() {
    const prods = useSelector((state) => state.prods.value)
    const [filteredProducts, setFilteredProducts] = useState(prods);
    const [currentPage, setCurrentPage] = useState(1)
    const [input, setSearchInput] = useState('')
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = filteredProducts.slice(firstIndex, lastIndex)
    const npage = Math.ceil(filteredProducts.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    useEffect(() => {
        const filterProducts = prods.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
        setFilteredProducts(filterProducts)
    }, [input, prods])
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    function changePage(id) {
        setCurrentPage(id)
    }
    return (
        <div className="flex flex-col w-[100vw] h-[100vh] text-center justify-center items-center">
            <h1 className="font-bold text-[30px]">Storage</h1>
            <div className="flex flex-col w-[80%] shadow-lg border-t-[4px] border-t-[#1E293B] rounded-md overflow-auto">
                <input className="mb-[20px] mt-[15px] ml-[15px] w-[200px] border-[3px] border-[#02f9ae]" onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search" />
                <div className="w-full grid grid-cols-5">
                    {prods && records.map((product) => <Product key={product.id} product={product} />)}
                </div>
                <div className="flex self-end m-[15px]">
                    <button onClick={prePage}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="" class="fill-[#1E293B] mr-[5px]" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg></button>
                    <div className="text-[#18D3EA] text-[30px]">
                        <ul className="flex">
                            {numbers.map((n, i) => (
                                <li key={i} className={`mr-[5px] font-semibold text-[#02f9ae] ${currentPage === n ? 'active' : ''}`}>
                                    <button onClick={() => changePage(n)}>{n}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={nextPage}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="" class="fill-[#1E293B]" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg></button>
                </div>

            </div>
        </div>
    )
}