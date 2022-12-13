import Link from 'next/link'

const Footer = () => {
	const ICONS = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/company/cops-iitbhu/mycompany/',
			fill_color: '#0A66C2',
			path_d:
				'M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/COPS-IITBHU',
			fill_color: '#000000',
			path_d:
				'M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z',
		},
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/cops.iitbhu/',
			fill_color: '#1877F2',
			path_d:
				'M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4Z',
		},
		{
			name: 'Discord',
			link: 'https://cops-discord-freshers.herokuapp.com/',
			fill_color: '#5046AF',
			path_d:
				'M25.7 7.1C23.9 6.3 22 5.7 20 5.3h-.1c-.2.4-.5 1-.7 1.5c-2.2-.3-4.3-.3-6.4 0c-.2-.5-.5-1-.7-1.5H12c-2 .3-3.9.9-5.7 1.8C2.7 12.5 1.7 17.8 2.2 23v.1c2.4 1.8 4.7 2.8 7 3.5h.1c.5-.7 1-1.5 1.4-2.3v-.1c-.8-.3-1.5-.6-2.2-1c-.1 0-.1-.1 0-.1c.1-.1.3-.2.4-.3H9c4.6 2.1 9.5 2.1 14.1 0h.1c.1.1.3.2.4.3c.1 0 0 .1 0 .1c-.7.4-1.4.8-2.2 1c0 0-.1.1 0 .1c.4.8.9 1.6 1.4 2.3h.1c2.3-.7 4.6-1.8 7-3.5V23c.6-6-1-11.2-4.2-15.9zM11.4 19.9c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8c0 1.5-1.1 2.8-2.5 2.8zm9.3 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8c0 1.5-1.1 2.8-2.5 2.8z',
		},
	]

	return (
		<div className='w-full font-poppins'>
			<div>
				<div className='bg-berry pt-6 pb-6 text-center'>
					<div className='xs:text-base text-blush md:text-lg'>
						Study Portal is made with{' '}
						<span role='img' aria-label='pizza' area-hidden='false'>
							☕
						</span>
						,{' '}
						<span role='img' aria-label='coffee' area-hidden='false'>
							💻
						</span>{' '}
						and
						<span role='img' aria-label='laptop' area-hidden='false'>
							🍕
						</span>
					</div>
				</div>
			</div>

			<footer className='bg-berry'>
				<div className='xs:mx-2 pb-4 text-blush lg:mx-16'>
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-12 text-center md:order-3 md:col-span-12 lg:order-1 lg:col-span-4'>
							<div className='m-4 px-12 text-center lg:m-2 lg:text-left'>
								<div className='my-2 text-blush'>
									<Link href='/contributors' passHref>
										<span role='img' aria-label='laptop' area-hidden='false'>
											✨
										</span>{' '}
										CONTRIBUTORS
									</Link>
								</div>
								<div>
									<a
										href='https://copsiitbhu.co.in/'
										target='_blank'
										rel='noopener noreferrer'
									>
										{' '}
										&copy;{new Date().getFullYear()}
										{'  '}
										COPS IIT BHU
									</a>
								</div>
							</div>
						</div>

						<div className='col-span-12 px-12 text-center md:col-span-6 lg:col-span-4 lg:m-2 lg:text-right'>
							<div className='mb-4 lg:mb-0'>
								<b>Quick Links</b>

								<div className='mt-2'>
									<Link href='/' passHref>
										<span>Home</span>
									</Link>
								</div>
								<div>
									<Link href='/departments' passHref>
										<span>Departments</span>
									</Link>
								</div>
								<div>
									<Link href='https://copsiitbhu.co.in' passHref>
										<span>COPS</span>
									</Link>
								</div>
							</div>
						</div>

						<div className='xs:text-lg col-span-12 px-4 text-center md:col-span-6 md:pr-16 md:text-xl lg:col-span-4 lg:px-4'>
							<b>Follow Us</b>

							<div className='mt-2 grid grid-cols-4 text-center'>
								{ICONS.map((icon) => (
									<div key={icon.name}>
										<Link
											href={icon.link}
											passHref
											className='p-auto col-span-1 m-auto text-center'
										>
											<div className='footer-social-circle m-auto w-16 p-1 text-center'>
												<svg viewBox='0 0 32 32' className='text-center'>
													<path fill={icon.fill_color} d={icon.path_d} />
												</svg>
											</div>
											<div className='mt-1 pt-1 text-sm'>{icon.name}</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
