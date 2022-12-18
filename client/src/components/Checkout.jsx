import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpeg";
import "../App.css";

const Checkout = () => {

    return (
        <div className="checkout">
            <h1>Stripe Checkout</h1>
            <p className="checkout-title">HeadPhone Shop</p>
            <p className="checkout-description">
                Gold Special
            </p>
            <h1 className="checkout-price">&#x20b9;900.00</h1>
            <img
                className="checkout-product-image"
                src={ProductImage}
                alt="Product"
            />

            <form action="http://localhost:4242/create-checkout-session" method="POST">
                <button
                    className="checkout-button"
                    type="submit"
                >
                    <div className="grey-circle">
                        <div className="purple-circle">
                            <img className="icon" src={CardIcon} alt="credit-card-icon" />
                        </div>
                    </div>
                    <div className="text-container">
                        <p className="text">Buy</p>
                    </div>
                </button>
            </form>


        </div>
    );
};

export default Checkout;
