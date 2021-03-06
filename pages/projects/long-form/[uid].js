import Head from 'next/head'
import React from 'react'
import { RichText } from 'prismic-reactjs'
import DefaultLayout from 'layouts'
import { DocLink, Header, Footer } from 'components'
import { longFormSingleStyles } from 'styles'
import { queryRepeatableDocuments } from 'utils/queries'
import Carousel from 'react-bootstrap/Carousel'
import { Client } from 'utils/prismicHelpers'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
    console.log(doc.data.article_links.length);
    return (
      <div>
        <Head>
          <title>{doc.data.title} | North of Now</title>
        </Head>
        <div className="longform-page">
          <Header menu={menu} logoColor="white" />
            <div className="poster">
              <img
                src={doc.data.thumbnail.url}
              />
            </div>
            <div className="infoLeft">
              <div className="section-1">
                <h1>{doc.data.title}</h1>
                <p className="type">{doc.data.type}</p>
                {(doc.data.write_up && doc.data.write_up[0].text.length > 0) ?
                  <div>
                    {RichText.render(doc.data.write_up, DocLink)}
                  </div>
                : ''}
              </div>
              {doc.data.trailer_embed.length > 0 ?
                <div className="youtube-vids">
                  <div className="responsive-iframe" dangerouslySetInnerHTML={{ __html: doc.data.trailer_embed[0].text }}>
                  </div>
                </div>
              : ''}
              {(doc.data.article_links && doc.data.article_links[0].text.length > 0) ?
                <div style={{background: doc.data.highlight_color}} className="articles">
                  <h2>Reviews</h2>
                  {RichText.render(doc.data.article_links, DocLink)}
                </div>
              : ''}
              {(doc.data.watch_now_links && doc.data.watch_now_links[0].watch_link) ?
                <div className="watch-now-section">
                  <p>Watch Now On:</p>
                  <ul className="watch-list">
                    {doc.data.watch_now_links.map((link, index) => (
                      <li key={index}>
                        <a
                          style={{color: doc.data.highlight_color}}
                          target={link.watch_link.target === "_blank" ? "_blank" : "_self"} href={link.watch_link.url}>{link.link_label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              : "" }
            </div>
          <style jsx global>{longFormSingleStyles}</style>
          <Footer logoColor="white" />
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

  const doc = await client.getByUID('long_form_project_page', params.uid, ref ? { ref } : null) || {}
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

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'long_form_project_page')
  return {
    paths: documents.map(doc => `/projects/long-form/${doc.uid}`),
    fallback: true,
  }
}

export default Page
