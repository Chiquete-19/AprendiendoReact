import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const Carts = () => {

    const [products, setProducts] = useState([]);
    const findAll = async () => {
        const prods = await getProducts();
        setProducts(prods);
    }
    useEffect(() => {
        findAll();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} class="card m-3" style={{width: "18rem"}}>
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <h6 className="card-subtitle mb-2 text-body-secondary">${product.price}</h6>
                          <p className="card-text">{product.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </>
    );
}