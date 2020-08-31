import React from 'react'

import DefaultLayout from 'layouts'
import { Header, ClickToReveal } from 'components'

import { queryRepeatableDocuments } from 'utils/queries'

import { Client } from 'utils/prismicHelpers'

import Carousel from 'react-bootstrap/Carousel'
import { imageGalleryStyles } from 'styles'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
          <Header menu={menu} />
          <Carousel fade={true} pause={false} controls={false} indicators={false} interval={9000}>
            {doc.data.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image.image.url}
                  alt="image"
                />
                {/* <Carousel.Caption>
                  <h3>{image.title}</h3>
                  <p>{image.sub_title}</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Carousel>
          <style jsx global>{imageGalleryStyles}</style>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return null;
}


export async function getStaticProps({ params, preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getByUID('image_gallery_page', params.uid, ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      menu,
      preview
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'image_gallery_page')
  return {
    paths: documents.map(doc => `/projects/still/${doc.uid}`),
    fallback: true,
  }
}

export default Page
