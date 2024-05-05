import { Form } from "../components/form_login/Form";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import { useState } from "react";
import { FormRegister } from "../components/form_login/FormRegister";

export function Login() {
  const [isHidden, setHidden] = useState(false);
  const [isHidden2, setHidden2] = useState(true);
  function handleHidden() {
    setHidden(!isHidden);
    setHidden2(!isHidden2);
  }
  const register = useSpring({
    opacity: isHidden ? 1 : 0,
    left: isHidden ? 0 : -430,
  });
  const login = useSpring({
    opacity: isHidden2 ? 1 : 0,
    left: isHidden ? -430 : 0,
  });
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-white">
      <div className="flex-1 flex justify-center">
        <div className="w-[500px] relative">
          <img
            className="w-[350px] absolute top-[-270px]"
            src="../src/assets/gestify (2).png"
            alt=""
          />
          <animated.div className="absolute top-[-120px]" style={register}>
            <FormRegister />
          </animated.div>
          <animated.div className="absolute top-[-120px]" style={login}>
            <Form />
          </animated.div>
        </div>
      </div>
      <div className="flex-1 shadow-lg h-full flex-col justify-center items-center bg-[#02f9ae] rounded-tl-[3px] xl:rounded-bl-[700px] 2xl:rounded-bl-[400px]">
        <div className="flex justify-center items-center">
          <img
            className="max-h-[70%] max-w-[80%] 2xl:mt-[50px]"
            src="../src/assets/loginImage-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center font-bold text-white text-center">
          <div className=" text-[32px]">
            Welcome back in GESTIFY.
            <br />
            Are you new here?
          </div>
          <button
            onClick={handleHidden}
            className="border-[3px] border-white rounded-full w-[120px] text-[18px] h-[3rem] mt-[15px]"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
