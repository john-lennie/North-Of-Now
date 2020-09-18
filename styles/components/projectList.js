import css from 'styled-jsx/css'

export const projectListStyles = css.global`
.filterBy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 35px;
  text-transform: uppercase;
}
.filterBy .grey {
  margin-right: 10px;
}
.filterByType, .filterByDate {
  margin-left: 20px;
}
.project-thumbs-container {
  padding: 0 20px;
}
.short-form-project-thumbs, .long-form-project-thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
}
.project-thumb {
}
.project-thumb .meta {
  font-size: 11px;
  box-sizing: border-box;
}
.meta h2.title {
  margin-bottom: 2px;
  font-size: 13px;
  font-weight: 300;
}
.meta p {
  margin-bottom: 0px;
}
.meta .grey {
  margin-right: 5px;
}
.project-img {
  margin-bottom: 10px;
}
.project-img a {
  display: inline-block;
}
.project-img a img {
  object-fit: cover;
  width: 100%;
  height: 250px;
  border-radius: 2px;
  float: right;
}
.long-form-project-thumbs .project-thumb {
  display: flex;
  flex-direction: row-reverse;
}
.long-form-project-thumbs .project-img, .long-form-project-thumbs .meta {
  width: 50%;
}
.long-form-project-thumbs .project-img a img {
  height: auto;
}
.project-img iframe {
  width: 100%;
}
.project-video {
  width: 50%;
}
#short-form-project {
  position: relative;
  color: #fff;
  display: inline-block;
  transition: opacity 0.7s ease-in-out;
}
#short-form-project .meta p {
  margin-bottom: 20px;
}
#short-form-project .meta p.title {
    font-size: 24px;
    line-height: 1.4em;
}

@media (min-width: 768px) {
  #short-form-project .description {
    width: 33%
  }
  #short-form-project .meta, #short-form-project .video {
    margin-bottom: 0px;
  }
  #short-form-project .video {
    grid-row-start: 1;
    grid-row-end: span 2;
    grid-column-start: 2;
  }
  .project-thumbs-container {
    padding: 20px;
  }
  .filterBy {
    position: relative;
    z-index: 1;
    justify-content: flex-end;
    padding-bottom: 0px;
    margin-top: -49px;
    float: right;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {

}
@media (min-width: 1024px) {
  .short-form-project-thumbs {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
  .long-form-project-thumbs {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
}
`
