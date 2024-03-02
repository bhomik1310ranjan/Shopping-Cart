import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import { useEffect, useState } from "react";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto py-8">
            {cart.length > 0 ? (
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-3/5 flex flex-col gap-y-4">
                        {cart.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="w-full md:w-2/5 flex flex-col justify-between">
                        <div>
                            <p className="font-medium text-xl text-moderateBlue tracking-wider">
                                Your cart
                            </p>
                            <h3 className="font-semibold text-4xl text-moderateBlue tracking-wider">
                                Summary
                            </h3>
                            <p className="text-xl tracking-wider">
                                <span className="font-medium">
                                    Total Items:
                                </span>{" "}
                                {cart.length}
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-xl tracking-wider py-3">
                                Total amount: $
                                {Math.round(totalAmount * 100) / 100}
                            </p>
                            <button
                                type="button"
                                className="w-full font-medium text-xl text-moderateBlue bg-white border border-moderateBlue rounded-md hover:text-white hover:bg-moderateBlue transition-colors duration-300 px-4 py-1.5"
                            >
                                Checkout now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-y-3 py-36">
                    <p className="text-xl text-center tracking-wider">
                        Your cart is empty!
                    </p>
                    <Link
                        to="/"
                        className="text-lg text-moderateBlue tracking-wider border border-moderateBlue rounded-md hover:text-white hover:bg-moderateBlue transition-colors duration-300 px-4 py-1.5"
                    >
                        Shop now
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
