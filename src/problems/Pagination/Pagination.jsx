import React, { useEffect, useState } from 'react'
import "./styles.css"

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const PAGE_SIZE = 10;
    //Call the api for prodects 
    const fetchData = async () => {
        const jsonData = await fetch("https://dummyjson.com/products?limit=500");
        const res = await jsonData.json();
        console.log(res);
        setProducts(res.products);
    }

    useEffect(() => {
        fetchData();
    }, []);
    const handlePageSize = (n) => {
        setCurrentPage(n);
    }
    const handlePrevPage = () => {
        setCurrentPage(prev=> prev-1);
    }
    const handleNextPage = () => {
        setCurrentPage(prev=> prev+1);
    }

    const totalProduct = products.length;
    const noOfPages = Math.ceil(totalProduct / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const ProductCard = ({ image, title }) => {
        return (
            <div className='product-card'>
                <img className="product-img" src={image} alt={title} />
                <span>{title}</span>
            </div>
        )
    }

    return (!products.length ? "No Products found" :
        (
            <div>
                <div>
                    <h1 className='heading'>
                        Pagination Project
                    </h1>
                </div>

                <div className='page-number-container'>
                    <button disabled={currentPage === 0} className='page-number' onClick={()=> handlePrevPage()}>Prev</button>
                    {[...Array(noOfPages).keys()].map((n) => (
                        <button className={'page-number '+ (n === currentPage ? 'active' : "")} onClick={() => handlePageSize(n)} key={n}>{n}</button>
                    ))}
                    <button disabled={currentPage === noOfPages-1} className='page-number' onClick={() => handleNextPage()}>Next</button>
                </div>

                <div className='product-container'>
                    {
                        products.slice(start, end).map((p) => (
                            <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
                        ))
                    }
                </div>
            </div>
        )
    )
}

export default Pagination