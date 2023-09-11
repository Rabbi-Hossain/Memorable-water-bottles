import { useEffect, useState } from "react";
import Bottle from "../../Bottle/Bottle";
import './Bottles.css'
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    // console.log(bottles)
    useEffect(()=>{
        fetch('Bottles.json')
        .then(res=>res.json())
        .then(data=> setBottles(data))
    }, [])

    const handleAddToCart = bottle=>{
        const newCart = [...cart, bottle]
        setCart(newCart)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <div className="bottle-container">
            {
                bottles.map(b=> <Bottle bottle={b} handleAddToCart={handleAddToCart}  key={b.id} ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;
