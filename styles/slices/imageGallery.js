import css from 'styled-jsx/css'

export const imageGalleryStyles = css.global`
.carousel-item {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  opacity: 0;
  transition: all 1s ease-in-out;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-item img {
  height: calc(91vh - 55px);
  margin-top: 55px;
  width: 100%;
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
