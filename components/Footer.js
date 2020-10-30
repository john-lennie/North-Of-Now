import React from 'react'
import { footerStyles } from 'styles'

const Footer = ({ logoColor }) => (
  <footer>
    <div className="footer-left">
      {logoColor === "white" ?
        <img className="logo" src="/logo-w.png" alt="North of Now"/>
      : <img className="logo" src="/logo-b.png" alt="North of Now"/>
      }<br/>
      North Of Now Productions
    </div>
    <div className="footer-right">
      <a href="https://www.instagram.com/northofnowfilms/" target="_blank">@northofnowfilms</a><br/>
      <a href="mailto:info@northofnow.com">info@northofnow.com</a>
    </div>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
