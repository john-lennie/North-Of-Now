import Head from 'next/head'
import React from 'react'
import { Header, SliceZone } from 'components'
import { queryRepeatableDocuments } from 'utils/queries'
import { Client } from 'utils/prismicHelpers'
import { videoPlayerStyles } from 'styles'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
        <div>
          <style jsx global>{videoPlayerStyles}</style>
          <Head>
            <script type="text/javascript" src="/js/videoPlayer.js"></script>
          </Head>
          <div className="short-form-page">
            <Header menu={menu} logoColor="white" />
            <figure id="videoContainer" data-fullscreen="false">
              <video id="video" autoPlay loop muted playsInline>
                <source src={doc.data.vimeo_mp4_url} type="video/mp4" />
              </video>
            </figure>
            <div id="short-form-project" className="container">
              <div className="meta">
                <h1>{doc.data.title}</h1>
                <p> {doc.data.type}</p>
                <p><span className="fw500">Release Date:</span> {doc.data.date}</p>
              </div>
              <SliceZone sliceZone={doc.data.body} />
            </div>
            <div id="video-controls" className="controls">
               <span className="button" id="playpause" data-state="play"></span>
               <div className="floatR">
                 <span className="button" id="mute" data-state="unmute"></span>
                 <span className="button" id="fs" data-state="go-fullscreen"></span>
               </div>
               <div className="progress">
                  <progress id="progress" value="0" min="0">
                     <span id="progress-bar"></span>
                  </progress>
               </div>
            </div>
          </div>
        </div>
    )
  }
  // Call the standard error page if the document was not found
  return null;
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const client = Client()
  const doc = await client.getByUID('short_form_project_page', params.uid, ref ? { ref } : null) || {}
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
    revalidate: 1 // In seconds
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'short_form_project_page')
  return {
    paths: documents.map(doc => `/projects/short-form/${doc.uid}`),
    fallback: true,
  }
}

export default Page
