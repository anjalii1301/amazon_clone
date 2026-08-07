import { useMemo, useState } from 'react'
import data from '../../assets/MOCK_DATA (1).json'
import ProductCard from '../Product/Product';
import './productList.css'

const ProductList = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = useMemo(() => {
        const unique = new Set(data.map(p => p.category));
        return ['All', ...unique];
    }, [data]);

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') return data;
        return data.filter((p) => p.category === activeCategory);
    }, [activeCategory, data]);

    return (
        <div className='product_list'>
            <div className='category-bar'>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${activeCategory === cat ? "active" : ""
                            }`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {/* Products */}
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <p className="no-products">No products found</p>
                )}
            </div>
        </div>
    )
}

export default ProductList