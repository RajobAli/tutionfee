import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";


function App() {
  const coffees = useLoaderData();


  return (
    <>

      <h1 className="text-3xl text-center text-green-400">All Students :{coffees.length}</h1>
      <div className="ml-4">
        <Link className="ml-4" to='/'>Home</Link>
        <Link className="ml-4" to='/class'>Class</Link>
        <Link className="ml-4" to='/addCoffee'>Add Student</Link>
        <Link className="ml-4" to='/fee'>Fee</Link>
        <Link className="ml-4" to='/different'>Different</Link>
      </div>
      {
        coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
        ></CoffeeCard>)
      }




    </>
  )
}

export default App
