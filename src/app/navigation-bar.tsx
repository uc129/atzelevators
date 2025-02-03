'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { useWindow } from "./lib/window-context";
import { CgClose } from "react-icons/cg";
import Image from "next/image";

export interface NavDropdownChild {
    title: string;
    url: string;
    icon: string;
    description?: string;
    ariaControls: string;
    links?: NavDropdownChild[];
}

export interface NavDropdownItems {
    parent: string;
    parentLink?: string;
    children: NavDropdownChild[];
    ariaControls: string;
}

const navDropdownItems: NavDropdownItems[] = [
    {
        parent: "Company",
        children: [

            {
                title: 'History',
                url: '/company/history',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-2'


            },
            {
                title: 'Purpose & Strategy',
                url: '/company/purpose',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-3'
            },
            {
                title: 'Organization',
                url: '/company/organization',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-4'


            },
        ],
        ariaControls: 'submenu-1'
    },
    {
        parent: "Elevators",
        children: [
            {
                title: 'All Elevators',
                url: '/elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-5'
            },
            {
                title: 'Manual Door Passenger Elevators',
                url: '/elevators/manual-door-passenger-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-9'

            },

            {
                title: 'Automatic Door Passenger Elevators',
                url: '/elevators/automatic-door-passenger-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-10'

            },
            {
                title: 'Goods Elevators',
                url: '/elevators/freight-goods-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-11'

            },
            {
                title: 'Home Elevators',
                url: '/elevators/home-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-13'
            },
            {
                title: 'Hospital Elevators',
                url: '/elevators/hospital-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-14'

            },
            {
                title: 'Car Lifts',
                url: '/elevators/car-lifts',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-15'

            },
            {
                title: 'Dumbwaiter Elevators',
                url: '/elevators/dumbwaiter-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-16'

            },
        ],
        ariaControls: 'submenu-2'
    },
    {
        parent: "Escalators",
        children: [
            {
                title: 'Escalators',
                url: '/escalators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-17'

            },
            {
                title: 'Modernization',
                url: '/modernization/escalators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-18'

            },
            {
                title: 'Moving Walks',
                url: '/moving-walks/escalators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-19'

            },
            {
                title: 'Auto Walks',
                url: '/auto-walks',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-20'

            },
            {
                title: 'Chair Lifts',
                url: '/chair-lifts',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-21'

            }
        ],
        ariaControls: 'submenu-3'
    },
    {
        parent: "Installation",
        children: [
            {
                title: 'Installation',
                url: '/installation',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-22'

            },
            {
                title: 'Process',
                url: '/installation/process',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-23'


            },
            {
                title: 'Requirements',
                url: '/installation/requirements',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-24'

            },
            {
                title: 'Safety',
                url: '/installation/safety',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-25'

            },
            {
                title: 'Quality',
                url: '/installation/quality',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-26'

            },
            {
                title: 'Sustainability',
                url: '/installation/sustainability',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-27'

            },
            {
                title: 'Installation FAQs',
                url: '/installation/faqs',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-28'
            },
            {
                title: 'Installation Contact',
                url: '/installation/contact',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-29'
            }
        ],
        ariaControls: 'submenu-4'
    },
    {
        parent: "AMC",
        children: [
            {
                title: 'AMC',
                url: '/amc',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-30'
            },
            {
                title: 'Comprehensive AMC',
                url: '/amc/comprehensive',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-31'
            },
            {
                title: 'Safety',
                url: '/amc/safety',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-32'
            },
            {
                title: 'Quality',
                url: '/amc/quality',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-33'
            },
            {
                title: 'Sustainability',
                url: '/amc/sustainability',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-34'
            },
            {
                title: 'AMC FAQs',
                url: '/amc/faqs',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-35'
            },
            {
                title: 'AMC Contact',
                url: '/amc/contact',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-36'
            }
        ],
        ariaControls: 'submenu-5'
    },
    {
        parent: "Careers",
        children: [
            {
                title: 'Careers',
                url: '/careers',
                icon: '/assets/chevron-right.svg',
                ariaControls: 'sublink-37'

            },
            {
                title: 'Working at ATZ',
                url: '/careers/working-at-atz',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-38'
            },
            {
                title: 'Students & Graduates',
                url: '/careers/students-graduates',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-39'
            },
            {
                title: 'Professionals',
                url: '/careers/professionals',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-40'
            },
            {
                title: 'FAQs',
                url: '/careers/faqs',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-41'
            },
            {
                title: 'Contact',
                url: '/careers/contact',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-42'
            }
        ],
        ariaControls: 'submenu-6'
    },
    {
        parent: "News & Insights",
        children: [
            {
                title: 'News & Insights',
                url: '/news-insights',
                icon: '/assets/chevron-right.svg',
                ariaControls: 'sublink-43'
            },
            {
                title: 'Press Releases',
                url: '/news-insights/press-releases',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-44'
            },
            {
                title: 'News',
                url: '/news-insights/news',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-45'
            },
            {
                title: 'Events',
                url: '/news-insights/events',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-46'
            },
            {
                title: 'Publications',
                url: '/news-insights/publications',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-47'
            },
            {
                title: 'Social Media',
                url: '/news-insights/social-media',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-48'
            },
            {
                title: 'Contact',
                url: '/news-insights/contact',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-49'
            }
        ],
        ariaControls: 'submenu-7'
    }
]



