import PropTypes from 'prop-types';
import NavigationMenu from './Components/NavigationMenu';

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import BlogPage from './Components/Pages/BlogPage';
import FullStackDevelopment from './Components/Pages/FullStackDevelopment';
import DataScience from './Components/Pages/Datascience';
import CyberSecurity from './Components/Pages/Cybersecurity';
import Careers from './Components/Pages/Career';
import CourseDetail from './Components/Pages/CourseDetail';
import '../src/App.css';

const PageNotFound = ({ autoRedirect }) => {

  if (autoRedirect) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <>
      <h1>No Page Found</h1>
      <Link to="/">Go to Home</Link>
    </>
  );
};

PageNotFound.propTypes = {
  autoRedirect: PropTypes.bool.isRequired,
};

function App() {

  return (

    <div className="App">

      <BrowserRouter basename='/'>
        <Header />
        <NavigationMenu />
        <Routes>
          <Route path='/' element={<BlogPage />} />
          <Route path='/blog'>
            <Route index element={<BlogPage />} />
            <Route path='full-stack-development' element={<FullStackDevelopment />} />
            <Route path='data-science' element={<DataScience />} />
            <Route path='cyber-security' element={<CyberSecurity />} />
            <Route path='careers' element={<Careers />} />
            {/* <Route path=":courseName" element={<FullStackDevelopment />} /> This has reduced the number of pages to single page. Load data from params.*/}
            <Route path=":courseTitle" element={<CourseDetail />} relative="path" />
            <Route path="*" element={<PageNotFound autoRedirect={false} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

