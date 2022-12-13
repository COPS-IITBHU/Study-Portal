import Link from 'next/link'

const Footer = () => {
	const ICONS = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/company/cops-iitbhu/mycompany/',
			fill_color: '#0077b5',
			icon_d:
				'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/COPS-IITBHU',
			fill_color: '#000000',
			icon_d:
				'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
		},
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/cops.iitbhu/',
			fill_color: '#4267B2',
			icon_d:
				'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z',
		},
		{
			name: 'Discord',
			link: 'https://cops-discord-freshers.herokuapp.com/',
			fill_color: '#5046AF',
			path_d:
				'M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0a8.258 8.258 0 0 0-.412-.833a.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059a.051.051 0 0 0-.018-.011a8.875 8.875 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066a.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085a8.254 8.254 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.235 13.235 0 0 0 4.001-2.02a.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612Z',
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

						<div className='xs:text-lg col-span-12 text-center md:col-span-6 md:text-xl lg:col-span-4'>
							<b>Follow Us</b>

							<div className='grid-gap-2 mt-2 grid grid-cols-4'>
								{ICONS.map((icon) => (
									<Link
										key={icon.name}
										href={icon.link}
										passHref
										className='col-span-1 text-center'
									>
										<svg
											viewBox='0 0 16 16'
											width='4rem'
											className='p-2 text-center'
										>
											<path fill={icon.fill_color} d={icon.path_d} />
										</svg>
									</Link>
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
