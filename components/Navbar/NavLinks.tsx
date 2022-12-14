import React from 'react'

const NavLinks = () => {
	const links = [{ name: 'Departments' }, { name: 'About Us' }]
	return (
		<>
			{links.map((Link,i) => (
				<div key={i}>
					<div   className='px-3 text-left md:cursor-pointer' >
						<h1 className='py-7'>{Link.name}</h1>
					</div>
				</div>
			))}
		</>
	)
}

export default NavLinks