import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink} from 'components'
import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'

const TextSection = ({ slice }) => {
  return (
      <div>{RichText.render(slice, DocLink)}</div>
  )
}

export default TextSection
