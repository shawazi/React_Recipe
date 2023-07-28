import coding from "../assets/lotties/coding.json"
import { useLottie } from "lottie-react";

const Coding = () => {
  const options = {
    animationData: coding,
    loop: true,
    autoplay: true
  };
  const { View } = useLottie(options);
  return <>{View}</>;
};

export default Coding ;
