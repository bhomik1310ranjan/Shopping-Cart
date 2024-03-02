import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice.js";
import toast from "react-hot-toast";

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const addedInCart = cart.some((item) => item.id === product.id);

    return (
        <div className="flex flex-col justify-between items-center gap-y-3 border-2 rounded-xl hover:scale-105 transition-transform duration-300 p-4">
            <h2 className="font-medium">{product.title.substr(0, 17)}...</h2>
            <p className="text-xs text-center opacity-80">
                {product.description.substr(0, 40)}...
            </p>
            <img
                src={product.image}
                alt={`${product.title} image`}
                className="h-48 object-contain"
            />
            <div className="w-full flex justify-between items-center">
                <p className="font-medium text-moderateBlue">
                    ${product.price}
                </p>
                {addedInCart ? (
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(removeFromCart({ id: product.id }));
                            toast.error("Item removed from cart");
                        }}
                        className="font-medium text-xs text-moderateBlue uppercase border-2 border-moderateBlue rounded-3xl hover:text-white hover:bg-moderateBlue transition-colors duration-300 px-3 py-1"
                    >
                        Remove item
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(addToCart({ product }));
                            toast.success("Item added to cart");
                        }}
                        className="font-medium text-xs text-moderateBlue uppercase border-2 border-moderateBlue rounded-3xl hover:text-white hover:bg-moderateBlue transition-colors duration-300 px-3 py-1"
                    >
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
