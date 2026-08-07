import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reducer, { initialState } from "./reducer";
import { StateProvider } from './StateProvider.jsx'
import { SearchProvider } from './context/searchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </SearchProvider>
  </React.StrictMode>,
)
