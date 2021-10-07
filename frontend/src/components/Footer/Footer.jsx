import React from 'react';
import  './Footer.module.css';

export default function Footer() {
    return (
        <>

<footer>
    <div className="content">
      <div className="top">
        <div className="main-logo">
          <a href="/"><span>A</span>rcadian</a>
        </div>
        <div className="media-icons">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-linkedin-in"></i></a>
          <a href="/"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <hr/> <a href="/"><span>A</span>rcadian</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="/">Privacy policy</a>
          <hr/>
          <a href="/">Terms & condition</a>
        </span>
      </div>
    </div>
    </div>
  </footer>

        </>
    )
}
