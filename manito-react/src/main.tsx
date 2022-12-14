import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Intro from './pages/intro'
import Complete from './pages/complete'
import Spin from './pages/spin'
import Step3 from './pages/step3'
import Step2 from './pages/step2'
import Step1 from './pages/step1'
import Snow from './components/Snow'

const router = createBrowserRouter(
  [
    { path: '/intro', element: <Intro/>  },
    { path: '/step1', element: <Step1/>  },
    { path: '/step2', element: <Step2/>  },
    { path: '/step3', element: <Step3/>  },
    { path: '/spin', element: <Spin/>  },
    { path: '/complete', element: <Complete/>  },
])



ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
 <>
  <Snow />
  <RouterProvider router={router} />
 </>
);