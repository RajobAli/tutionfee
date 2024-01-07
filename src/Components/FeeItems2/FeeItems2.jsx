import { useEffect, useState } from "react";


const FeeItems2 = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('https://tution-server-9df4zst31-arajob039-gmailcom.vercel.app/coffee')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.classname === '12' && item.classroll==='25');
                setMenu(popularItems)
            })
    }, [])
   
    return (
        <div>
           {menu.length}
        </div>
    );
};

export default FeeItems2;