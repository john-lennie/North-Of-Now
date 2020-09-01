import React from 'react'
import Prismic from 'prismic-javascript'
import DefaultLayout from 'layouts'
import { Header, DocLink, ProjectList, SliceZone } from 'components'

import { Client } from 'utils/prismicHelpers'

const ShortFormPage = ({ doc, menu }) => {
  if (doc && doc.results) {
    console.log(doc.results);
    return (
      <DefaultLayout>
        <Header menu={menu} logoColor={"dark"} />
        <div className="container">{doc.results.map((result, index) => (
            <div key={index}>
              <DocLink link={ `/projects/still/${result.uid}` }>
              {result.data.title}
            </DocLink>
            </div>
          ))}</div>
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
    }
  }
}

export default ShortFormPage