import SectionTitle from "../../Component/SectionTitle/SectionTitle";
// Import Swiper React components
import {  Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'Testimonials'}
            ></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            {/* <img src={} alt="" /> */}
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;