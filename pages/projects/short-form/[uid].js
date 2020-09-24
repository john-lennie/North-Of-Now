import Head from 'next/head'
import React from 'react'
import DefaultLayout from 'layouts'
import { Header, ClickToReveal } from 'components'
import { queryRepeatableDocuments } from 'utils/queries'
import { Client } from 'utils/prismicHelpers'
import { projectListStyles, videoPlayerStyles } from 'styles'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration'

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
                {/* <source src="video/tears-of-steel-battle-clip-medium.webm" type="video/webm">
                <source src="video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg"> */}
                {/* <!-- Flash fallback --> */}
                {/* <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" width="1024" height="576">
                  <param name="movie" value="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
                  <param name="allowfullscreen" value="true" />
                  <param name="wmode" value="transparent" />
                  <param name="flashvars" value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
                  <img alt="Tears of Steel poster image" src="img/poster.jpg" width="1024" height="428" title="No video playback possible, please download the video from the link below" />
                </object> */}
              </video>
            </figure>
            <div id="short-form-project" className="container">
              <div className="meta">
                <h1>{doc.data.title}</h1>
                <p> {doc.data.type}</p>
                <p><span className="fw500">Release Date:</span> {doc.data.date}</p>
                {doc.data.credits.length > 1 ?
                  <div>
                    <p className="fw500">Credits:</p>
                    <p>Directed By: <span className="fw500">{doc.data.credits[0].directed_by}</span><br/>
                       Produced By: <span className="fw500">{doc.data.credits[0].produced_by}</span>
                    </p>
                  </div>
                : ""}
              </div>
              {doc.data.description[0].paragraph ?
                <div className="description">
                  <ClickToReveal title="Info" content={doc.data.description} />
                </div>
              : ""}
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
