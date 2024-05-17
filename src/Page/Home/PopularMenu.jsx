
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import UseMenu from "../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
 
    return (
        <div>
            <SectionTitle
                heading="From Our Menu"
                subHeading='Popular Items'
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-x-4" >
                {
                    popular.map(item => 
                    <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4"> View Full</button>
        </div>
    );
};

export default PopularMenu;