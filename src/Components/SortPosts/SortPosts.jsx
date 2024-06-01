import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function SortPosts({ setSelectedTaxonomy }) {
    const [count , setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get('https://pixldesigners.com/backend/wp-json/custom/v1/post-count');
                setCount(response.data.post_count);
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
      }
      
    return (
        <>
            <Helmet>
                <title>Pixl Portfolio</title>
            </Helmet>
            <div className="container text-center mt-3">
                <div className="row">
                    <h3 className="fw-bold mb-4">Our Portfolio</h3>
                    <div className="container">
                        <p className='fw-medium'>Total Sites Listed : {count}</p>
                    </div>
                    <div className="box fade-in one">
                        <Link to={'/cities'}><button className="btn btn-light-orange w-100 p-3 my-1" onClick={() => setSelectedTaxonomy('cities')}>Sort by City</button></Link>
                    </div>
                    <div className="box fade-in two mt-2">
                        <Link to={'/states'}><button className="btn btn-light-violet w-100 p-3 my-1" onClick={() => setSelectedTaxonomy('states')}>Sort by State</button></Link>
                    </div>
                    <div className="box fade-in three mt-2">
                        <Link to={'/technology'}><button className="btn btn-light-green w-100 p-3 my-1" onClick={() => setSelectedTaxonomy('Technology')}>Sort by Technology</button></Link>
                    </div>
                    <div className="box fade-in four mt-2">
                        <Link to={'/categories'}><button className="btn btn-tik-violet w-100 p-3 my-1" onClick={() => setSelectedTaxonomy('categories')}>Sort by Category</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortPosts;