// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import p1 from '../../assets/home/slide1.jpg'
import p2 from '../../assets/home/slide2.jpg'
import p3 from '../../assets/home/slide3.jpg'
import p4 from '../../assets/home/slide4.jpg'
import p5 from '../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            
           <SectionTitle 
           subHeading={"From 11.00 Am to 10.30Pm"}
           heading={"Order Online"}>
            
           </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p1}/><h3 className='text-3xl text-white -mt-16 text-center uppercase'>Salad</h3></SwiperSlide>
        <SwiperSlide><img src={p3}/><h3 className='text-3xl text-white -mt-16 text-center uppercase'>Pizzas</h3></SwiperSlide>
        <SwiperSlide><img src={p4}/><h3 className='text-3xl text-white -mt-16 text-center uppercase'>desert</h3></SwiperSlide>
        <SwiperSlide><img src={p5}/><h3 className='text-3xl text-white -mt-16 text-center uppercase'>palad</h3></SwiperSlide>
        <SwiperSlide><img src={p2}/><h3 className='text-3xl text-white -mt-16 text-center uppercase'>Salakkd</h3></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;