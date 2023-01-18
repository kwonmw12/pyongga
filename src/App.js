import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Routes, Link, Route } from 'react-router-dom';

import Header from './component/Hd';
import Worksswiper from './component/Swiper';
import Gallery from './component/Gallery'
import Photo from './component/Photo'

import Review from './component/Review';
import Preinterview from './component/Preinterview'
import Footer from './component/Footer'


function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper contentid="mainbanner" objnm="mainsection">
      </Worksswiper>
      <Gallery contentid="gallery" objnm="gallery_w">
        <Routes></Routes>
      </Gallery>
      <Photo contentid="bestphoto" objnm="bestphoto"></Photo>
      
      <Review contentid="review" objnm="review" title="REVIEW" subtitle="노을필름을 이용해주신 고객님들의 리뷰입니다."></Review>
      <Preinterview contentid="reservation" objnm="noticeObj" title="QnA"></Preinterview>
      
      <Footer></Footer>
    </div>
  );
}


export default App;
