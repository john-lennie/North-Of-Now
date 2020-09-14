import css from 'styled-jsx/css'

export const imageGalleryStyles = css.global`
.carousel {
  position: relative;
  background: #fff;
}
.carousel-indicators {
  position: fixed;
  bottom: 15px;
  left: 25px;
  mix-blend-mode: difference;
  color: #fff;
  background: #6b666600;
  font-size: 13px;
  font-weight: 300;
  z-index: 15;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 0;
  counter-reset: item;
  list-style-type: none;
}
.carousel-indicators li {
  padding: 15px 5px;
  cursor: pointer;
  transition: opacity 0.5s ease;
}
.carousel-indicators li:hover {
  text-decoration: underline;
}
.carousel-indicators li:before {
  content: counter(item) "  ";
  counter-increment: item
}
.carousel-indicators .active {
    text-decoration: underline;
}
.carousel-inner {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.carousel-item {
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  margin-right: -100%;
  opacity: 0;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-item img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
.carousel-caption {
  flex-grow: 2;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background: #fff;
}
.carousel-caption h3 {
  font-size: 18px;
  line-height: 1em;
  margin-bottom: 5px;
}
.carousel-caption p {
  font-size: 12px;
  line-height: 1em;
  margin-bottom: 5px;
}
.carousel-control-prev {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}
.carousel-control-next {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.close {
  position: fixed;
  z-index: 2;
  right: 30px;
  top: 30px;
  text-transform: uppercase;
  font-size: 13px;
  color: #000;
}
@media (min-width: 768px) and (max-width: 1023px) {

}
@media (min-width: 1024px) {
  .carousel {
    height: 100vh;
  }
  .carousel-inner {
    height: 100%;
}
  .carousel-item {
    position: absolute;
    top: 0;
    height: 100%;
  }
  .carousel-item img {
    height: 100%;
    width: 100%;
    margin-top: 0px;
  }
  .carousel-caption {
    position: absolute;
    padding: 20px;
    bottom: 0;
    color: #fff;
    text-align: left;
    background: none;
  }
  .carousel-caption h3 {
    font-size: 34px;
    line-height: 1.4em;
  }
  .carousel-caption p {
    font-size: 20px;]
  }
}
`
