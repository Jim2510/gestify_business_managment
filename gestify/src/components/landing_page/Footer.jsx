import ItemsContainer from "./ItemsContainer";

export function Footer() {
    return <>
        <footer className="bg-gray-900 text-white bottom-0 w-full">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 w-full">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-[#02f9ae]">Free</span> until you're ready to
          launch
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-[#02f9ae] hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Subcribe
          </button>
        </div>
      </div>
        <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Gestify. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
    </>
}
