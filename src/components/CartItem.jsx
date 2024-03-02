import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice.js";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

function CartItem({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 border-2 rounded-lg hover:scale-105 transition-transform duration-300 p-6">
            <img
                src={product.image}
                alt={`${product.title} image`}
                className="w-1/2 max-w-36 mx-auto"
            />
            <div className="flex flex-col gap-y-3">
                <h2 className="font-medium text-xl tracking-wider">
                    {product.title}
                </h2>
                <p className="text-lg opacity-80">
                    {product.description.substr(0, 60)}...
                </p>
                <div className="flex justify-between items-center">
                    <p className="font-medium text-lg">${product.price}</p>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(removeFromCart({ id: product.id }));
                            toast.error("Item removed from cart");
                        }}
                        className="w-8 aspect-square text-lg text-moderateBlue bg-lightGrayishBlue flex justify-center items-center hover:text-lightGrayishBlue hover:bg-moderateBlue transition-colors duration-300 rounded-full"
                    >
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
