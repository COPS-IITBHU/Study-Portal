import Navbar from "../components/Navbar/Navbar"

const Departments = () => {
	return (
		<div className="flex-row justify-center items-center">
			<div className="font-sans font-bold text-4xl p-2" style={{paddingInlineStart: '15vw',display: 'flex', paddingTop: '3vw',flexDirection: 'row', justifyContent: 'space-between' }}>
				<div className="flex-col gap-2">
					<div className="pb-4">Departments</div>
					<form>
						<div className="relative flex">
							<div className="h-10 flex pl-2 mb-0 absolute" style={{flexDirection: 'column', justifyContent: 'space-around'}}>
							<i className="fa fa-search" style={{color: 'grey',fontSize: '20px'}}></i>
							</div>
							<input type={'text'} className="pl-9 h-10 leading-10 font-thin py-1 text-base border rounded-2xl px-5" style={{width: '20vw'}}placeholder="Search courses"/>
						</div>
					</form>
					<div className="grid pt-10 gap-5" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',width: '80vw'}}>
						<div className="cursor-pointer flex gap-5 justify-around text-2xl items-center py-5 px-4 shadow-[0_0_10px_#bbb] hover:shadow-[0_0_30px_#bbb] transition duration-300 ease-in-out" style={{borderRadius: '20px',minWidth: '25vw'}}>
							<div style={{height: '5vw', width: '5vw', backgroundColor: 'grey', borderRadius: '50%'}}></div>
							<div style={{maxWidth: '20vw',wordWrap: 'break-word', fontSize: '0.9em'}}>Engineering Physics</div>
						</div>
						<div className="cursor-pointer flex gap-5 justify-around text-2xl items-center py-5 px-4 shadow-[0_0_10px_#bbb] hover:shadow-[0_0_30px_#bbb] transition duration-300 ease-in-out" style={{borderRadius: '20px',minWidth: '25vw'}}>
							<div style={{height: '5vw', width: '5vw', backgroundColor: 'grey', borderRadius: '50%'}}></div>
							<div style={{maxWidth: '20vw',wordWrap: 'break-word', fontSize: '0.9em'}}>Engineering Physics</div>
						</div>
						<div className="cursor-pointer flex gap-5 justify-around text-2xl items-center py-5 px-4 shadow-[0_0_10px_#bbb] hover:shadow-[0_0_30px_#bbb] transition duration-300 ease-in-out" style={{borderRadius: '20px',minWidth: '25vw'}}>
							<div style={{height: '5vw', width: '5vw', backgroundColor: 'grey', borderRadius: '50%'}}></div>
							<div style={{maxWidth: '20vw',wordWrap: 'break-word', fontSize: '0.9em'}}>Engineering Physics</div>
						</div>
						<div className="cursor-pointer flex gap-5 justify-around text-2xl items-center py-5 px-4 shadow-[0_0_10px_#bbb] hover:shadow-[0_0_30px_#bbb] transition duration-300 ease-in-out" style={{borderRadius: '20px',minWidth: '25vw'}}>
							<div style={{height: '5vw', width: '5vw', backgroundColor: 'grey', borderRadius: '50%'}}></div>
							<div style={{maxWidth: '20vw',wordWrap: 'break-word', fontSize: '0.9em'}}>Engineering Physics</div>
						</div>
						<div className="cursor-pointer flex gap-5 justify-around text-2xl items-center py-5 px-4 shadow-[0_0_10px_#bbb] hover:shadow-[0_0_30px_#bbb] transition duration-300 ease-in-out" style={{borderRadius: '20px',minWidth: '25vw'}}>
							<div style={{height: '5vw', width: '5vw', backgroundColor: 'grey', borderRadius: '50%'}}></div>
							<div style={{maxWidth: '20vw',wordWrap: 'break-word', fontSize: '0.9em'}}>Engineering Physics</div>
						</div>
					</div>
				</div>

			</div>
			

		</div>
	)
}

export default Departments
