import FoodCard from "./FoodCard";


const FoodOrderTab = ({ items }) => {

    return (
        <div>
            
            <div className='grid md:grid-cols-3 gap-3'>
               {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }

               </div>
        </div>
    );
};

export default FoodOrderTab;