import Footer from './footer'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
	return (
		<div>
	  <div>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </div>
		</div>
	)
}

export default Layout
