import React from 'react';
import galleryDBlink from '../json/gallerydb.json';


function Gallery(props) {
  const gallerydb = galleryDBlink[props.objnm];
  return (
    <section data-aos="zoom-in" className="section text-center" id={props.contentid}>
      <h3 data-aos="fade-right" className={props.title == 'no' ? 'd-none' : 'swiper_h3'}>GALLERY</h3>
      <p data-aos="fade-left" className={props.title == 'no' ? 'd-none' : 'swiper_p'}>노을필름의 다양한 사진들을 소개합니다.</p>

      <div className='gallery_section d-flex flex-wrap px-0'>
        <div className='col-12 px-0 d-flex row m-0'>
          {
            gallerydb.map((item, index) => {
              return (
                <div className={`${item.cls} col-3`} key={'sw' + index} style={{ backgroundImage: item.bg }}>{item.worktitle}</div>
              )
            }
            )
          }
        </div>
        
      </div>

    </section>
  );
}

export default Gallery;