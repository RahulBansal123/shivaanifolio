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
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Icons from './Components/Icons/Icons';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize("Can't Show");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const Blog = React.lazy(() => import('./Components/SeperateBlogs/Blog'));
  const ContactUs = React.lazy(() => import('./Components/ContactUs/Contact'));
  const BlogPage = React.lazy(() => import('./Components/BlogsPage/Blogs'));

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
      <BrowserRouter>
        <Switch>
          <Route path="/allen-solly-complete-case-study-2020/">
            <Redirect to="/blogs/5fe20dac844a010017e93e80" />
          </Route>
          <Route path="/blogs/:blogId">
            <Suspense fallback={<Spinner />}>
              <Header />
              <Blog />
              <Newsletter white />
              <Footer />
            </Suspense>
          </Route>
          <Route path="/blogs">
            <Suspense fallback={<Spinner />}>
              <BlogPage />
              <Newsletter white />
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
        </Switch>
      </BrowserRouter>
      {/* <Body />
      <Footer /> */}
    </div>
  );
}

export default App;
