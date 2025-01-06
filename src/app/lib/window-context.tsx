'use client'

import { useContext, createContext, useEffect, useState } from 'react';



export const WindowContext = createContext({
    isMobile: false,
    isTablet: false,
    isSmallDesktop: false,
    isDesktop: false,
    isLargeDesktop: false,
    isLandscape: false,
    isPortrait: false,
    windowWidth: 0,
    windowHeight: 0,
})


export const useWindow = () => useContext(WindowContext);


export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isSmallDesktop, setIsSmallDesktop] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isLargeDesktop, setIsLargeDesktop] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        setIsMobile(window.innerWidth < 640);
        setIsTablet(window.innerWidth >= 640 && window.innerWidth < 768);
        setIsSmallDesktop(window.innerWidth >= 768 && window.innerWidth < 1024);
        setIsDesktop(window.innerWidth >= 1024 && window.innerWidth < 1440);
        setIsLargeDesktop(window.innerWidth >= 1440);
        setIsLandscape(window.innerWidth > window.innerHeight);
        setIsPortrait(window.innerWidth < window.innerHeight);
    }

    useEffect(() => {
        if (!window) return;
        if (!document) return;
        handleResize(); // initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize])

    return (
        <WindowContext.Provider value={{
            isMobile,
            isTablet,
            isSmallDesktop,
            isDesktop,
            isLargeDesktop,
            isLandscape,
            isPortrait,
            windowWidth,
            windowHeight,
        }}>
            {children}
        </WindowContext.Provider>
    )
}