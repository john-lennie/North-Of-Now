import css from 'styled-jsx/css'

export const clickToRevealStyles = css.global`
  .ctr-title {
    cursor: pointer;
    position: relative;
    z-index: 2;
    text-decoration: underline;
  }
  .ctr-desc.hidden {
    opacity: 0;
    top: -10px;
    z-index: 1;
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
