import Head from 'next/head'
import React from 'react'

import DefaultLayout from 'layouts'
import { Header, DocLink, ClickToReveal } from 'components'

import { queryRepeatableDocuments } from 'utils/queries'

import { Client } from 'utils/prismicHelpers'

import Carousel from 'react-bootstrap/Carousel'
import { imageGalleryStyles } from 'styles'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
        <div>
          <Head>
            <title>{doc.data.title} | North of Now</title>
          </Head>
          <Header menu={menu} />
            <DocLink link="/projects/still" linkClass="close">Close</DocLink>
            <h1 className="title">{doc.data.title}</h1>
            <Carousel fade={true} pause={false} interval={60000} nextLabel={''} prevLabel={''}>
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
            {/* <h1>{doc.data.title}</h1>
            <p><span className="fw500">Creative Direction:</span> Creative Director</p>
            <p><span className="fw500">Photography:</span> Photographer</p>
            <p><span className="fw500">Stylist:</span> Stylist</p> */}
          <style jsx global>{imageGalleryStyles}</style>
        </div>
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
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60 // In seconds
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
