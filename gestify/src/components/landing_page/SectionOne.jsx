import { Link } from 'react-router-dom'
import logo from '../../assets/gestify__1_-removebg-preview_1.png'

export function SectionOne() {
    return <>
    <div className="flex justify-center bg-gradient-to-b from-[#1cdafe] to-[#02f9ae] w-[100vw] h-[100vh] items-center ">
    <div className="w-[95%] h-[500px] shadow-2xl" >
        <div className='flex flex-col' >
            <div className='w-[400px] h-[200px] overflow-hidden' >
                <img className='shadow-2xl mt-[-50px]' src={logo} alt="" />
            </div>
            <div className="w-[400px] flex justify-center flex-col items-center">
                <h1>TITOLO</h1>
                <p>SOTTOTITOLO</p>
                <Link to={'/login'}><button className='rounded-full w-[200px] bg-white/40 shadow-2xl py-2 hover:bg-white/70 active:bg-white/40' >ISCRIVITI</button></Link>
            </div>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
    </div>
    </>
}