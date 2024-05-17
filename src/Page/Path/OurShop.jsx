import { useState } from 'react';
import coverOrderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/UseMenu';
import FoodOrderTab from '../../Component/SectionTitle/FoodCard/FoodOrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const OurShop = () => {

    const categories = ['Salad','Soup','Pizza','Dessert','Drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={coverOrderImg} title="ORDER FOOD"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                   <Tab>Salad</Tab>
                    <Tab>Soup </Tab>
                    <Tab>Pizza </Tab>
                    <Tab>Dessert </Tab>
                    <Tab>Drinks </Tab>
                </TabList>
                <TabPanel>
                    <FoodOrderTab items={salad}></FoodOrderTab>
                </TabPanel>
                <TabPanel>
                <FoodOrderTab items={soup}></FoodOrderTab>
                </TabPanel>
                <TabPanel>
                <FoodOrderTab items={pizza}></FoodOrderTab>
                </TabPanel>
                <TabPanel>
                <FoodOrderTab items={dessert}></FoodOrderTab>
                </TabPanel>
                <TabPanel>
                <FoodOrderTab items={drinks}></FoodOrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;