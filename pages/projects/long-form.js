import React from 'react'
import Prismic from 'prismic-javascript'
import DefaultLayout from 'layouts'
import { Header, ProjectList, SliceZone } from 'components'

import { Client } from 'utils/prismicHelpers'

const LongFormPage = ({ doc, menu }) => {
  if (doc && doc.results) {
    return (
      <DefaultLayout>
        <Header menu={menu} logoColor={"dark"} />
        <ProjectList category="long-form" projects={doc.results} />
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
    Prismic.Predicates.at('document.type', 'long_form_project_page')
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

export default LongFormPage
