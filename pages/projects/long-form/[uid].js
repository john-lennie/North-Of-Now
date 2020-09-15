import React from 'react'

import DefaultLayout from 'layouts'
import { Header, ClickToReveal } from 'components'
import { longFormSingleStyles } from 'styles'
import { queryRepeatableDocuments } from 'utils/queries'
import Carousel from 'react-bootstrap/Carousel'
import { Client } from 'utils/prismicHelpers'

const Page = ({ doc, menu }) => {
  if (doc && doc.uid === "they-fight") {
    return (
      <DefaultLayout>
          <Header menu={menu} />
          <div className="poster">
            <img
              src={doc.data.thumbnail.url}
              alt={doc.data.thumbnail.alt}
            />
          </div>
          <div className="infoLeft">
            <div className="section-1">
              <h1>{doc.data.title}</h1>
              <p className="grey">{doc.data.type}</p>
              <p>{doc.data.description}</p>
              <p className="td-u">Full Summary</p>
              <p className="td-u">Credits</p>
              {/* <ClickToReveal title="Full Summary" content="vev" />
              <ClickToReveal title="Credits" content="vev" /> */}
            </div>
            <div className="articles">
              <p>Oscar winner and musician Common teams up with Drew Brees and Tony Parker for boxing documentary ‘They Fight’<br/>
              LOS ANGELES TIMES</p>
              <p>Watch the trailer for fox sports films’ ‘they fight’ documentary produced by Common<br/>
              THE SOURCE</p>
              <p>FOX Sports Films’ “They Fight” Film Re-Airs on FS1, Continues NYC/LA Theater Run This Week<br/>
              FOX SPORTS</p>
              <p className="td-u">MORE ARTICLES</p>
            </div>
            <Carousel fade={true} pause={false} interval={5000} nextLabel={''} prevLabel={''}>
              {doc.data.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image.image.url}
                    alt="image"
                  />
                  {/* <Carousel.Caption>
                    <h3>{image.title}</h3>
                    <p>{image.sub_title}</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="youtube-vids pad-30">
              <div className="responsive-iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eYiEr6iwOb8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="responsive-iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nbgQDWViVq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="responsive-iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/embz3AeGkfE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            {doc.data.watch_now_links.length > 1 ?
              <div className="watch-now-section pad-30">
                <p>Watch Now On:</p>
                <ul className="watch-list">
                  {doc.data.watch_now_links.map((link, index) => (
                    <li key={index}><a target={link.watch_link.target === "_blank" ? "_blank" : "_self"} href={link.watch_link.url}>{link.link_label}</a></li>
                  ))}
                </ul>
              </div>
            : "" }
          </div>
        <style jsx global>{longFormSingleStyles}</style>
      </DefaultLayout>
    )
  }
  if (doc && doc.uid !== "they-fight") {
    return (
      <DefaultLayout>
          <Header menu={menu} />
          <div className="poster">
            <img
              src={doc.data.thumbnail.url}
              alt={doc.data.thumbnail.alt}
            />
          </div>
          <div className="infoLeft">
            <div className="section-1">
              <h1>{doc.data.title}</h1>
              <p className="grey">{doc.data.type}</p>
              <p>{doc.data.description}</p>
              <p className="td-u">Full Summary</p>
              <p className="td-u">Credits</p>
              {/* <ClickToReveal title="Full Summary" content="vev" />
              <ClickToReveal title="Credits" content="vev" /> */}
            </div>
          </div>
          <style jsx global>{longFormSingleStyles}</style>
      </DefaultLayout>
    )}
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
