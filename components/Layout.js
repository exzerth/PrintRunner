import Meta from '../components/Meta'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
