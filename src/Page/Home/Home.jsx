import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonials/Testimonial";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";


const Home = () => {
    return (
        <div>
             <Helmet>
                    <title>Bisto Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;