import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import DOMPurify from 'dompurify';

const servicesNames = [
    { divclass: 'box fade-in', buttonclass: 'btn-light-orange text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-light-violet text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-light-green text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-tik-violet text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-light-orange1 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-light-yellow text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-1 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-2 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-3 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-4 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-5 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-6 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-7 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-8 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-9 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-10 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-11 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-12 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-13 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-14 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-15 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-16 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-17 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-18 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-19 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-20 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-21 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-22 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-23 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-24 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-25 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-26 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-27 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-28 text-dark' },
    { divclass: 'box fade-in mt-2', buttonclass: 'btn-29 text-dark' },
];


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function TaxonomyList({ taxonomy, setIsLoading,setSlug }) {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [shuffledClasses, setShuffledClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterInput, setFilterInput] = useState('');


  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setIsLoading(true);
      let allTerms = [];
      let page = 1;
      try {
        while (true) {
          const res = await axios.get(`https://pixldesigners.com/backend/wp-json/wp/v2/${taxonomy}?page=${page}`);
          allTerms = [...allTerms, ...res.data];
          if (page >= res.headers['x-wp-totalpages']) break;
          page++;
        }
        setTerms(allTerms);
        setFilteredTerms(allTerms);
        setTotalPages(Math.ceil(allTerms.length / 10)); // assuming 10 items per page
        setShuffledClasses(shuffleArray([...servicesNames]));
        setLoading(false);
        setIsLoading(false);
      } catch (error) {
        setLoading(false);
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [taxonomy, setIsLoading]);

  useEffect(() => {
    setFilteredTerms(
      terms.filter(term =>
        term.name.toLowerCase().startsWith(filterInput.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [filterInput, terms]);

  if (loading) {
    return <Loader />;
  }


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderPagination = () => {
    const pagesToShow = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pagesToShow;
  };

   const handleClick = (term)=>{

setSlug(term.name)
   }

  const termsToShow = filteredTerms.slice((currentPage - 1) * 10, currentPage * 10);

  let title;
  let content;
  switch (taxonomy) {
    case 'cities':
      title = 'City';
      content = <p>We've worked with clients in nearly all major cities. Select a city to see our projects there.</p>;
      break;
    case 'states':
      title = 'State';
      content = <p>We've worked with clients in nearly all major states. Select a state to see our projects there.</p>;
      break;
    case 'categories':
      title = 'Category';
      content = <p>We've worked with clients across all industries. Select an industry to see our projects there.</p>;
      break;
    case 'Technology':
      title = 'Technology';
      content = <p>We've worked with clients on various technologies. Select a technology to see our projects there.</p>;
      break;
    default:
      title = '';
  }

  const capitalized = taxonomy
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return (
    <>
      <Helmet>
        <title>{capitalized}</title>
      </Helmet>
      <div className="container mt-3 text-center">
        <div className="row">
          <nav style={{
            '--bs-breadcrumb-divider': 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="%236c757d"/%3E%3C/svg%3E\')',
            'ariaLabel': 'breadcrumb'
          }}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={'/'} style={{ textDecoration: 'none' }} className='text-dark'>Home</Link></li>
              <li className="breadcrumb-item text-capitalize active text-danger" aria-current="page">{taxonomy}</li>
            </ol>
          </nav>
          <div className="container mb-3">
            <input
              type="text"
              className="form-control text-center text-dark"
              placeholder="Search"
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
            />
          </div>
          {
            termsToShow.length > 0 && (
              <>
                <h3 className="fw-bold mb-3">Select a {title}</h3>
                <div className="container">
                  <h6>{content}</h6>
                </div>
              </>
            )
          }
          {
            termsToShow.length === 0 ?
              <div className="container pb-8 pt-5 mt-5">
                <h1 className="text-center">No Data Found</h1>
                <p className="text-center">We couldn't find any data matching your criteria. Please try again with different search terms.</p>
              </div> : (
                termsToShow.map((term, index) => {
                  const sanitizedName = DOMPurify.sanitize(term.name).replace(/&amp;/g, '&');
                  return (
                    <div key={term.id} className={`${shuffledClasses[index % shuffledClasses.length].divclass}`} style={{ animationDelay: `${index === 0 ? 0 : index * 0.7}s`, animationDuration: `${index === 0 ? 1 : 0.3}s` }}>
                     <Link to={`/${taxonomy}/${term.id}`}> <button className={`btn w-100 p-3 my-1 ${shuffledClasses[index % shuffledClasses.length].buttonclass}`} onClick={()=>handleClick(term) } style={{ textTransform: 'capitalize', transition: 'background-color 0.3s', transitionDelay: `${index * 0.3}s` }}>
                        {sanitizedName}
                      </button></Link>
                    </div>
                  )
                })
              )
          }
        </div>
        {/* Pagination */}
        {
          termsToShow.length > 0 && (
            <div className="row mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                  </li>
                  {renderPagination()}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          )
        }
      </div>
    </>
  );
}

export default TaxonomyList;