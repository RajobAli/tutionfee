

const FeeItems = ({item}) => {
    const {month,amount} = item;
    return (
        <div>
            <h1>{month}</h1>
            <h1>{amount}</h1>
            
        </div>
    );
};

export default FeeItems;