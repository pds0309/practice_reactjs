import { useEffect, useRef } from "react"

export const useFadeIn = (duration = 1) => {
    const element = useRef();
    useEffect(() => {
        if (typeof duration === "number") {
            if (element.current) {
                const { current } = element;
                current.style.transition = `opacity ${duration}s`;
                current.style.opacity = 1;
            }
        }
    }, []);
    if (typeof duration !== "number") {
        return;
    }
    return { ref: element, style: { opacity: 0 } };
}