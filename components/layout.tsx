import Footer from './footer'

const Layout = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
