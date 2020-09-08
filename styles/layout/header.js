import css from 'styled-jsx/css'

export const headerStyles = css.global`
.site-header {
  position: relative;
  z-index: 1;
  height: 55px;
  background: #fff;
  border-bottom: 1px solid #8989893d;
}
.homepage .site-header {
  background: none;
}
.homepage .site-header a {
  color: #000;
}
.short-form-page .site-header a {
  color: #fff;
}
.logo-w {
  display: none;
}
.short-form-page .logo-b {
  display: none;
}
.short-form-page .logo-w {
  display: block;
}
.short-form-page .site-header {
  background: none;
}
.site-header .logo {
  height: 55px;
}
.site-header .logo img {
  height: 19px;
  margin: 30px;
}

.site-header a {
  color: #000;
  font-weight: 600;
  font-size: 14px;
  line-height: 79px;
}
.site-header a {
  display: inline-block;
}
.site-header nav a:hover {
  color: #72767B;
}
.homepage .site-header nav a:hover {
  color: #c8c9cb;
}
.site-header nav {
  display: inline-block;
  vertical-align: top;
}
.site-header nav ul {
  margin: 0;
}
.site-header nav li {
  display: inline-block;
  margin-right: 10px;
}
@media (min-width: 768px) {
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 79px;
    background: #fff;
  }
  .homepage .logo-w {
    display: block;
  }
  .homepage .logo-b {
    display: none;
  }
  .homepage .site-header a {
    color: #fff;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {

}
@media (min-width: 1024px) {
}
`
