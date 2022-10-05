import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Collection = () => {
  return (
    <div className=" md:p-7 p-8 lg:p-[20px]relative">
        <div className="p-0 md:p-2 lg:p-10 mx-auto my-auto">
        <ul class="grid gap-[30px] grid-cols-1 lg:grid-cols-3 md:grid-cols-3">

            <li>
              <div className="collection-card has-before hover:shine">

                <h2 className="h2 card-title text-">Summer Collection</h2>
 
                <p className="card-text">Starting at $17.99</p>

                <Link href="/">
                    <a className="btn-link">
                    <span className="span">Shop Now</span>

                    <FaLongArrowAltRight size={20} name="arrow-forward" aria-hidden="true" />
                    </a>
                </Link>

                <div className="has-bg-image" style={{backgroundImage: `url('./images/collection-1.jpg')`}}></div>

              </div>
            </li>

            <li>
              <div className="collection-card has-before hover:shine">

                <h2 className="h2 card-title">What’s New?</h2>

                <p className="card-text">Get the glow</p>


                <Link href="/">
                    <a className="btn-link">
                    <span className="span">Discover Now</span>

                    <FaLongArrowAltRight size={20} name="arrow-forward" aria-hidden="true" />
                    </a>
                </Link>

                <div className="has-bg-image" style={{backgroundImage: `url('./images/collection-2.jpg')`}}></div>

              </div>
            </li>

            <li>
              <div className="collection-card has-before hover:shine">

                <h2 className="h2 card-title">Buy 1 Get 1</h2>

                <p className="card-text">Starting at $7.99</p>

                <Link href="/">
                    <a className="btn-link">
                    <span className="span">Discover Now</span>

                    <FaLongArrowAltRight size={20} name="arrow-forward" aria-hidden="true" />
                    </a>
                </Link>

                <div className="has-bg-image" style={{backgroundImage: `url('./images/collection-3.jpg')`}}></div>

              </div>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default Collection