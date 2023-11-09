import React from 'react'

import { Global } from '@emotion/react'
import tw, { css, theme } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.primary`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
