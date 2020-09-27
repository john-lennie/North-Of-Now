import React, { useState } from 'react'
import { clickToRevealStyles } from 'styles'

const ClickToReveal = ({ title, content }) => {
  const [hideText, setHideText] = useState(false);
  return (
    <div className="ctr">
      <div onClick={() => setHideText(prevHideText => !prevHideText)} className="ctr-title">{title}</div>
      <div className={!hideText ? "ctr-desc hidden" : "ctr-desc"}>
        {content}
      </div>
      <style jsx global>{clickToRevealStyles}</style>
    </div>
  )
}

export default ClickToReveal
