import { RefObject, useRef } from 'react'

const useHandleWindowScroll = ({counterSection}:{counterSection:RefObject<HTMLDivElement>}) => {
      const counterStarted = useRef(false);
    
    const daysRef = useRef<HTMLSpanElement>(null);
    const hoursRef = useRef<HTMLDivElement>(null);
    const secondsRef = useRef<HTMLDivElement>(null);
    const minutesRef = useRef<HTMLDivElement>(null);
    

      const counter = (el: HTMLElement) => {
        if (el) {
          const goal = el.dataset.goal;
          let currentValue = 0; // Initialize current value to 0
          el.textContent = currentValue.toString(); // Set initial value to the element//+
    
          if (goal) {
            const count = setInterval(() => {
              currentValue += 1;
              el.textContent = currentValue.toString(); // Update element text//+
    
              if (goal) {
                if (currentValue >= +goal) {
                  clearInterval(count); // Stop the counter when goal is reached
                }
              }
            }, 1000 / +goal);
          }
        }
      };

        const handleWindowScroll = () => {
          if (counterSection.current?.offsetTop) {
            if (window.scrollY >= counterSection.current?.offsetTop) {
              if (!counterStarted.current) {
                if (daysRef.current) {
                  counter(daysRef.current);
                }
                if (hoursRef.current) {
                  counter(hoursRef.current);
                }
                if (minutesRef.current) {
                  counter(minutesRef.current);
                }
                if (secondsRef.current) {
                  counter(secondsRef.current);
                }
              }
              counterStarted.current = true;
            }
          }
        };
  return [handleWindowScroll,daysRef,hoursRef,minutesRef,secondsRef] as const
}

export default useHandleWindowScroll
