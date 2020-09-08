import css from 'styled-jsx/css'

export const longFormSingleStyles = css.global`
.poster img {
  max-width: 100%;
  max-height: 100vh;
  box-shadow: 0px 4px 10px #00000091;
}
.infoLeft p:last-child {
  margin-bottom: 0;
}
.articles {
  background: #ed0608;
  padding: 20px;
  color: #fff;
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: transform .6s ease-in-out;
}
.carousel-item img {
  max-width: 100%;
}
.carousel-item-next, .carousel-item-prev, .carousel-item.active {
    display: block;
}
@media (min-width: 768px) {
  .infoLeft {
    margin-top: 80px;
    width: 60%;
    min-height: calc(100vh - 160px);
  }
  .poster {
    position: fixed;
    top: 79px;;
    right: 0;
    z-index: 1;
    width: 40%;
    height: calc(100vh - 79px);
    border-left: 1px solid #8989893d;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .poster img {
    max-width: calc(40vw - 40px);
    max-height: calc(100vh - 200px);
  }
  }
  footer {
    width: calc(60% - 41px);
  }
}
`
