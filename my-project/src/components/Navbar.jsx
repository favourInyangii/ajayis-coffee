import React from 'react';
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
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
            <div className="container flex justify-between items-center py-4">
                {/*Logo section*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Ajayi's</p>
                    <p className='text-secondary'>Cups</p>
                    <SiCoffeescript className='text-stone-950' />
                </div>
                {/*Menu section*/}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.link}
                                    className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#92400e] font-semibold'> {menu.title} </a>
                            </li>
                        ))}
                        <button className='text-2xl hover:bg-secondary hover:text-white rounded-full p-2 duration-200'>
                            <MdOutlineShoppingCart />
                        </button>
                    </ul>
                </div>
                {/*mobile hamburger Menu section*/}
                <div className='md:hidden'>
                    <MdMenu className='text-4xl' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
