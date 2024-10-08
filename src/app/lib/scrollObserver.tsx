'use client'
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";


export const scrollContext = createContext({ scrollY: 0 });

export const ScrollObserver: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll])

    return (
        <scrollContext.Provider value={{ scrollY }}>
            {children}
        </scrollContext.Provider>
    )
}



