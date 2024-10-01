import { createBrowserRouter } from "react-router-dom"
import Main from "../pages/main/Main"
import Intro from "../pages/intro/Intro"
import Job from "../pages/intro/Job"
import Layout from "../pages/layout/Layout"
import NotFound from "../pages/notFound/NotFound"
import My from "../pages/my/My"

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : '/',
        element : <Main />
      },
      {
        path : '/intro',
        element : <Intro />
      },
      {
        path : '/my',
        element : <My />
      },
      {
        path : '/job',
        element : <Job />,
        children : [
          {
            path : ":title",
            element : <Job />
          }
        ]
      },
    ]
  },
  {
    path : "*",
    element : <NotFound />
  }
])

export default router;