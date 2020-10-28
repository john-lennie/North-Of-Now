import Head from 'next/head'
import React, { useEffect } from 'react'
import { Header, DocLink, HomeBanner } from 'components'
import { homeBannerStyles } from 'styles'

import { Client } from 'utils/prismicHelpers'

const HomePage = ({ doc, menu }) => {

  useEffect(() => {

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth,
        slideContainer = document.getElementsByClassName('slide-container'),
        slides = document.getElementsByClassName('slide'),
        slideImages = document.getElementsByClassName('slide-img'),
        toolTip = document.getElementById('slide-tooltip'),
        scrollPos = document.scrollTop,
        header = document.getElementById('head');

    function showToolTip(e) {
        toolTip.style.left = e.clientX + 'px';
        toolTip.style.top = e.clientY + 'px';
    }

    for (var i = 0; i < slideImages.length; i++) {
      let title = slideImages[i].dataset.title;
      slideImages[i].addEventListener("mouseover", function(){
        toolTip.innerText = "";
        toolTip.innerText = title;
      });
    }

    header.addEventListener("mouseover", function(){
      toolTip.innerText = "";
    });

    slideContainer[0].style.height = "" + (slides.length * (window.innerHeight + 50))  + "px";

    window.addEventListener('scroll', function(e) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].getBoundingClientRect().bottom > (window.innerHeight / 2) && i === (slides.length - 1)) {
          toolTip.innerText = slides[slides.length - 1].firstElementChild.dataset.title;
        }
        if (i >= 1) {
          if (slides[i].getBoundingClientRect().bottom < 59 && slides[i].getBoundingClientRect().bottom > -(window.innerHeight / 2)) {
            // console.log(slides[i - 1].firstElementChild.dataset.title, "is in view");
            toolTip.innerText = slides[i - 1].firstElementChild.dataset.title;
          }
        }
        if (slides[i].getBoundingClientRect().bottom < 0 && i > 1) {
          slides[i - 1].classList.add("scrolling");
          slides[i - 1].style.top = "" + (slides.length - i)  + "00vh";
        }
        if (slides[i].getBoundingClientRect().bottom >= window.innerHeight - 120) {
          slides[i].classList.remove("scrolling");
          slides[i].style.top = null;
        }
      }
    })

    if (viewportWidth > 768) {
      window.addEventListener('mousemove', showToolTip);
    }

  });

  if (doc && doc.data) {
    return (
        <div>
          <Head>
            <title>North of Now</title>
            <script type="text/javascript" src="/js/index.js"></script>
          </Head>
          <div className='homepage'>
            <Header menu={menu} logoColor="white" />
            <div className="slide-container">
              <span id="slide-tooltip">{doc.data.slides[doc.data.slides.length-1].title}</span>
              {doc.data.slides.map((slide, index) => (
                <DocLink
                  key={index}
                  link={slide.slide_link.type === "short_form_project_page" ? `projects/short-form/${slide.slide_link.slug}` : (slide.slide_link.type === "long_form_project_page" ? `projects/long-form/${slide.slide_link.slug}` : `projects/still/${slide.slide_link.slug}`)}
                  linkClass="slide"
                  inlineStyles={index === (doc.data.slides.length - 1) ? { position: `absolute`, opacity: `1`} : {}}
                  >
                  <img
                    data-title={slide.title}
                    className="slide-img"
                    src={slide.image.url}
                  />
                </DocLink>
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
