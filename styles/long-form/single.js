import css from 'styled-jsx/css'

export const longFormSingleStyles = css.global`
.longform-page {
  background: #000;
}
.longform-page .site-header a, .infoLeft {
  color: #fff;
}
.poster img {
  max-width: 100%;
  max-height: 100vh;
}
.infoLeft p:last-child {
  margin-bottom: 0;
}
.articles {
  background: #000;
  padding: 20px;
  color: #fff;
}
.articles h2 {
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 300;
}
.articles p {
  font-style: italic;
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: -6px;
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
.watch-list li a {
  color: #fff;
}
.youtube-vids {
  background: #000;
}
.responsive-iframe {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
}
.responsive-iframe iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
.section-1 {
  border-bottom: 1px solid #2d2d2d;
  padding: 20px;
}

.watch-now-section {
  display: flex;
  padding: 20px;
}

.watch-list {
  margin-left: 20px;
}

.youtube-vids {
  padding: 20px;
}

.longform-page footer {
  color: #fff;
  border-top: 1px solid #2d2d2d;
}

@media (min-width: 415px) {
  .youtube-vids {
    display: grid;
    padding: 30px;
    grid-template-columns: repeat(auto-fill,minmax(500px,1fr));
    grid-gap: 30px;
    background: #000;
  }
}
@media (min-width: 768px) {
  .section-1 {
    padding: 0 30px 30px;
  }
  .articles {
    padding: 30px;
    font-size: 16px;
  }
  .youtube-vids {
    grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
  }
  .infoLeft {
    width: 60%;
    min-height: calc(100vh - 79px);
    font-size: 16px;
  }
  .type {
    font-style: italic;
    color: #999;
    font-size: 12px;
  }
  .poster {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 40%;
    height: 100vh;
    background: #000;
    border-left: 1px solid #2d2d2d;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .poster img {
    max-width: calc(100% - 50px);
    max-height: calc(100% - 50px);
  }
  .watch-now-section {
    padding: 30px;
    font-size: 30px;
  }
  footer {
    width: 60%;
  }
}
`
