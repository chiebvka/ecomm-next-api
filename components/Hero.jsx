import React, { useState } from 'react';
import Image from 'next/image';
import { BiLeftArrowAlt, BiRightArrowAlt }  from 'react-icons/bi';
import Link from 'next/link';

const Hero = () => {
    
    const [index, setIndex] = useState(0)

    const images = [
        'https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?cs=srgb&dl=pexels-naim-benjelloun-2287523.jpg&fm=jpg',
        'https://images.pexels.com/photos/3958189/pexels-photo-3958189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/566887/pexels-photo-566887.jpeg?cs=srgb&dl=pexels-toni-cuenca-566887.jpg&fm=jpg',
        'https://images.pexels.com/photos/1640517/pexels-photo-1640517.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1640517.jpg&fm=jpg'
    ]

    const handleArrow = (direction => {
        if(direction === "l"){
            setIndex(index !== 0 ? index-1 : 3  )
        }
        if(direction === "r"){
            setIndex(index !== 3 ? index+1 : 0  );
        }
    })
    console.log(index)
  return (
    <div className="h-[80vh] w-[98vw] m-auto bg-rose-400 overflow-hidden  relative">
        <div className="mx-auto  my-auto opacity-[0.7]  hover:opacity-[1] z-30 absolute cursor-pointer bg-slate-400 top-0 bottom-0 border w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] flex items-center justify-center  border-slate-900  rounded-full" style={{left: 0}} onClick={() => handleArrow("l")}>
            <BiLeftArrowAlt size={25}  />
        </div>
        <div className="wrapper flex w-[400vw] h-full transition delay-100 ease-in-out duration-300" style={{transform: `translateX(${-100*index}vw)`}}>
                {/* {images.map((img, i) => ( */}
                <div className="imgcontainer w-full flex items-center justify-end relative h-full" objectfit="contain">
                    <div className="imagcontainer -z-30">
                        <Image src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?cs=srgb&dl=pexels-adrien-olichon-2387793.jpg&fm=jpg" className="bg-no-repeat bg-cover bg-center" alt="" layout='fill' />
                    </div>
                    <div className="infocontainer border bg-indigo-100 lg:w-[60%] md:w-[50%] w-[70%] mx-auto lg:mr-13 p-5  -mt-5 lg:p-9 z-100">
                        <h1 className="text-lg lg:text-3xl text-slate-700 font-bold">Reveal the <br /> beauty of the skin</h1>
                        <p className="text-sm lg:text-xl text-slate-700 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nulla beatae voluptatum id aperiam rerum!</p>
                        <Link href="/">
                            <a className="border-2 border-gray-800 text-xs text-center bg-slate-900 px-4 text-slate-100 p-2">Shop Now</a>
                        </Link>
                    </div>
                </div>
                <div className="imgcontainer w-full flex items-center justify-end relative h-full" objectfit="contain">
                    <div className="imagcontainer -z-30">
                        <Image src="https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-3473569.jpg&fm=jpg" className="bg-no-repeat bg-cover bg-center" alt="" layout='fill' />
                    </div>
                    <div className="infocontainer border bg-indigo-100 lg:w-[60%] md:w-[50%] w-[70%] mx-auto lg:mr-13 p-5  -mt-5 lg:p-9 z-100">
                        <h1 className="text-lg lg:text-3xl text-slate-700 font-bold">Reveal the <br /> beauty of the skin</h1>
                        <p className="text-sm lg:text-xl text-slate-700 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nulla beatae voluptatum id aperiam rerum!</p>
                        <Link href="/">
                            <a className="border-2 border-gray-800 text-xs text-center bg-slate-900 px-4 text-slate-100 p-2">Shop Now</a>
                        </Link>
                    </div>
                </div>
                <div className="imgcontainer w-full flex items-center justify-end relative h-full" objectfit="contain">
                    <div className="imagcontainer -z-30">
                        <Image src="https://images.pexels.com/photos/3848893/pexels-photo-3848893.jpeg?cs=srgb&dl=pexels-maxim-titov-3848893.jpg&fm=jpg" className="bg-no-repeat bg-cover bg-center" alt="" layout='fill' />
                    </div>
                    <div className="infocontainer border bg-indigo-100 lg:w-[60%] md:w-[50%] w-[70%] mx-auto lg:mr-13 p-5  -mt-5 lg:p-9  z-100">
                        <h1 className="text-lg lg:text-3xl text-slate-700 font-bold">Reveal the <br /> beauty of the skin</h1>
                        <p className="text-sm lg:text-xl text-slate-700 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nulla beatae voluptatum id aperiam rerum!</p>
                        <Link href="/">
                            <a className="border-2 border-gray-800 text-xs text-center bg-slate-900 px-4 text-slate-100 p-2">Shop Now</a>
                        </Link>
                    </div>
                </div>
                <div className="imgcontainer w-full flex items-center justify-end relative h-full" objectfit="contain">
                    <div className="imagcontainer -z-30">
                        <Image src="https://images.pexels.com/photos/772988/pexels-photo-772988.jpeg?cs=srgb&dl=pexels-rachel-xiao-772988.jpg&fm=jpg" className="bg-no-repeat bg-cover bg-center" alt="" layout='fill' />
                    </div>
                    <div className="infocontainer border bg-indigo-100 lg:w-[60%] md:w-[50%] w-[70%] mx-auto lg:mr-13 p-5  -mt-5 lg:p-9 z-100">
                        <h1 className="text-lg lg:text-3xl text-slate-700 font-bold">Reveal the <br /> beauty of the skin</h1>
                        <p className="text-sm lg:text-xl text-slate-700 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nulla beatae voluptatum id aperiam rerum!</p>
                        <Link href="/">
                            <a className="border-2 border-gray-800 text-xs text-center bg-slate-900 px-4 text-slate-100 p-2">Shop Now</a>
                        </Link>
                    </div>
                </div>
                {/* ))} */}
        </div>
        <div className="mx-auto  my-auto opacity-[0.7]  hover:opacity-[1] absolute cursor-pointer bg-slate-400 top-0 bottom-0 border w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] flex items-center justify-center  border-slate-900  rounded-full" style={{right: 0}} onClick={() => handleArrow("r")}>
            <BiRightArrowAlt size={25} />
        </div>
    </div>
  )
}

export default Hero