import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                    <title>Bisto Boss || menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;