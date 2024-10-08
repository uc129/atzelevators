'use client'

import Image from "next/image"
import { NavLink } from "./components/nav-items/nav.link"
import { NavDropdown } from "./components/nav-items/navDropdown"
import { title } from "process"
import React, { useEffect } from "react"

interface NavDropdownItems {
    parent: string,
    children: NavDropdownChild[],
    ariaControls: string
}

interface NavDropdownChild {
    title: string,
    url: string,
    description?: string,
    icon?: string,
    links?: NavDropdownChild[],
    ariaControls?: string

}


const navDropdownItems: NavDropdownItems[] = [
    {
        parent: "Company",
        children: [
            {
                title: 'Company',
                url: '/company',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-1'
            },

            {
                title: 'History',
                url: '/history',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-2'


            },
            {
                title: 'Purpose & Strategy',
                url: '/purpose-strategy',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-3'


            },
            {
                title: 'Organization',
                url: '/organization',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-4'


            },
            {
                title: 'Innovations',
                url: '/innovations',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-5',
                links: [
                    {
                        title: 'Innovations',
                        url: '/innovations',
                    },
                    {
                        title: 'ATZ high-rise laboratories',
                        url: '/atz-high-rise-laboratories'
                    },
                    {
                        title: 'Innovating together',
                        url: '/innovating-together'
                    },
                    {
                        title: 'Join the ATZ ecosystem',
                        url: '/join-the-atz-ecosystem'
                    },
                ]
            }
        ],
        ariaControls: 'submenu-1'
    },
    {
        parent: "Elevators",
        children: [
            {
                title: 'Elevators',
                url: '/elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-6'

            },
            {
                title: 'Modernization',
                url: '/modernization',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-7'

            },
            {
                title: 'Manual Door Passenger Elevators',
                url: '/passenger-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-9'

            },

            {
                title: 'Automatic Door Passenger Elevators',
                url: '/automatic-door-passenger-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-10'

            },
            {
                title: 'Goods Elevators',
                url: '/goods-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-11'

            },
            {
                title: 'Service Elevators',
                url: '/service-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-12'

            },
            {
                title: 'Home Elevators',
                url: '/home-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-13'
            },
            {
                title: 'Hospital Elevators',
                url: '/hospital-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-14'

            },
            {
                title: 'Car Elevators',
                url: '/car-elevators',
                icon: '/assets/chevron-right.svg',
                description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
                ariaControls: 'sublink-15'

            },
            {
                title: 'Dumbwaiter Elevators',
                url: '/dumbwaiter-elevators',
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



export const Navbar = () => {


    const handleDropDownClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.getAttribute('aria-controls'));
        let ariaControls = e.currentTarget.getAttribute('aria-controls');

        if (currentDropdown === ariaControls) {
            setCurrentDropdown(null);
            document.getElementById(ariaControls + '-chevron')?.classList.remove('rotate-180')

        } else {
            setCurrentDropdown(ariaControls);
            document.getElementById(ariaControls + '-chevron')?.classList.add('rotate-180')
        }

    }






    // const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    //     e.preventDefault();
    //     console.log(e.currentTarget.getAttribute('aria-controls'));
    //     let ariaControls = e.currentTarget.getAttribute('aria-controls');
    //     let desc = currentDropdownItem?.children.find(item => item.ariaControls === ariaControls)?.description;
    //     setCurrDesc(desc as string);
    // }


    //setCurrentDropdown(null) if clicked outside the nav element;

    useEffect(() => {

        const handleClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement)
                if (!e.target.closest('nav'))
                    setCurrentDropdown(null);

        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

    })

    const [currentDropdown, setCurrentDropdown] = React.useState<string | null>(null)
    let currentDropdownItem = navDropdownItems.find(item => item.ariaControls === currentDropdown);
    // const [currDesc, setCurrDesc] = React.useState<string | null>(currentDropdownItem?.children[0].description as string);


    useEffect(() => {

        let otherDropdowns = navDropdownItems.filter(item => item.ariaControls !== currentDropdown);
        otherDropdowns.forEach(item => {
            let otherDropdown = document.getElementById(item.ariaControls + '-chevron');
            if (otherDropdown) {
                otherDropdown.classList.remove('rotate-180');
            }
        })

    }, [currentDropdown])


    return (
        <nav className="bg-white text-black ">

            <div className="relative pt-6 px-12 flex flex-col gap-4">

                <ul className="top flex justify-between items-center h-12  w-full list-none">

                    <li className="w-1/3">
                        <NavLink href="/">
                            <Image src="/logo.png" alt="atz-logo" width={70} height={70} />
                        </NavLink>
                    </li>

                    <li className="">
                        <ul className="flex gap-8 items-center">
                            <li><p>AMBA TIRUPATI ZETETIC ENGINEERING PVT. LTD. </p></li>
                            <li> <input className="rounded-full p-3 bg-gray-200 outline outline-blue-300" type="search" name="search" id="search" /> </li>
                            <button type="button"> Contact Us </button>
                        </ul>
                    </li>
                </ul>


                <ul className="nav-items bottom h-16  w-full flex justify-between break-word list-none">
                    <NavDropdown title="Company" onClick={handleDropDownClick} ariaControls="submenu-1" /> {/* this is a list item component with button */}
                    <NavDropdown title="Elevators" onClick={handleDropDownClick} ariaControls="submenu-2" />
                    <NavDropdown title="Escalators" onClick={handleDropDownClick} ariaControls="submenu-3" />
                    <NavDropdown title="Installation" onClick={handleDropDownClick} ariaControls="submenu-4" />
                    <NavDropdown title="AMC" onClick={handleDropDownClick} ariaControls="submenu-5" />
                    <NavDropdown title="Careers" onClick={handleDropDownClick} ariaControls="submenu-6" />
                    <NavDropdown title="News & Insights" onClick={handleDropDownClick} ariaControls="submenu-7" />
                </ul>

                {currentDropdownItem &&
                    <div className="absolute bg-red-100 top-36 mx-auto z-50  left-0 px-12 w-full min-h-44 border-t-[1px] border-gray-400 flex justify-between ">
                        {
                            currentDropdownItem.children.map((item, index) => (
                                <div key={index} className="w-full flex">
                                    <ul className="flex flex-col gap-2">
                                        <li aria-controls={item.ariaControls} className=""> <NavLink href={item.url}> {item.title} </NavLink> </li>
                                        {
                                            item.links && item.links.map((link, index) => (
                                                <li key={index} className="bg-green-200"> <NavLink href={link.url}> {link.title} </NavLink> </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                }

            </div>
        </nav>
    )

}