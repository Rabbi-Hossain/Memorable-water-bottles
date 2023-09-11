import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {id,name,price,img} = bottle;

    return (
        <div className="bottle">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;