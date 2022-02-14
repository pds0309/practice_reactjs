import { useEffect } from "react";

export const useBeforePageLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event; 
        if( clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        if (typeof onBefore === "function") {
            document.addEventListener("mouseleave", handle);
        }
        // if this component is unmounted, event be removed
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
    if (typeof onBefore !== "function") {
        return;
    }
}