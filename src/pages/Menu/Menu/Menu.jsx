import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImgBg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* Main cover  */}
            <SectionTitle subHeading={<i>---Don't Miss---</i>} heading="Today's Offer"></SectionTitle>
            {/* Offered menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items  */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImgBg}
            ></MenuCategory>
            {/* pizza menu items  */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* salad menu items  */}
            <MenuCategory
                items={salad}
                title="salads"
                img={saladImg}
            ></MenuCategory>
            {/* soups menu items  */}
            <MenuCategory
                items={soup}
                title="soups"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;