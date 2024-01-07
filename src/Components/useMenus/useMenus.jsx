import { useEffect, useState } from "react";

const useMenus = () =>{
    const [menu, setMenu] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false);
               
            })
    }, [])

    return[menu,loading]


}
export default useMenus;