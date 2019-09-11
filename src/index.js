import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Theme, Media } from 'componentry'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

// ========================================================
// Application Core Elements
// ========================================================

// ⚠️ Import application styles before application components so that base CSS
// styles are included before component styles.
import './index.scss'
import './utils/require-icons'
import App from './components/App/App'

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
const theme = {}

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

// Start the party 🎉
// Render all of the root application providers then application root component
render(
  <Theme theme={theme}>
    <Media>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Media>
  </Theme>,
  document.getElementById('root'),
)
