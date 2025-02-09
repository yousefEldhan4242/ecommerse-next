import { RefObject } from "react";

const useHandleRefs = () => {
    
  const handleRefs = (
    firstRef: RefObject<HTMLSpanElement>,
    firstRefTextContent: string,
    secondRefInput: RefObject<HTMLInputElement>,
    ThirdRef: RefObject<HTMLSpanElement>
  ) => {
    if (firstRef.current) {
      firstRef.current.textContent = firstRefTextContent;
    }

    firstRef.current?.classList.remove("animate-coolHorizontalShake");
    setTimeout(() => {
      firstRef.current?.classList.add("animate-coolHorizontalShake");
    }, 0);

    secondRefInput.current?.focus();
    if (ThirdRef.current) {
      ThirdRef.current.textContent = "";
    }
  };
  return handleRefs
}

export default useHandleRefs
