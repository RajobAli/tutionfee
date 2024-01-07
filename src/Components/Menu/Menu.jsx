import useMenu from "../../Hooks/useMenu";

import FeeItems from "../FeeItems/FeeItems";




const Menu = () => {
    const [menu] = useMenu();
    const one = menu.filter(item =>item.classname ==='12' && item.classroll==='25');
    const two = menu.filter(item =>item.classname ==='5' && item.classroll==='2');
    const three = menu.filter(item =>item.classname ==='5' && item.classroll==='3');
    const four = menu.filter(item =>item.classname ==='5' && item.classroll==='4');
    const five = menu.filter(item =>item.classname ==='5' && item.classroll==='5');

    return (
        <div>
          {/* <ClassAndRoll items={one}></ClassAndRoll> */}
          {/* <MenuCategory items={one}></MenuCategory> */}
          <FeeItems item={one}></FeeItems>
          
            
        </div>
    );
};

export default Menu;