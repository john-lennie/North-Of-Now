import css from 'styled-jsx/css'

export const clickToRevealStyles = css.global`
  .ctr-title {
    cursor: pointer;
    text-decoration: underline;
  }
  .ctr-desc.hidden {
    opacity: 0;
    top: -10px;
    height: 0;
  }
  .ctr-desc {
    position: relative;
    top: 0;
    height: auto;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
`
