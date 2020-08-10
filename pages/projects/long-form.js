import React from 'react'

import DefaultLayout from 'layouts'
import { Header, ProjectList, SliceZone } from 'components'

import { Client } from 'utils/prismicHelpers'

const LongFormPage = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <div className='homepage'>
          <Header menu={menu} logoColor={"dark"} />
          {/* <ProjectList category="long-form" projects={doc.data.project_list} /> */}
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

  const doc = await client.getByUID('project_list', 'long-form', ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      menu,
      preview
    }
  }
}

export default LongFormPage
