
const CoffeeCard = ({coffee}) => {
    const {name,classname,section,classroll} = coffee;
    return (
        <div>
            
            <div className="flex gap-5 p-4">
            <h1>{name}</h1>
            <h1>{classname}</h1>
            <h1>{section}</h1>
            <h1>{classroll}</h1>
            
        </div>
        </div>
    );
};

export default CoffeeCard;