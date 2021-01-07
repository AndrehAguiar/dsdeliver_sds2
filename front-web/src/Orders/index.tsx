import './styles.css';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepHeader from './StepsHeader';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;