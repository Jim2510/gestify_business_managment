import { Form } from "../components/form_login/Form";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import { useState } from "react";
import { FormRegister } from "../components/form_login/FormRegister"

export function Login() {
  const [isHidden, setHidden] = useState(false);
  const [isHidden2, setHidden2] = useState(true);
  function handleHidden() {
    setHidden(!isHidden);
    setHidden2(!isHidden2);
  }
  const register = useSpring({ opacity: isHidden ? 1 : 0, left: isHidden ? 0 : -430 });
  const login = useSpring({ opacity: isHidden2 ? 1 : 0, left: isHidden ? -430 : 0 });
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#1E293B]">
      <div className="flex-1 flex justify-center">
        <div className="w-[500px] relative">
          <img
            src="../src/assets/gestify.png"
            alt=""
            width={400}
            height={300}
          />
          <animated.div className="absolute" style={register}>
            <FormRegister handleHidden={handleHidden} />
          </animated.div>
          <animated.div className="absolute" style={login}>
            <Form handleHidden={handleHidden} />
          </animated.div>
        </div>
      </div>
      <div className="flex-1 shadow-lg h-full flex justify-center items-center bg-white rounded-[340px]">
        <img
          className="max-h-[70%] max-w-[80%]"
          src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