export const DesktopNavBar = () => {

    const [open, setOpen] = useState({
        open: false,
        index: -1
    });

    const toggleDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        let indexString = e.currentTarget.getAttribute('data-index');
        if (!indexString) return
        let index = parseInt(indexString);
        if (open.open && open.index === index) {
            setOpen({ open: false, index: -1 });
            return;
        }
        setOpen({ open: true, index: index });
    }

    useEffect(() => {
        window.addEventListener('click', (e) => {
            let target = e.target as HTMLElement;
            if (target.classList.contains('nav-item') || target.classList.contains('chevron')) return;
            setOpen({ open: false, index: -1 })
        });
    }, [])


    return (
        <div className="uppercase text-sm font-bold tracking-widest sticky top-0 z-50 bg-baby_powder shadow-md">

            <ul className="flex md:justify-between list-none items-center select-none px-12 flex-wrap">

                <li><Link href="/">
                    <Image src="/logo-transparent.png" alt="logo" width={80} height={100} />
                </Link></li>
                {navDropdownItems.map((navDropdownItem, index) => {
                    return (
                        // link
                        <li onClick={toggleDropdown} data-index={index} className="relative p-4 cursor-pointer nav-item" key={index}>

                            {/* dropdown items */}
                            <div className="flex items-center gap-1">
                                <Link href={navDropdownItem.children[0].url}>{navDropdownItem.parent}</Link>

                                <div className="p-4">
                                    <BiChevronDown className="chevron" size={24} />
                                </div>

                            </div>
                            {open.open && open.index === index &&
                                <ul className=" absolute min-w-[320px] w-fit p-4 -ml-4 bg-baby_powder z-50 text-black">
                                    {navDropdownItem.children.map((navDropdownChild, index) => {
                                        return (
                                            <li key={index} className="flex items-center gap-1">
                                                <Link href={navDropdownChild.url} className="flex items-center gap-1">
                                                    {navDropdownChild.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}



export const MobileNavbar = () => {

    const [open, setOpen] = useState({
        open: false,
        index: -1
    });

    const [openMenu, setOpenMenu] = useState(false);

    const toggleDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        let indexString = e.currentTarget.getAttribute('data-index');
        if (!indexString) return
        let index = parseInt(indexString);
        if (open.open && open.index === index) {
            setOpen({ open: false, index: -1 });
            return;
        }
        setOpen({ open: true, index: index });
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }


    useEffect(() => {
        if (openMenu) {
            document.getElementById('mobile-nav')?.classList.add('h-screen');
            document.body.style.overflow = 'hidden';
        }
        else {
            document.getElementById('mobile-nav')?.classList.remove('h-screen');
            document.body.style.overflow = 'auto';
        }
    }, [openMenu])



    return (
        <div className={` mobile-nav px-4 py-2 sticky top-0 bg-baby_powder bg-opacity-80  
            ${openMenu ? 'h-screen' : ''}`} id="mobile-nav"
            style={{ zIndex: 1000, backdropFilter: 'blur(10px)' }}>
            <div onClick={toggleMenu} className="flex justify-between items-center p-4">
                <Link className="text-lg" href='/'>
                    <Image src="/logo-transparent.png" alt="logo" width={60} height={100} />
                </Link>
                {!openMenu ? <BiMenu size={46} /> : <CgClose size={46} />}
            </div>
            {openMenu && <ul className="list-none">
                {navDropdownItems.map((navDropdownItem, index) => {
                    return (
                        <li key={index} data-index={index} onClick={toggleDropdown} className="nav-item">
                            <div className="grid grid-cols-2 items-center">
                                <Link href={navDropdownItem.children[0].url} onClick={() => setOpenMenu(false)}>{navDropdownItem.parent}</Link>
                                <div className="p-4 cursor-pointer">
                                    <BiChevronDown className="chevron" size={24} />
                                </div>
                            </div>
                            {open.open && open.index === index &&
                                <ul className="list-none">
                                    {navDropdownItem.children.map((navDropdownChild, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={navDropdownChild.url} onClick={() => setOpenMenu(false)}>{navDropdownChild.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>}
                        </li>
                    )
                })}
            </ul>}
        </div>
    )
}


export const NavigationBar = () => {

    const { isMobile, isSmallDesktop, isTablet } = useWindow();
    const [small, setSmall] = useState(true);

    useEffect(() => {
        if (isMobile || isTablet || isSmallDesktop) {
            setSmall(true);
        }
        else {
            setSmall(false);
        }
    }, [isMobile, isSmallDesktop, isTablet])

    if (!small) {
        return <DesktopNavBar />
    }
    return <MobileNavbar />

}