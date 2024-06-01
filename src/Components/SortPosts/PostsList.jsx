// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link, useParams } from 'react-router-dom';
// import Loader from '../Loader/Loader';

// const servicesNames = [
//     { divclass: 'box fade-in', buttonclass: 'btn btn-light-orange w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-light-violet w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-light-green w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-19 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-light-orange1 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-light-yellow w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-1 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-2 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-3 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-4 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-5 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-6 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-7 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-8 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-9 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-10 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-11 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-12 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-13 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-14 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-15 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-16 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-17 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-18 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-20 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-21 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-22 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-23 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-24 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-25 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-26 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-27 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-28 w-100 p-3 my-1 text-dark' },
//     { divclass: 'box fade-in', buttonclass: 'btn btn-29 w-100 p-3 my-1 text-dark' },
// ];


// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function PostsList({ setIsLoading,slug }) {
//   const { taxonomy, termId, } = useParams();
//   const [posts, setPosts] = useState([]);
//   const [shuffledClasses, setShuffledClasses] = useState([]);
//   const [loading, setLoading] = useState(true);
  

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`https://pixldesigners.com/backend/wp-json/wp/v2/posts?${taxonomy}=${termId}`);
//         setPosts(response.data);
//         setLoading(false);
//         setIsLoading(false);
//         setShuffledClasses(shuffleArray([...servicesNames]));
//       } catch (error) {
//         setLoading(false);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [taxonomy, termId, setIsLoading]);

//   if (loading) {
//     return <Loader />
//   }

//   const handleTitleClick = (url) => {
//     if (!/^https?:\/\//i.test(url)) {
//       url = 'http://' + url;
//     }
//     window.location.href = url;
//   };

//   return (
//     <>
//       <Helmet>
//         <title>{slug}</title>
//       </Helmet>
//       <div className="container mt-3 text-center">
//         <div className="row">
//           <nav style={{
//             '--bs-breadcrumb-divider': 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="%236c757d"/%3E%3C/svg%3E\')',
//             'ariaLabel': 'breadcrumb'
//           }}>
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><Link to={'/'} className='text-dark' style={{ textDecoration: 'none' }}>Home</Link></li>
//               <li className="breadcrumb-item text-capitalize"><Link to={`/${taxonomy}`} className='text-dark' style={{ textDecoration: 'none' }}>{taxonomy}</Link></li>
//               <li className="breadcrumb-item active text-danger" aria-current="page">Websites</li>
//             </ol>
//           </nav>
//           {posts.length > 0 ? (
//             <div>
//               {posts.map((post, index) => (
//                 <div key={post.id} className={shuffledClasses[index % shuffledClasses.length].divclass} style={{ animationDelay: `${0 + (index * 0.7)}s` }}>
//                   <button onClick={() => handleTitleClick(post.title.rendered)} className={shuffledClasses[index % shuffledClasses.length].buttonclass}>
//                     {post.title.rendered}
//                   </button>
//                   <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No data available</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default PostsList;


// <div className='container'>

//   <div className='row'>

//     <div className='col-md-6'>dd</div>
//     <div className='col-md-6'>vs</div>

//   </div>
  
// </div>




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const servicesNames = [
    { divclass: 'box fade-in', buttonclass: 'btn btn-light-orange w-100 p-3 my-1 text-dark' },
    { divclass: 'box fade-in', buttonclass: 'btn btn-light-violet w-100 p-3 my-1 text-dark' },
    { divclass: 'box fade-in', buttonclass: 'btn btn-light-green w-100 p-3 my-1 text-dark' },
    // Add more if needed to match the possible number of posts
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function PostsList({ setIsLoading, slug }) {
  const { taxonomy, termId } = useParams();
  const [posts, setPosts] = useState([]);
  const [shuffledClasses, setShuffledClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setIsLoading(true);
      try {
        const response = await axios.get(`https://pixldesigners.com/backend/wp-json/wp/v2/posts?${taxonomy}=${termId}`);
        setPosts(response.data);
        setShuffledClasses(shuffleArray([...servicesNames])); // Shuffle the class names
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [taxonomy, termId, setIsLoading]);

  if (loading) {
    return <Loader />;
  }

  const handleTitleClick = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      url = 'http://' + url;
    }
    window.location.href = url;
  };

  return (
    <>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      <div className="container mt-3 text-center">
        <div className="row">
          <nav style={{
            '--bs-breadcrumb-divider': 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="%236c757d"/%3E%3C/svg%3E\')',
            'aria-label': 'breadcrumb'
          }}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={'/'} className='text-dark' style={{ textDecoration: 'none' }}>Home</Link></li>
              <li className="breadcrumb-item text-capitalize"><Link to={`/${taxonomy}`} className='text-dark' style={{ textDecoration: 'none' }}>{taxonomy}</Link></li>
              <li className="breadcrumb-item active text-danger" aria-current="page">Websites</li>
            </ol>
          </nav>
          {posts.length > 0 ? (
            <div>
              {posts.map((post, index) => {
                const classInfo = shuffledClasses[index % shuffledClasses.length];
                return classInfo ? (
                  <div key={post.id} className={classInfo.divclass} style={{ animationDelay: `${0 + (index * 0.7)}s` }}>
                    <button onClick={() => handleTitleClick(post.title.rendered)} className={classInfo.buttonclass}>
                      {post.title.rendered}
                    </button>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default PostsList;


