import { useAnimation } from '../../hooks/useAnimation'
import { animated } from '@react-spring/web'
export function Product({ product }) {
    const { isHover, setIsHover, cardStyle } = useAnimation(false)
    const handleMouseEnter = () => setIsHover(false)
    const handleMouseLeave = () => setIsHover(true)

    return (
        <animated.div style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex flex-col justify-around shadow-xl items-center ml-[10px] mb-[15px] bg-white">
            <div className="w-[50px] h-[50px]"><img className='w-[50px] h-[50px]' src={product.image} /></div>
            <div className="font-semibold text-[12px]">{product.name}</div>
            <div className="font-semibold flex flex-col">Stock <span className="text-[#1E293B] bg-[#02f9ae] rounded-md ">{product.quantity}</span></div>
            <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="fill-[#1E293B] mr-[100px]" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
            </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="fill-red-700 cursor-pointer" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg></div>
        </animated.div>
    )
}