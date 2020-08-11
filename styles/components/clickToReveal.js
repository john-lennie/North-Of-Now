import css from 'styled-jsx/css'

export const clickToRevealStyles = css.global`
  .ctr-title {
    cursor: pointer;
    margin-bottom: 20px;
    text-decoration: underline;
  }
  .ctr-desc.hidden {
    opacity: 0;
    top: -5px;
  }
  .ctr-desc {
    position: relative;
    top: 0;
    opacity: 1;
    transition: all 0.3s ease;
  }
`
