import { useEffect, useState } from "react";

const useMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://tution-server-9df4zst31-arajob039-gmailcom.vercel.app/coffee')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false);
               
            })
    }, [])

    return[menu,loading]


}
export default useMenu;