import css from 'styled-jsx/css'

export const footerStyles = css.global`
footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}
.footer-left .logo {
  height: 19px;
}
.footer-right {
  text-align: right;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  footer {
    padding: 30px;
  }
}
`
