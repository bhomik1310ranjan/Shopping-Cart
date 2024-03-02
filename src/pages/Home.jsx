import getData from "../hooks/getData.js";
import ProductCard from "../components/ProductCard.jsx";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";

function Home() {
    const url = "https://fakestoreapi.com/products";
    const [data, loading, error] = getData(url);

    return (
        <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto py-6">
            {loading ? (
                <Loader />
            ) : error ? (
                <Error error={error} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {data?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
