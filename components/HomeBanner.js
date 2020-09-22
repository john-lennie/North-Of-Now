import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'
import { homeBannerStyles } from 'styles'

import Carousel from 'react-bootstrap/Carousel'

const HomeBanner = ({ slides }) => (
  <div>
    <Carousel fade={true} pause={false} controls={false} indicators={false} interval={5000}>
      {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <DocLink link={slide.slide_link.type === "short_form_project_page" ? `projects/short-form/${slide.slide_link.slug}` : `projects/long-form/${slide.slide_link.slug}`}>
              <img
                src={slide.image.url}
                alt="slide"
              />
              <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.sub_title}</p>
              </Carousel.Caption>
            </DocLink>
          </Carousel.Item>
      ))}
    </Carousel>
    <style jsx global>{homeBannerStyles}</style>
  </div>
)

export default HomeBanner
