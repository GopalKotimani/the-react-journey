import React, { useEffect, useState } from 'react'
import "./styles.css"

const SearchBar = () => {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");
    const [show, setShow] = useState(false);

    const fetchData = async () => {
        console.log("API call", input);
        const dataJson = await fetch('https://dummyjson.com/products/search?q=' + input);
        const data = await dataJson.json();
        setResults(data?.products);

    }

    useEffect(() => {

        const timer = setTimeout(fetchData, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [input]);

    return (
        <>
            <div className='main'>
                <div className='search'>SearchBar</div>

                <div>
                    <input className='searchbar'
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setShow(true)}
                        onBlur={() => setShow(false)}
                    />
                    <div className='results'>
                        {show && (results?.length === 0 ? "No results found" : results.map((r) =>
                            <span
                                className='search-result'
                                key={r.id}>
                                {r.title}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar