import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
     <div className="container"> 
     
     {/* NAVBAR */}
      <nav className="nav"> 
        <div className="logo">
          <img src="" alt="logo" />
          <strong>antools.</strong>
        </div>
        <ul>                                  
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/'} >Categories</Link></li>
          <li><Link to={'/'} >My Collections</Link></li>
          <li><Link to={'/'} >Blog</Link></li>
        </ul>
        <div className="btns">
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div> 
      </nav>
    
      {/* HEADER */}
      <header> 
        <div className="content">
          <h1>Awesome tools for Designer & Developer.</h1>
          <p>Antool is a web collection of information on paid or free Design and Development tools</p>
          <form >
            <input name="search" placeholder="find more than 430+ tools..." type="search" />
            <button type="submit" className="btn">Search</button>
          </form>
          <div className="social">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="header_bg">
          <img src="" alt="bg" />
        </div> 
      </header>

      {/* POPULAR TOOLS */}
      <div className="tools">
        <h2>Most Popular Tools</h2>
        <p>Tools for the best Designers and Developers most popularly used in the world</p>
        <div className="tools_box">
          <div className="tools_item">
           <div className="title">
            <h3>FIGMA</h3>
            <span>Free</span>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <div className="icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <span>Visit</span>
           </div>
          </div>
        </div>
        <button>Load more</button>
      </div>

      {/* BRANDS */}
      <div className="brands">
        <h3>Trusted more than 150+ brand</h3>
        <div className="brands_box">
          <div className="brands_item">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      {/* NEW TOOLS */}
      <div className="newtools">
        <div className="newtools_text">
          <h2>Newcomer Tools</h2>
          <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
          <button className="btn">Explore more</button>
        </div>
        <div className="newtools_box">
          <div className="newtools_item">
            <div className="title">
              <h3>FIGMA</h3>
              <span>Free</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="icons">
              <img src="" alt="" />
              <img src="" alt="" />
              <span>Visit</span>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="slider">
        <div className="slider_inner">
          <div className="slider_item">
            <img src="" alt="" />
            <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
          </div>
        </div>
        <button></button>
        <button></button>
        <div className="points">
          <div className="point"></div>
          <div className="point"></div>
          <div className="point"></div>
        </div>
      </div>

      {/* JOIN */}
      <div className="join">
        <h2>Become a contributor?</h2>
        <p>Join us and get tips & tricks to become a great Designer and Developer</p>
        <form >
            <input name="gmail" placeholder="Enter your email..." type="gmail" />
            <button type="submit" className="btn">Join Us</button>
        </form>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer_item">
          <div className="logo">
            <img src="" alt="logo" />
            <strong>antools.</strong>
          </div>
          <h4>Copyright 2021. Antools</h4>
          <p>Antool is a web collection of information on paid or free Design and Development tools</p>
        </div>
        <div className="footer_item">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:+621987463">+621987463</a>
            </li>
            <li>
              <a href="http://maps.google.com/?q=Memorial Dr, Cambridge, MA 02139, Соединенные Штаты">M Building, No.10 A</a>
            </li>
            <li>
              <a href="mailto:antools@awesome.com">antools@awesome.com</a>
            </li>
          </ul>          
        </div>
        <div className="footer_item">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link>Design</Link>
            </li>
            <li>
              <Link>Development</Link>
            </li>
          </ul>
        </div>
        <div className="footer_item">
          <h3>Company Info</h3>
          <ul>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Our Partners</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
      </footer>

      </div>
    </div>
  );
}

export default App;
