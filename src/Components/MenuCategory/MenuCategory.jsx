
import FeeItems from "../FeeItems/FeeItems";



const MenuCategory = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10">
                {
              <FeeItems key={items._id} item={items}></FeeItems>
                }
            </div>
            
        </div>
    );
};

export default MenuCategory;