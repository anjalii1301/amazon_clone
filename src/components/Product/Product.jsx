import './Product.css'
import { useStateValue } from '../../StateProvider'

const ProductCard = ({ id, title, price, image, rating, description }) => {
  const [state, dispatch] = useStateValue();
  let quantity = 1;

  const addtoCart = () => {

    dispatch({
      type: "add_to_cart",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
        description: description,
      },
    });
  };

  return (
     <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-content">
        <h3 className="product-title">{title}</h3>

        <p className="product-description">
          {description?.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>

        <div className="product-rating">
          ⭐ {rating} / 5
        </div>

        <div className="product-footer">
          <span className="product-price">${price}</span>
          <button className="add-to-cart-btn" onClick={addtoCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;