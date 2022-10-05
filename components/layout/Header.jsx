import React, {useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch, AiOutlineUserSwitch, AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { BiBookmarkHeart, BiCategory } from 'react-icons/bi';
import { BsCart4, BsShop, BsFillQuestionOctagonFill } from 'react-icons/bs';
import { MdOutlineMapsHomeWork, MdOutlineContactMail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg'
import { TbAlignLeft } from 'react-icons/tb'



const Header = () => {

  const [hamState, setHamState] = useState(false);

  return (

    <div className="border-b-2 border-slate-400">
      {/** Top Navbar */}
      <div className="max-w-[1640px] py-0 w-11/12 mx-auto flex justify-between items-center p-1">
        {/** Left Side */}
        <div className="flex items-center">
          <div onClick={() => setHamState(!hamState)} className="lg:hidden cursor-pointer mr-8">
            <TbAlignLeft size={30} />
          </div>
          <Link href="https:deluccis.com">
            <a className="flex ml-15 md:ml-60 lg:ml-0 flex-center">
              <Image src="/images/ds.png"  width={70} height={70} />
            </a>
          </Link>
        </div>
        {/** Search Input */}
        <div className="hidden bg-gray-200 border-2 border-slate-400 rounded lg:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} className="font-black" />
          <input className="bg-transparent p-2 w-full border-none focus:outline-none" type="text" placeholder='Search for home items' />
        </div>
        {/** Right Side */}
        <div className="flex items-end justify-end mx-5 space-x-4">
      <Link href="/">
        <a className="text-center text-gray-700 border-lime-900 hover:text-slate-400 transition relative">
          <div className="text-2xl">
            <BiBookmarkHeart size={23} />
          </div>
          <span className="absolute -right-3 -top-1 w-4 h-4 m-0 p-1 text-center rounded-full flex items-center justify-center bg-black text-white text-[8px]">22</span>
        </a>
      </Link>
      <Link href="/">
        <a className="text-center text-gray-700 hover:text-slate-400 transition relative">
          <div className="text-2xl">
            <BsCart4 size={23} />
          </div>
          <span className="absolute -right-3 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-black text-white text-[8px]">8</span>
        </a>
      </Link>
      <Link href="/">
        <a className="text-center text-gray-700 hover:text-slate-400 transition relative">
          <div className="text-2xl">
            <AiOutlineUserSwitch size={23} />
          </div>
        </a>
      </Link>
        </div>
        {/** Mobile Menu */}
        {/** overlay */}
        {hamState ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
        {/** Side drawer menu */}
        <div className={hamState ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 overflow-auto" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
          <AiOutlineCloseCircle onClick={() => setHamState(!hamState)} size={30} className="absolute right-4 top-9 cursor-pointer" />
          <Link href="https:deluccis.com">
            <a className=" border-red-600 flex p-5 flex-center md:border-lime-600">
              <Image src="/images/ds.png"  width={70} height={70} />
            </a>
          </Link>
          <nav>
            <ul className='flex flex-col text-gray-800'>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><MdOutlineMapsHomeWork size={25} className="mr-4" />
                  <p>Home</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><BsShop size={25} className="mr-4" />
                  <p>Shop</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><BiCategory size={25} className="mr-4" />
                  <p>Departments</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><BsFillQuestionOctagonFill size={25} className="mr-4" />
                  <p>FAQ</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><MdOutlineContactMail size={25} className="mr-4" />
                  <p>Contact</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
              <li className='text-xl py-4 px-5 flex hover:bg-gray-200 transition ease-in-out duration-200 border-b-2 border-slate-200'>
                <Link href="/">
                  <a className='flex'><CgWebsite size={25} className="mr-4" />
                  <p>Blog</p>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/** Bottom Navbar */}
      <nav className="hidden lg:flex container h-10 mx-auto  items-center justify-center">
        <div className="flex items-center space-x-6 capitalize">
          <Link href="">
            <a className="text-gray-900 hover:text-slate-400 transition">Home</a>
          </Link>
          <Link href="">
            <a className="text-gray-900 hover:text-slate-400 transition">Shop</a>
          </Link>
          <Link href="">
            <a className="text-gray-900 hover:text-slate-400 transition">Contact</a>
          </Link>
          <Link href="">
            <a className="text-gray-900 hover:text-slate-400 transition">FAQ</a>
          </Link>
          <Link href="">
            <a className="text-gray-900 hover:text-slate-400 transition">Shipping</a>
          </Link>
          <Link href="">
            <a className="text-gray-900 hover:text-slate-400 transition">Blog</a>
          </Link>
        </div>
      </nav>
      <nav className="lg:hidden w-10/12 mb-3 content-center h-10 mx-auto items-center justify-center">
        <div className="bg-gray-200 rounded border-2 border-slate-400 flex items-center px-2 w-10/12 mx-auto">
          <AiOutlineSearch size={20} />
          <input className="bg-transparent p-2 w-full border-none focus:outline-none" type="text" placeholder='Search for home items' />
        </div>
      </nav>
    </div>

  )
}

export default Header