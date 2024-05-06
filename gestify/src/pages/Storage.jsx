import { useEffect, useState } from "react";
import { Product } from "../components/storage_comp/Product";
import { useSelector } from "react-redux";
import { TitleSection } from "../components/standard_comp/TitleSection";
import { Time } from "../components/homepage/Time";
import { useFetchProducts } from "../hooks/useFetchProducts";

export function Storage() {
  // const prods = useSelector((state) => state.prods.value);
  const { data } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [input, setSearchInput] = useState("");
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredProducts.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  useEffect(() => {
    const filterProducts = data.filter(({ name }) =>
      name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filterProducts);
  }, [input, data]);
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changePage = (n) => setCurrentPage(n);
  const handleToggle = (e) => {
    if (e.target.value === "") {
      setToggleSearchBar(false);
    } else {
      setToggleSearchBar(true);
    }
  };
  const searchBar = { display: toggleSearchBar ? "flex" : "none" };
  const inputStyle = {
    input: {
      borderWidth: "0px",
      outline: "0",
      WebkitAppearance: "none",
      boxShadow: "none",
      MozBoxShadow: "none",
      WebkitBoxShadow: "none",
    },
    inputFocus: {
      outline: "0",
    },
  };

  return (
    <div
      className="flex flex-col w-[100vw] h-[100vh] text-center justify-center items-center bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]"
      onClick={() => setToggleSearchBar(false)}
    >
      <TitleSection titleName="STORAGE" />
      <div className="flex flex-col w-[85%] h-[75%] shadow-lg rounded-md overflow-auto 2xl:w-[80%] bg-[#FAFAFC] justify-center items-center">
        <div className="top-[10px] bg-white w-[17%] h-[35px] rounded-2xl shadow-lg mb-[20px] mt-[15px] ml-[15px] flex items-center justify-center sticky ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fillRule=""
            className="fill-[#1E293B] "
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            style={inputStyle.input}
            className="w-[70%] border-none text-[15px] h-[20%] bg-tranparent"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onInput={(e) => handleToggle(e)}
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          style={searchBar}
          className="bg-white w-[17%] flex-col rounded-xl overflow-y-scroll absolute z-20 mt-[65px] h-[300px] ml-[10px]"
        >
          {filteredProducts.map((result, id) => (
            <div
              className="px-[5px] py-[10px] hover:bg-[#efefef] font-semibold text-[#1E293B]"
              key={id}
            >
              {result.name}
            </div>
          ))}
        </div>
        <div className="w-[80%] grid grid-cols-5 justify-items-center items-center gap-0  ">
          {data &&
            records.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
        <div className="flex self-end m-[15px] pr-28">
          <button onClick={prePage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fillRule=""
              className="fill-[#1E293B] mr-[5px]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
          <div>
            <ul className="flex">
              {numbers.map((n, i) => (
                <li
                  key={i}
                  className={`mr-[5px] text-[17px] font-medium px-[12px] py-[2px] rounded-full text-[#1E293B] justify-center items-center ${
                    currentPage === n ? "bg-[#02f9ae]" : ""
                  }`}
                >
                  <button onClick={() => changePage(n)}>{n}</button>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={nextPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fillRule=""
              className="fill-[#1E293B]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
