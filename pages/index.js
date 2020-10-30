import Head from 'next/head'
import React, { useEffect } from 'react'
import { Header, DocLink, HomeBanner } from 'components'
import { homeBannerStyles } from 'styles'

import { Client } from 'utils/prismicHelpers'

const HomePage = ({ doc, menu }) => {

  useEffect(() => {

    console.log(doc.data.slides[doc.data.slides.length - 1].title);

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth,
        slideContainer = document.getElementsByClassName('slide-container'),
        slides = document.getElementsByClassName('slide'),
        slideImagesAndVideos = document.getElementsByClassName('.slide img, .slide video'),
        toolTip = document.getElementById('slide-tooltip'),
        scrollPos = document.scrollTop,
        header = document.getElementById('head'),
        currentSlide = slides.length - 1,
        scaleCounter = '1',
        scrollRange = '0';

    // set height of container to allow scrolling
    slideContainer[0].style.height = "" + (slides.length * 2000) + "px";

    // set position of toolTip, triggered on mousemove
    function showToolTip(e) {
        toolTip.style.left = e.clientX + 'px';
        toolTip.style.top = e.clientY + 'px';
    }

    // on scroll listener
    window.addEventListener('scroll', function(e) {

      if (window.scrollY < 1999) {
        currentSlide = slides.length - 1;
        scrollRange = window.scrollY.toString();
      }

      if (window.scrollY >= 1999 && window.scrollY <= 3999) {
        currentSlide = slides.length - 2;
        // scrollRange gets reset to 0 so that it never is > 1999
        scrollRange = (window.scrollY - 2000).toString();
      }

      if (window.scrollY > 3999 && window.scrollY <= 5999) {
        currentSlide = slides.length - 3;
        // scrollRange gets reset to 0 so that it never is > 1999
        scrollRange = (window.scrollY - 4000).toString();
      }

      if (window.scrollY > 5999 && window.scrollY <= 7999) {
        currentSlide = slides.length - 4;
        // scrollRange gets reset to 0 so that it never is > 1999
        scrollRange = (window.scrollY - 6000).toString();
      }

      if (window.scrollY > 7999 && window.scrollY <= 9999) {
        currentSlide = slides.length - 5;
        // scrollRange gets reset to 0 so that it never is > 1999
        scrollRange = (window.scrollY - 8000).toString();
      }

      if (scrollRange <= 9) {
        scaleCounter = '1.00' + scrollRange;
      }
      if (scrollRange > 9 && scrollRange < 99) {
        scaleCounter = '1.0' + scrollRange;
      }
      if (scrollRange > 99 && scrollRange < 999) {
        scaleCounter = '1.' + scrollRange;
      }
      if (scrollRange > 999 && scrollRange < 1009) {
        scaleCounter = '2.' + scrollRange.slice(-3);
      }
      if (scrollRange > 1009 && scrollRange < 1099) {
        scaleCounter = '2.' + scrollRange.slice(-3);
      }
      if (scrollRange > 1099 && scrollRange < 1999) {
        scaleCounter = '2.' + scrollRange.slice(-3);
      }

      for (var i = 0; i < slides.length; i++) {
        // toolTip.innerText = slides[slides.length - 1].firstElementChild.dataset.title;
        slides[currentSlide].style.transform = "scale(" + scaleCounter + ")"
        toolTip.innerText = slides[currentSlide].firstElementChild.dataset.title;
        if (i === currentSlide) {
          slides[currentSlide].style.display = "flex";
        } else {
          slides[i].style.display = "none";
        }
      }
    })
    // end scroll listener

    if (viewportWidth > 768) {
      // on mousemove listener
      window.addEventListener('mousemove', showToolTip);
      // on hover over header listener
      header.addEventListener("mouseover", function(){
        toolTip.innerText = "";
      });
      // on end hover over header listener
      header.addEventListener("mouseout", function(){
        toolTip.innerText = slides[currentSlide].firstElementChild.dataset.title;
      });
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
              <span id="slide-tooltip">{doc.data.slides[doc.data.slides.length - 1].title}</span>
              {doc.data.slides.map((slide, index) => (
                <DocLink
                  key={index}
                  link={slide.slide_link.type === "short_form_project_page" ? `projects/short-form/${slide.slide_link.slug}` : (slide.slide_link.type === "long_form_project_page" ? `projects/long-form/${slide.slide_link.slug}` : `projects/still/${slide.slide_link.slug}`)}
                  linkClass="slide"
                  inlineStyles={index === (doc.data.slides.length - 1) ? {display: 'flex'} : {}}
                  >
                  {slide.image.url ?
                    <img
                      data-title={slide.title}
                      src={slide.image.url}
                    /> : ''
                  }
                  {slide.vimeo_mp4_url ?
                    <video
                      data-title={slide.title}
                      autoPlay loop muted playsInline>
                      <source src={slide.vimeo_mp4_url} type="video/mp4" />
                    </video> : ''
                  }
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
