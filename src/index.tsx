import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/fonts/Gistesy.ttf'
import './assets/fonts/Montserrat-Regular.otf'
import './assets/fonts/Montserrat-Medium.otf'
import './assets/fonts/Montserrat-Bold.otf'
import './assets/fonts/Montserrat-SemiBold.otf'
import './assets/fonts/Montserrat-Light.otf'
import './assets/fonts/Holidays-Homework.ttf'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
