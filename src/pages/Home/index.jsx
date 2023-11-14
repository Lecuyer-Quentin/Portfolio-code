import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import { ProjectsDataProvider } from '../../app/data/dataContext'

const Home = () => {
  return (
      <>
          <Header />
          <main className="main">
            <ProjectsDataProvider>
                  <Outlet />
            </ProjectsDataProvider>
          </main>
          <Footer />
          
      </>
      

  )
}

export default Home