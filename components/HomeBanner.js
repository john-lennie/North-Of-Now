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
          <img
            src={slide.image.url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.sub_title}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <style jsx global>{homeBannerStyles}</style>
  </div>
)

export default HomeBanner
