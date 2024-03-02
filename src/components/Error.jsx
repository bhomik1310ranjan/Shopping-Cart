function Error({ error = "Something went wrong" }) {
    return <div className="text-2xl text-center py-20">{error} 😟</div>;
}

export default Error;
