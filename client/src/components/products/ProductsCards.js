import React, {useState} from 'react';
import './ProductCard.css';



const ProductCard = (props) => {
    // console.log('productCard', props)
    const [image, setImage ] = useState(props.images[0])

    const handleHover = () => {
        if (props.images.length > 1){
            setImage(props.images[1]);
        }
    }

    const handleLeaveHover = () => {
        setImage(props.images[0]);
    }
    return (
        <div 
        className='productCard'
        >
            <img 
            src={image} 
            alt='imageq1' 
            onMouseOver={handleHover}
            onMouseLeave={handleLeaveHover}
            />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default ProductCard;