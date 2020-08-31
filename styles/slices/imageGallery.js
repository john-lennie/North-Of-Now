import css from 'styled-jsx/css'

export const imageGalleryStyles = css.global`
.carousel {
  position: relative;
}
.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: -25px;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    list-style: none;
}
.carousel-indicators li {
    box-sizing: content-box;
    flex: 0 1 auto;
    flex-grow: 1;
    height: 2px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .1;
}
.carousel-indicators .active {
    opacity: 1;
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.carousel-item {
  position: relative;
  float: left;
  width: 100%;
  margin-right: -100%;
  opacity: 0;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-item img {
  object-fit: contain;
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
@media (min-width: 768px) and (max-width: 1023px) {

}
@media (min-width: 1024px) {
  .carousel-item {
    position: absolute;
    top: 0;
    height: 100vh;
  }
  .carousel-item img {
    height: 100%;
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
