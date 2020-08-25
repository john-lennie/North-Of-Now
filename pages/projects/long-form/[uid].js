import React from 'react'

import DefaultLayout from 'layouts'
import { Header, SliceZone } from 'components'

import { queryRepeatableDocuments } from 'utils/queries'

import { Client } from 'utils/prismicHelpers'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <div className="long-form-page">
          <Header menu={menu} />
          <div className="poster">
            <img
              src={doc.data.thumbnail.url}
              alt={doc.data.thumbnail.alt}
            />
          </div>
        </div>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return null;
}


export async function getStaticProps({ params, preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getByUID('long_form_project_page', params.uid, ref ? { ref } : null) || {}
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
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'long_form_project_page')
  return {
    paths: documents.map(doc => `/projects/long-form/${doc.uid}`),
    fallback: true,
  }
}

export default Page
