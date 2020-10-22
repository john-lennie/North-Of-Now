import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.slide-container {
   height: 10000px;
}
.slide {
  height: 100vh;
}
.slide {
  display: block;
  position: fixed;
  top: 0;
  background: #fff;
  height: 100vh;
  padding: 59px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
}
.slide img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.slide:hover .slide-tooltip {
    display: block;
}
.slide-tooltip {
  display: none;
  font-size: 3vw;
  margin-top: -4vw;
  text-transform: uppercase;
  position: fixed;
  font-weight: 300;
  z-index: 1000;
  mix-blend-mode: difference;
  color: #fff;
}
.scrolling {
  position: absolute;
  top: 100vh;
  z-index: 1;
  opacity: 1;
}
.homepage .site-header {
    background: none;
    position: fixed;
    width: 100%;
}
.carousel-inner {
  height: 100vh;
  background: #000;
}
.carousel-item {
  position: absolute;
  width: 100%;
  z-index: 1;
  background: #0000;
  opacity: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding: 59px 20px 80px;
  box-sizing: border-box;
  height: -webkit-fill-available;
}
.carousel-item a {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-item.active {
  opacity: 1;
  z-index: 2;
}
.carousel-item img {
  height: 100%;
  object-fit: contain;
}
.carousel-caption {
  position: fixed;
  bottom: 0;
  left: 0;
  color: #fff;
  width: 100%;
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.carousel-caption h3 {
  font-size: 18px;
  text-transform: uppercase;
  line-height: 1em;
  margin-bottom: 10px;
}
.carousel-caption p {
  line-height: 1em;
  margin-bottom: 5px;
}
.site-header {
  border-bottom: none !important;
}
footer {
  display: none !important;
}
@media (max-width: 768px) {
  .slide {
    background: #fff;
  }
  .slide-tooltip {
    display: block;
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    z-index: 1000;
  }
}
@media (min-width: 768px) {
  .carousel-inner {

  }
  .carousel-item {
    padding: 0;
    height: 100vh;
  }
  .carousel-item a {
    display: contents;
  }
  .carousel-item img {
    height: 100vh;
  }
  .carousel-caption {
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
    display: inline-block;
    bottom: 0;
    color: #fff;
    height: auto;
    text-align: left;
    background: none;
  }
  .carousel-caption h3 {
    font-size: 24px;
    line-height: 1.4em;
  }
}
@media (min-width: 1024px) {
  .carousel-item img {
    margin-top: 0px;
  }

}
`
