import Head from 'next/head'
import React from 'react'

import DefaultLayout from 'layouts'
import { Header, HomeBanner } from 'components'

import { Client } from 'utils/prismicHelpers'

const HomePage = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>North of Now</title>
        </Head>
        <div className='homepage'>
          <Header menu={menu} logoColor="white" />
          <HomeBanner slides={doc.data.slides} />
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

  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}
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
    revalidate: 60, // In seconds
  }
}

export default HomePage
