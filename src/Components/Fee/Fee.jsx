
import { Link } from "react-router-dom";
import FeeItems from "../FeeItems/FeeItems";
import useMenu from "../../Hooks/useMenu";



const Fee = () => {


    const [menu] = useMenu();

    const popular = menu.filter(item =>item.classname ==='12' && item.classroll==='25');
    const pop = menu.filter(item =>item.classname ==='12' && item.classroll==='10');
    const popp = menu.filter(item =>item.classname ==='5' && item.classroll==='10');

  
 
 
    return (
        
        <div className="ml-4">
        <Link className="ml-4" to='/'>Home</Link>
        <Link className="ml-4" to='/class'>Class</Link>
        <Link className="ml-4" to='/addCoffee'>Add Student</Link>
        <Link className="ml-4" to='/fee'>Fee</Link>
        <Link className="ml-4" to='/different'>Different</Link>

        
       <div className="flex gap-5 mt-5 text-red-600 ml-10">
   
       <h1>Class Name: 12</h1>
        <h1>Class Roll: 25</h1>
       
       </div>
       
        <div className="flex gap-4">
      
        {
              popular.map(item => <FeeItems key={item._id} item={item}></FeeItems>)
          }
        
        </div>

        <div className="flex gap-5 mt-5 text-red-600 ml-10">
       <h1>Class Name: 12</h1>
        <h1>Class Roll: 10</h1>
       </div>
        <div className="flex gap-4">
      
      {
            pop.map(item => <FeeItems key={item._id} item={item}></FeeItems>)
        }
      
      </div>
      <div className="flex gap-5 mt-5 text-red-600 ml-10">
       <h1>Class Name: 5</h1>
        <h1>Class Roll: 10</h1>
       </div>
        <div className="flex gap-4">
      
      {
            popp.map(item => <FeeItems key={item._id} item={item}></FeeItems>)
        }
      
      </div>

      </div>
       
    );
};

export default Fee;