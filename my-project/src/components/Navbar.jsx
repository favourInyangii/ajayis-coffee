import React from 'react';
import { SiCoffeescript } from "react-icons/si";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "flavours",
        link: "#",
    },
    {
        id: 3,
        title: "About",
        link: "#",
    },
    {
        id: 4,
        title: "Shop",
        link: "#",
    },
    {
        id: 5,
        title: "Contacts",
        link: "#",
    },
];


const Navbar = () => {
    return (
        <nav>
            <div className="container">
                {/*Logo section*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Ajayi's</p>
                    <p className='text-secondary'>Cups</p>
                    <SiCoffeescript className='text-stone-950' />
                </div>
                {/*Menu section*/}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-500'>
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id} className='text-xl'>
                                <a href={menu.link}> {menu.title} </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
