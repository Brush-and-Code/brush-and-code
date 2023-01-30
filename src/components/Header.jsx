import React, {useState, useEffect} from 'react';
import logotype from '../assets/bc-liggande-rosa.png'
import {Link} from 'react-router-dom';
import sanityClient from '../client';

function Header() {
  const [nav, setNav] = useState(null);

  useEffect (() => {
    sanityClient.fetch(
        `*[_type == "menus"]{
            "pages": pages[]->{title, slug, id},
        }`
    )
    .then((data) => {
        setNav(data[0].pages)
    })
    .catch(console.error);
  }, []);


  if (nav) {
    return (
      <>
        <section className='w-full fixed top-0 z-10 py-7'>
          <div className='w-[90%] flex m-auto'>
            <div className='w-[25%] flex items-center content-center'>
              <img className='w-[240px]' src={logotype} alt="Brush & Code" />
            </div>
            <div className='w-[25%] flex items-center content-center justify-between'>
              <ul className='list-none flex p-0 m-0 items-center content-center'>
                  {nav.map((nav, index) => (
                    <li key={nav.slug.current} className='mx-4'>
                        <Link className='font-poppins text-white' to={nav.slug.current}>{nav.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    )
  }

}

export default Header