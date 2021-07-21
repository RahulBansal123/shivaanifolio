import './App.css';
import React, { Suspense } from 'react';
import Logo from './assests/logo.png';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Newsletter from './Components/Newletter/Newsletter';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Audit from './Components/Audit/Audit';
import Spinner from './Components/Spinner/Spinner';
import { Route, HashRouter } from 'react-router-dom';
import Icons from './Components/Icons/Icons';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-154017579-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const Blog = React.lazy(() => import('./Components/SeperateBlogs/Blog'));
  const ContactUs = React.lazy(() => import('./Components/ContactUs/Contact'));
  const BlogPage = React.lazy(() => import('./Components/BlogsPage/Blogs'));
  const Privacy = React.lazy(() =>
    import('./Components/PrivacyandTerms/Privacy')
  );
  const Terms = React.lazy(() => import('./Components/PrivacyandTerms/Terms'));

  return (
    <div className="App">
      <Helmet>
        <link rel="icon" href={Logo} type="image/x-icon" />
        <link rel="shortcuticon" href={Logo} type="image/x-icon" />
        <link rel="apple-touch-icon" href={Logo} type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href={Logo} />
        <meta name="msapplication-TileImage" content={Logo} />
      </Helmet>
      <div className="icons">
        <Icons />
      </div>

      <HashRouter basename="/shivaanifolio">
        {/* <Route path="/allen-solly-complete-case-study-2020/">
            <Redirect to="/blogs/5ffe01cf5464660017fbd936" />
          </Route> */}
        <Route exact path="/blogs/:blogId">
          <Suspense fallback={<Spinner />}>
            <Header />
            <Blog />
            <Footer />
          </Suspense>
        </Route>
        <Route exact path="/blogs">
          <Suspense fallback={<Spinner />}>
            <BlogPage />
            <Footer />
          </Suspense>
        </Route>
        <Route path="/contact">
          <Suspense fallback={<Spinner />}>
            <Header />
            <ContactUs />
            <Footer />
          </Suspense>
        </Route>
        <Route path="/privacy">
          <Suspense fallback={<Spinner />}>
            <Header />
            <Privacy />
            <Footer />
          </Suspense>
        </Route>
        <Route path="/terms">
          <Suspense fallback={<Spinner />}>
            <Header />
            <Terms />
            <Footer />
          </Suspense>
        </Route>
        <Route exact path="/">
          <Header />
          <MainPage />
          <Blogs />
          <Audit />
          <Services />
          <Newsletter />
          <Footer />
          {/* <Questions /> */}
        </Route>
      </HashRouter>
      {/* <Body />
      <Footer /> */}
    </div>
  );
}

export default App;
