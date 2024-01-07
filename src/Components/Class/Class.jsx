
import { useEffect, useState } from "react";

import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router-dom";




const Class = () => {
    const [menu, setMenu] = useState([]);
    
 
    
    useEffect(() => {
        fetch('https://tution-server-9df4zst31-arajob039-gmailcom.vercel.app/coffee')
            .then(res => res.json())
            .then(data => {
                
                const popularItems = data.filter(item => item.classname === '12' );
                setMenu(popularItems)
            })
    }, [])

    // const [menu] = useMenu();
    // const one = menu.filter(item =>item.classname ==='12' && item.classroll==='25');
    // const two = menu.filter(item =>item.classname ==='5' && item.classroll==='2');
    // const three = menu.filter(item =>item.classname ==='5' && item.classroll==='3');
    // const four = menu.filter(item =>item.classname ==='5' && item.classroll==='4');
    // const five = menu.filter(item =>item.classname ==='5' && item.classroll==='5');
    return (
       <div>
          <div className="ml-4">
              
                <Link className="ml-4" to='/'>Home</Link>
                <Link className="ml-4" to='/class'>Class</Link>
                <Link className="ml-4" to='/addCoffee'>Add Student</Link>
                <Link className="ml-4" to='/fee'>Fee</Link>
                <Link className="ml-4" to='/different'>Different</Link>
               
                <h1>Number of students of class 12 is :
                 <span className="text-red-600 text-2xl">{menu.length}</span></h1>
            </div>
         <div>
          
      
          {
              menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
          }

      </div>
       </div>
    );
};

export default Class;