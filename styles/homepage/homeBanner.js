import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.carousel-item {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;
  height: -webkit-fill-available;
  opacity: 0;
  transition: all 1s ease-in-out;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.carousel-caption {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
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
.site-header {
  border-bottom: none !important;
}
footer {
  display: none !important;
}
@media (min-width: 415px) {
  .carousel-item img {
    object-fit: cover;
  }
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
    display: inline-block;
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
