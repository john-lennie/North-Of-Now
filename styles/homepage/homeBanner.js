import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.slide-container {
   background: #000;
   overflow: hidden;
}
.slide {
  position: fixed;
  display: none;
  height: calc(100vh - 300px);
  width: 100%;
  margin: 150px 0;
  cursor: pointer;
}
.slide img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
#slide-tooltip {
  font-size: 4vw;
  margin-top: -7vw;
  width: fit-content;
  transform: translateX(-50%);
  text-transform: uppercase;
  position: fixed;
  font-weight: 700;
  z-index: 1000;
  mix-blend-mode: difference;
  color: #fff;
}
.homepage .site-header {
    background: none;
    position: fixed;
    top: 0px;
    width: 100%;
}
.homepage .site-header a {
  color: #fff;
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
  #slide-tooltip {
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 12px;
    transform: translateX(0px);
    text-transform: uppercase;
    z-index: 1000;
  }
  .slide {
    height: -webkit-fill-available;
    margin: 100px 0 150px;
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
