import React, { useState } from 'react'
import { clickToRevealStyles } from 'styles'
import { TextSection } from 'components/slices'

const ClickToReveal = ({ slice }) => {
  const [hideText, setHideText] = useState(false);
  return (
      <div>
        <div onClick={() => setHideText(prevHideText => !prevHideText)} className="ctr-title">{slice.primary.ctr_title}</div>
        <div className={!hideText ? "ctr-desc hidden" : "ctr-desc"}>
          <TextSection slice={slice.primary.content} />
        </div>
        <style jsx global>{clickToRevealStyles}</style>
      </div>
    )
}

export default ClickToReveal
