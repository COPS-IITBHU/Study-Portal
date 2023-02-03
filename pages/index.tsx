import Landing_Top from "../components/landing/landing";
import Cards from "../components/landing/cards";
import About from "../components/landing/about";
import animation1 from "../components/landing/department_lottie.json"
export default function Home() {
	const Card_Data = [
		{
			"cardname" : "Departments",
			"description" : "Courses of all the departments are covered",
			"endline" : "This study portal covers all the departments of IIT BHU",
			"index" : 1
		},
		{
			"cardname" : "Personalised Courses",
			"description" : "Get Easy access to courses you want to study",
			"endline" : "Login/Register to get access to your personalised courses",
			"index" : 2
		},
		{
			"cardname" : "Updated Content",
			"description" : "The Study Material Provided is constantly updated",
			"endline" : "Making academics easier by providing latest resources",
			"index" : 3
		}
	]
	return (
		<>
		<Landing_Top/>
		<div className="grid grid-row-3 gap-y-2">
			<div className="mt-10">
				<p className="font-bold font-montserrat text-5xl text-center">What Do We Offer</p>
			</div>
			<div className="place-self-center">
				<p className="font-poppins text-2xl text-center">
						We at IIT BHU are commited towards providing the best academic resources.<br/>This study potal aims to be
						the one stop academic solution for all the problems faced by any student. 
				</p>
			</div>
			<div className="grid grid-row-3 lg:grid-cols-3 w-[90%] place-self-center">
			<Cards props={Card_Data[0]} />
			<Cards props={Card_Data[1]}/>
			<Cards props={Card_Data[2]}/>
			</div>

		
		</div>
		
		</>
	)


}
