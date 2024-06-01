import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import SortPosts from './Components/SortPosts/SortPosts'
import TaxonomyList from './Components/SortPosts/TaxonomyList'
import Footer from './Components/Footer/Footer'
import { Helmet } from 'react-helmet'
import NotFound from './Components/NotFound/NotFound';
import PostsList from './Components/SortPosts/PostsList'

const App = () => {
  const [selectedTaxonomy, setSelectedTaxonomy] = useState(
    localStorage.getItem('selectedTaxonomy') || null
  );

  const [selectedSlug, setSelectedSlug] = useState(
    localStorage.getItem('selectedSlug') || null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedTaxonomy', selectedTaxonomy);
  }, [selectedTaxonomy]);

  useEffect(() => {
    localStorage.setItem('selectedSlug', selectedSlug);
  }, [selectedSlug]);

  
  return (
    <>
      <Helmet>
        <title>Pixl Portfolio</title>
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<SortPosts setSelectedTaxonomy={setSelectedTaxonomy} />} />
          <Route exact path='/states' element={<TaxonomyList taxonomy={selectedTaxonomy} setIsLoading={setIsLoading} setSlug={setSelectedSlug} />} />
          <Route exact path='/cities' element={<TaxonomyList taxonomy={selectedTaxonomy} setIsLoading={setIsLoading}  setSlug={setSelectedSlug} />} />
          <Route exact path='/categories' element={<TaxonomyList taxonomy={selectedTaxonomy} setIsLoading={setIsLoading}  setSlug={setSelectedSlug} />} />
          <Route exact path='/technology' element={<TaxonomyList taxonomy={selectedTaxonomy} setIsLoading={setIsLoading}  setSlug={setSelectedSlug} />} />
          <Route exact path='/:taxonomy/:termId' element={<PostsList setIsLoading={setIsLoading} slug={selectedSlug}/>} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
        {!isLoading && <Footer />}
      </Router>
    </>
  );
}

export default App;







