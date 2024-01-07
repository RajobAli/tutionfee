


const MenuItem = ({ item }) => {
    const { classroll, name, month, amount } = item;
    return (

   


            <div className="flex">
                <div className="ml-32 flex gap-4 w-1/2">

                     <h1>{name}</h1>
                    <h1>{classroll}</h1>
                    <h1>{month}</h1>
                    <h1>{amount}</h1>


                </div>
              

             
            </div>
       
    );
};

export default MenuItem;