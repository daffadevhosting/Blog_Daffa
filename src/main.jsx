import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import routes from '~react-pages'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Suspense fallback={<h1 className="loading"> Loading... </h1>}>
    <App />
</Suspense>
  </React.StrictMode>,
)
