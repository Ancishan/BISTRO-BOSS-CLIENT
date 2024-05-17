import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import ImgPizza from '../../assets/menu/pizza-bg.jpg'
import SaladImg from '../../assets/menu/salad-bg.jpg'
import SoupImg from '../../assets/menu/soup-bg.jpg'
import UseMenu from '../../Hooks/UseMenu';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../Shared/MenuCategory';


const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                    <title>Bisto Boss || menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading="Don't miss" heading="TODAY'S OFFER"
            ></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
            items = {dessert}
            title="Dessert"
            coverImg={desertImg}
            ></MenuCategory>
            <MenuCategory
            items = {pizza}
            title="Pizza"
            coverImg={ImgPizza}
            ></MenuCategory>
            <MenuCategory
            items = {salad}
            title="Salad"
            coverImg={SaladImg}
            ></MenuCategory>
            <MenuCategory
            items = {soup}
            title="Soup"
            coverImg={SoupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;