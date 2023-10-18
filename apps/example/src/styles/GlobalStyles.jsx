import React from 'react'

import { Global } from '@emotion/react'
import tw, { css, theme } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
