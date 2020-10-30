import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'
import { homeBannerStyles } from 'styles'

import Carousel from 'react-bootstrap/Carousel'

const HomeBanner = ({ slides }) => (
  <div>
    <Carousel fade={true} pause={false} controls={false} indicators={false} interval={6000}>
      {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <DocLink link={slide.slide_link.type === "short_form_project_page" ? `projects/short-form/${slide.slide_link.slug}` : (slide.slide_link.type === "long_form_project_page" ? `projects/long-form/${slide.slide_link.slug}` : `projects/still/${slide.slide_link.slug}`)}>
              {slide.image.url ?
                <img
                  src={slide.image.url}
                /> : ''
              }
              {slide.vimeo_mp4_url ?
                <video
                  autoPlay loop muted playsInline>
                  <source src={slide.vimeo_mp4_url} type="video/mp4" />
                </video> : ''
              }
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
