import React from 'react'
import MainDrawer from './MainDrawer'
import { Link, NavLink } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { BsCollectionPlay } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaMedium, FaTelegram, FaYoutube } from 'react-icons/fa'

const MenuDrawer = ({ drawerOpen, toggleDrawer }) => {
    const active = "bg-dry text-subMain";
    const hover = "hover:text-white hover:bg-dry";
    const inActive = "rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4";

    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : `$${inActive} ${hover}`;

    const Links = [
        {
            name: "Movies",
            link: "/movies",
            icon: BsCollectionPlay
        },
        {
            name: "About Us",
            link: "/about-us",
            icon: HiOutlineUserGroup
        },
        {
            name: "Contact Us",
            link: "/contact-us",
            icon: BiPhoneCall
        },
    ];

    const LinkDatas = [
        {
            icon: FaFacebook,
            link: "/facebook.com"
        },
        {
            icon: FaMedium,
            link: "/facebook.com"
        },
        {
            icon: FaTelegram,
            link: "/facebook.com"
        },
        {
            icon: FaYoutube,
            link: "/facebook.com"
        },
    ]

  return (
    <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
        <div className='flex flex-col w-full h-full justify-between items-center bg-main text-white rounded'>
            <div className='w-full flex-btn h-16 px-6 py-4 bg-dry'>
                <Link onClick={toggleDrawer} to="/">
                    <img
                        src='/images/logo.png'
                        alt='logo'
                        className='w-28 h-28 object-contain' 
                    />
                </Link>
                <button onClick={toggleDrawer} type='button' className='transitions w-10 h-10 flex-colo text-base text-subMain bg-white rounded-full hover:bg-subMain hover:text-white'>
                    <CgClose />
                </button>
            </div>
            <div className='w-full overflow-y-scroll flex-grow max-height-full'>
                <div className='pb-12 pt-4'>
                    {Links.map((link, index) => (
                        <NavLink
                            to={link.link}
                            key={index}
                            onClick={toggleDrawer}
                            className={Hover}
                        >
                            <link.icon className='text-lg' /> {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='flex-rows gap-6 w-full'>
                {LinkDatas.map((link, index) => (
                    <a href={link.link} key={index} target='_blank' rel='noreferrer' className='flex-colo w-12 h-12 transitions hover:bg-subMain text-lg bg-white rounded bg-opacity-30'>
                        <link.icon className='text-lg' />
                    </a>
                ))}
            </div>
        </div>
    </MainDrawer>
  )
}

export default MenuDrawer