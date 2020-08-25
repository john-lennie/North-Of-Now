import React from 'react'
import { footerStyles } from 'styles'

const Footer = () => (
  <footer>
    <div className="footer-left">
      <img className="logo" src="/logo-b.png" alt="North of Now"/><br/>
      North Of Now Films
    </div>
    <div className="footer-right">
      @northofnowfilms<br/>
      info@northofnow.com
    </div>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
