import { useEffect, useState } from "react";
import axios from "axios";

function getData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setError(null);
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return [data, loading, error];
}

export default getData;
