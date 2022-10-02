import {StrictMode} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {QueryClient, QueryClientProvider} from 'react-query'

// import {PersistGate} from 'redux-persist/integration/react'

import {store, /*persist*/} from './ducks/store'

import App from './App'

/* styles */
import 'antd/dist/antd.min.css'
import './styles/index.css'
import 'react-circular-progressbar/dist/styles.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
// import 'node_modules/video-react/dist/video-react.css'

import './index.css'

const queryClient = new QueryClient()
const root = document.getElementById('root')
const content =
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* TO DO: error in persist gate */}
      {/* <PersistGate loading={null} persistor={persist}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </QueryClientProvider>


render(content, root)
