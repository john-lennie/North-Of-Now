import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { headerStyles } from 'styles'

const Header = ({ menu, logoColor }) => (
  <header id="head" className="site-header">
    <NextLink href="/">
      <a>
        <div className="logo">
          {logoColor === "white" ?
            <img src="/logo-w.png" alt="North of Now"/>
          : <img src="/logo-b.png" alt="North of Now"/>
          }
        </div>
      </a>
    </NextLink>
    <MenuLinks menu={menu} />
    <style jsx global>{ headerStyles }</style>
  </header>
)

const MenuLinks = ({ menu }) => {
  if (menu) {
    return (
      <nav>
        <ul>
          {menu.data.menu_links.map((menuLink, index) => (
            <MenuLink
              menuLink={menuLink}
              key={`menulink-${index}`}
            />
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

const MenuLink = ({ menuLink }) => (
  <li>
    <DocLink linkClass={RichText.asText(menuLink.label)} link={menuLink.link}>
      {RichText.asText(menuLink.label)}
    </DocLink>
  </li>
)

export default Header
