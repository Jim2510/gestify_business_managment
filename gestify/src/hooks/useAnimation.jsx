import { useSpring } from "@react-spring/web";
import { useState } from "react";

export function useAnimation() {
  const [isHidden, setIsHidden] = useState(false);
  const [userHidden, setUserHidden] = useState(false);
  const [isHover, setIsHover] = useState(true);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleUserHidden = () => {
    setUserHidden(!userHidden);
  };

  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    config: { duration: 1000 },
  });

  const springs2 = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
    config: { duration: 1000 },
  });

  const springs3 = useSpring({
    from: { y: -800 },
    to: { y: 0 },
    config: { duration: 1000 },
  });

  const sidebarSpring = useSpring({
    height: isHidden ? 100 : 0,
    opacity: isHidden ? 1 : 0,
    transformOrigin: "center",
  });

  const navSpring = useSpring({
    width: userHidden ? 250 : -50,
  });

  const cardStyle = useSpring({
    width: window.matchMedia("(min-width: 1500px)").matches ? 180 : 160,
    height: window.matchMedia("(min-width: 1500px)").matches ? 180 : 160,
    config: { duration: 200 },
    transform: isHover ? `scale(${1})` : `scale(${1.5})`,
    zIndex: isHover ? 1 : 20,
  });

  return {
    springs,
    springs2,
    springs3,
    sidebarSpring,
    navSpring,
    handleHidden,
    handleUserHidden,
    cardStyle,
    isHover,
    setIsHover,
  };
}
