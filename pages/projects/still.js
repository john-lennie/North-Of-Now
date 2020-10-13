import Head from 'next/head'
import React from 'react'
import Prismic from 'prismic-javascript'
import DefaultLayout from 'layouts'
import { Header, DocLink, ProjectList, SliceZone } from 'components'

import { Client } from 'utils/prismicHelpers'

const ShortFormPage = ({ doc, menu }) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let height = "25vh";

  if (doc && doc.results) {

    return (
      <DefaultLayout>
        <Head>
          <title>Still | North of Now</title>
        </Head>
        <Header menu={menu} logoColor={"dark"} />
        <div className="container stills-container">
          {doc.results.map((result, index) => (
            <DocLink
              key={index}
              link={`/projects/still/${result.uid}`}
              linkClass="stills-link"
              inlineStyles={{ height: height, top: `calc(${getRandomInt(100)}% - 12.5vh)`, left: `${getRandomInt(72)}%`}}
              >
              <img
                src={result.data.images[0].image.url}
                alt={result.data.title}
              />
              <div className="gal-title">{result.data.title}</div>
            </DocLink>
          ))}
        </div>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.query(
    Prismic.Predicates.at('document.type', 'image_gallery_page')
  ).then(res => {
      // res is the response object, res.results holds the documents
      return res
  })
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

export default ShortFormPage
