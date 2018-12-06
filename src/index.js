import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import 'resources/styles/app.css'

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)

registerServiceWorker()