import { RefObject } from "react";

interface Props {
  submitBtnRefLogIn:RefObject<HTMLButtonElement>
  submitBtnRefSignUp:RefObject<HTMLButtonElement>
}
const useHandleSubmitBtn = ({submitBtnRefLogIn,submitBtnRefSignUp}:Props) => {
      const handleSubmitBtn = () => {
        if (window.location.pathname == "/logIn") {
          submitBtnRefLogIn.current?.classList.add("pointer-events-none");
          setTimeout(() => {
            submitBtnRefLogIn.current?.classList.remove("pointer-events-none");
          }, 1000);
        } else {
          submitBtnRefSignUp.current?.classList.add("pointer-events-none");
          setTimeout(() => {
            submitBtnRefSignUp.current?.classList.remove("pointer-events-none");
          }, 1000);
        }
      };
  return handleSubmitBtn
}

export default useHandleSubmitBtn
