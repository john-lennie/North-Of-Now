import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.carousel-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);
  opacity: 0;
  transition: opacity .5s ease-in-out;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-item img {
  height: 91%;
  width: 100%;
  object-fit: cover;
}
.carousel-caption {
  flex-grow: 2;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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
  }
  .carousel-caption {
    position: absolute;
    padding: 20px;
    bottom: 0;
    color: #fff;
    text-align: left;
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
