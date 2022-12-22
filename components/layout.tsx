import Footer from './footer'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
			<Navbar/>
			<Footer />
		</div>
	)
}

export default Layout
