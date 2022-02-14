// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_router.asp ////////////////

// React router ----------------------------------------------------------------

// Create React App doesn't include page routing. (by default it does not
// include routing). React Router is the most popular solution.

// To add React Router in your application, run this in the terminal from the
// root directory of the application: (will add latest version, changes if
// if you are upgrading from another version)

// npm i -D react-router-dom

// Folder structure:

// Within the src folder, we'll create a folder named pages with several files:

// src\pages\:

// Layout.js
// Home.js
// Blogs.js
// Contact.js
// NoPage.js

// Each file will contain a very basic React component.

// Basic usage:

// Example (we use Router on index.js to route to pages based on URL):
// inside index.js :

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// Example explained:

// We wrap our content first with <BrowserRouter>.

// Then we define our <Routes>. An application can have multiple <Routes>.
// Our basic example only uses one.

// <Route>s can be nested. The first <Route> has a path of / and renders the
// Layout component.

// The nested <Route>s inherit and add to the parent route. So the blogs path is
// combined with the parent and becomes /blogs.

// The Home component route does not have a path but has an index attribute. That
// specifies this route as the default route for the parent route, which is /.

// Setting the path to * will act as a catch-all for any undefined URLs. This is
// great for a 404 error page.

// Pages/Components:

// The Layout component has < Outlet > and < Link > elements.
// The < Outlet > renders the current route selected.
// < Link > is used to set the URL and keep track of browsing history.
// Anytime we link to an internal path, we will use < Link > instead of
// < a href = "" >.
// The "layout route" is a shared component that inserts common content on all
// pages, such as a navigation menu.

// Example (Layout.js):

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

// Example (Home.js):

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;

// Example (Blogs.js):

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;

// Example (Contact.js):

const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;

// Example (NoPage.js):

const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;
