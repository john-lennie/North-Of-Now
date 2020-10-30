import Head from 'next/head'
import React, { useEffect } from 'react'
import { Header, DocLink } from 'components'
import { homeBannerStyles } from 'styles'

import { Client } from 'utils/prismicHelpers'

const HomePage = ({ doc, menu }) => {

  useEffect(() => {

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth,
        slideContainer = document.getElementsByClassName('slide-container'),
        slides = document.getElementsByClassName('slide'),
        toolTip = document.getElementById('slide-tooltip'),
        header = document.getElementById('head'),
        currentSlide = slides.length - 1,
        scrollRange = '0',
        scaleValue = '1'


    // set height of container to allow scrolling
    slideContainer[0].style.height = "" + (slides.length * 1200) + "px";

    // set position of toolTip, called on mousemove
    function showToolTip(e) {
      toolTip.style.left = e.clientX + 'px';
      toolTip.style.top = e.clientY + 'px';
    }

    if (viewportWidth > 768) {
      // on mousemove showToolTip()
      window.addEventListener('mousemove', showToolTip);
      // on hover over header, remove title from toolTip
      header.addEventListener("mouseover", function(){
        toolTip.innerText = "";
      });
      // on end hover over header, add title to toolTip
      header.addEventListener("mouseout", function(){
        toolTip.innerText = slides[currentSlide].firstElementChild.dataset.title;
      });
    }

    // on scroll listener
    window.addEventListener('scroll', function(e) {

      // start for loop
      for (var i = 0; i < slides.length; i++) {
        // if scroll position is less than 999
        if (window.scrollY < 999) {
          // set currentSlide to last array index
          currentSlide = slides.length - 1;
          scrollRange = window.scrollY.toString();
        }
        // if scroll position >= && <= a range which increments by a thousand
        if (i !== 0 && window.scrollY >= (999+1000*(i-1)) && window.scrollY < (999+1000*(i))) {
          // set currentSlide
          currentSlide = slides.length - (i + 1);
          // subtract min of range to keep scrollRange between 0 and 1000
          scrollRange = (window.scrollY - 1000*(i)).toString();
        }
        // set slide visible or not
        if (i === currentSlide) {
          slides[currentSlide].style.display = "flex";
        } else {
          slides[i].style.display = "none";
        }
        // set scaleValue by appending scrollRange which is always between 0 and 1000
        if (scrollRange <= 9) {
          scaleValue = '1.00' + scrollRange;
        }
        if (scrollRange > 9 && scrollRange <= 99) {
          scaleValue = '1.0' + scrollRange;
        }
        if (scrollRange > 99 && scrollRange < 999) {
          scaleValue = '1.' + scrollRange;
        }
        // set scale value
        slides[currentSlide].style.transform = "scale(" + scaleValue + ")";
        // set tooltip title
        toolTip.innerText = slides[currentSlide].firstElementChild.dataset.title;
      }
      // end for loop

    })
    // end scroll listener

  });

  if (doc && doc.data) {
    return (
        <div>
          <Head>
            <title>North of Now</title>
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
