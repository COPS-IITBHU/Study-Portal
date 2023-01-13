import '../styles/globals.css'
import Layout from '../components/layout'
// import Cardl from './cardl'
export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			{/* <Cardl/> */}
		</Layout>

	)
}
