import css from 'styled-jsx/css'

export const projectListStyles = css.global`
.filterBy {
  padding-bottom: 20px;
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
  display: flex;
}
.project-thumb .meta {
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
}
.meta p.title {
  text-transform: capitalize;
  margin-bottom: 10px;
}
.meta p {
  margin-bottom: 0px;
}
.meta .grey {
  margin-right: 5px;
}
.project-img {
  width: 50%;
}
.project-img a img {
  object-fit: cover;
  width: 100%;
  height: 120px;
  border-radius: 2px;
  float: right;
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
.short-form-project {
  position: relative;
  color: #fff;
}
.short-form-project .meta p {
  margin-bottom: 20px;
}
.short-form-project .meta p.title {
    font-size: 24px;
    line-height: 1.4em;
}
@media (min-width: 768px) {
  .short-form-project .meta, .short-form-project .video {
    margin-bottom: 0px;
  }
  .short-form-project .meta, .short-form-project .description {
    width: 33.33%;
  }
  .short-form-project .video {
    grid-row-start: 1;
    grid-row-end: span 2;
    grid-column-start: 2;
  }
  .project-thumbs-container {
    padding: 20px;
  }
  .filterBy {
    text-align: right;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {

}
@media (min-width: 1024px) {
  .short-form-project-thumbs {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .long-form-project-thumbs {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
}
`
