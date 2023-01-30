import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

const Cases = ({block}) => {
    const [cases, setCases] = useState(null);

    useEffect (() => {
        sanityClient.fetch(
            `*[_type == "case"]{
                title,
                thumbnail,
                slug,
            }`
        )
        .then((data) => {
            setCases(data)
        })
        .catch(console.error);
    }, []);


    if (cases) {
        console.log(cases);
        return (
            <>
                <section className='w-full py-[80px]'>
                    <div className='w-full h-[700px] overflow-y-hidden overflow-x-scroll whitespace-nowrap'>
                        {cases.map((cases, index) => (
                            <Link key={cases.slug.current} to={'case/'+cases.slug.current} className='group w-[400px] hover:w-[1000px] duration-300 h-full mx-[8px] inline-block bg-no-repeat bg-cover bg-center relative after:content[""] after:w-full after:h-full after:bg-white/[.6] after:absolute' style={{ backgroundImage: `url(${builder.image(cases.thumbnail.asset._ref)})` }}>
                                <div className='absolute top-[20px] left-[20px] z-10 group-hover:top-2/4 group-hover:left-2/4 group-hover:-translate-y-2/4 group-hover:-translate-x-2/4 duration-300'>
                                    <h3 className='font-poppins text-black m-0 text-[30px] font-bold'>{cases.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </>
          )  
    }
}

export default Cases