import UserProfile from '../pages/userprofile'
import Footer from './footer'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
		<UserProfile/>
		</div>
	)
}

export default Layout
