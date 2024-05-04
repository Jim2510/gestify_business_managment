
import logo from '../../assets/gestify__1_-removebg-preview_1.png'

export function NavbarLand() {
    return (
        <>
        <nav className="w-full h-[60px] shadow-2xl flex justify-between sticky top-0 bg-white" >
            <div className="w-[200px] h-[60px] " >
                <img className="w-[200px] h-[190px] mt-[-65px]" src={logo} alt="" />
            </div>
            <div className='flex justify-center gap-12 px-12 ' >
                <button>HOME</button>
                <button>PRODUCT</button>
                <button>INFO</button>
            </div>
        </nav>
        </>
    )
}