
import { Link } from "react-router-dom";


const DifferentClass = () => {

    const data = [1, 2, 3, 4, 2, 1];

const uniqueData = [...new Set(data)];

const renderList = uniqueData.map(item => (
  <li key={item}>{item}</li>
));




    return (
        <div>
            <div>
                <Link className="ml-4" to='/'>Home</Link>
                <Link className="ml-4" to='/class'>Class</Link>
                <Link className="ml-4" to='/addCoffee'>Add Student</Link>
                <Link className="ml-4" to='/fee'>Fee</Link>
                <Link className="ml-4" to='/different'>Different</Link>


            </div>
            <div>
            <ul>{renderList}</ul>
            </div>


        </div>
    );
};

export default DifferentClass;