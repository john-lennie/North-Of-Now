import React from 'react'

import DefaultLayout from 'layouts'
import { Header, ClickToReveal } from 'components'

import { queryRepeatableDocuments } from 'utils/queries'

import { Client } from 'utils/prismicHelpers'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <div className="long-form-page">
          <Header menu={menu} />
          <img
            src={doc.data.thumbnail.url}
            alt={doc.data.thumbnail.alt}
          />
          <div className="container">
            <h1>{doc.data.title}</h1>
            <p className="grey">{doc.data.type}</p>
            <p>{doc.data.description}</p>
            <p>Full Summary</p>
            <p>Credits</p>
            {/* <ClickToReveal title="Full Summary" content="vev" />
            <ClickToReveal title="Credits" content="vev" /> */}
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
