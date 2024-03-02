import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
