import React, {useState, useEffect} from 'react';
import sanityClient from '../client';

import { HeroVideo, Cases, ImageSliderText } from "../components";

function Hem() {
  // Load the right component, based on the _type from Sanity
  const Components = {
    herovideo: HeroVideo,
    casessection: Cases,
    imageslidertext: ImageSliderText,
  }
  const [pageBuilder, setPageBuilder] = useState(null);

  useEffect (() => {
    sanityClient.fetch(
      `*[slug.current == "hem"]{
        title,
        pageBuilder
      }`
    )
    .then((data) => {
      setPageBuilder(data[0].pageBuilder)
      // console.log(pageBuilder);
    })
    .catch(console.error);
  }, []);


  if (pageBuilder) {
    return pageBuilder.map((block, index) => {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
      });
    });
  }


}

export default Hem