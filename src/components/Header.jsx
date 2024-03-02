import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";

function Header() {
    const cart = useSelector((state) => state.cart);

    return (
        <div className="w-full bg-lightGrayishBlue py-5">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-end gap-x-2">
                    <BsShop className="text-4xl text-moderateBlue" />
                    <p className="font-semibold text-2xl tracking-widest">
                        Quick<span className="text-moderateBlue">Mart</span>
                    </p>
                </Link>
                <Link to="/cart" className="relative">
                    <FaCartShopping className="text-3xl" />
                    {cart.length > 0 && (
                        <div className="w-5 aspect-square flex justify-center items-center absolute -right-1 -top-2 bg-moderateBlue rounded-full animate-bounce">
                            <span className="text-xs text-white">
                                {cart.length}
                            </span>
                        </div>
                    )}
                </Link>
            </div>
        </div>
    );
}

export default Header;
