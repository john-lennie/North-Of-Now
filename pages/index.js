import Head from 'next/head'
import React from 'react'
import { Header, HomeBanner } from 'components'
import { homeBannerStyles } from 'styles'

import { Client } from 'utils/prismicHelpers'

const HomePage = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
        <div>
          <Head>
            <title>North of Now</title>
            <script type="text/javascript" src="/js/index.js"></script>
          </Head>
          <div className='homepage'>
            <Header menu={menu} />
            <div className="slide-container">
              {doc.data.slides.map((slide, index) => (
                <div
                  className="slide"
                  style={index === (doc.data.slides.length - 1) ? { position: `relative`, opacity: `1`} : {}}
                  key={index}>
                  <img
                    className="slide-img"
                    src={slide.image.url}
                  />
                  <span className="slide-tooltip">{slide.title}</span>
                </div>
              ))}</div>
          </div>
          <style jsx global>{homeBannerStyles}</style>
        </div>
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
