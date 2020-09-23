import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.homepage .site-header {
    background: none;
    position: fixed;
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
  position: fixed;
  width: 100%;
  z-index: 1;
  transform: translateY(100vh);
  backface-visibility: hidden;
  background: #0000;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 59px 20px 80px;
  box-sizing: border-box;
  height: -webkit-fill-available;
}
.carousel-item a {
  overflow: hidden;
}
.carousel-item.active {
  opacity: 1;
  transition: .5s ease-in;
  transform: translateY(0);
  background: #000;
}
.carousel-item img {
  height: 100%;
  width: 100%;
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
