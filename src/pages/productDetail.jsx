import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setNotFound(false);
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setNotFound(true);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (notFound) return <p>Product not found</p>;

    return (
        <div>
            <h1>PRODUCT DETAIL</h1>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.name} />
                </div>
            ) : (
                <p>No product details available</p>
            )}
        </div>
    );
}

export default ProductDetail;
