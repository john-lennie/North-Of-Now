import React from 'react'
import {
  ClickToReveal,
  TextSection,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight
} from './'

const SliceZone = ({ sliceZone }) => (
  <span>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('click_to_reveal'):
          return <ClickToReveal slice={slice} key={`slice-${index}`} />
        case ('text_section'):
          return <TextSection slice={slice} key={`slice-${index}`} />
        case ('quote'):
          return <Quote slice={slice} key={`slice-${index}`} />
        case ('full_width_image'):
          return <FullWidthImage slice={slice} key={`slice-${index}`} />
        case ('image_gallery'):
          return <ImageGallery slice={slice} key={`slice-${index}`} />
        case ('image_highlight'):
          return <ImageHighlight slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </span>
)

export default SliceZone
