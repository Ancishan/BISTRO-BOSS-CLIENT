import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import fea1 from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-slate-400 bg-opacity-50  text-white  py-6 my-20" >
            <SectionTitle
            subHeading={"check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16 bg-slate-400 bg-opacity-50 ">
            <div>
                <img src={fea1} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">WHERE CAN I GET SOME?</p>
                <p className="py-4">orem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline border-0 border-b-4"> Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;