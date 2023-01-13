import Landing_Top from "../components/landing/landing";
import Cards from "../components/landing/cards";
import About from "../components/landing/about";
export default function Home() {
	const Card_Data = [
		{
			"cardname" : "Departments",
			"description" : "Courses of all the departments are covered",
			"endline" : "This study portal covers all the departments of IIT BHU",
			"url" : "/landing/department.png"
		},
		{
			"cardname" : "Personalised Courses",
			"description" : "Get Easy access to courses you want to study",
			"endline" : "Login/Register to get access to your personalised courses",
			"url" : "/landing/person.png"
		},
		{
			"cardname" : "Updated Content",
			"description" : "The Study Material Provided is constantly updated",
			"endline" : "Our aim is to make your academics easier by providing latest resources",
			"url" : "/landing/updates.png"
		}
	]
	return (
		<>
		<Landing_Top/>
		<div className="flex justify-center">
		<h3>
			<b>FEATURES</b>
		</h3>
		</div>
		<div className="max-md:flex-col lg:flex lg:justify-between">
		<Cards props={Card_Data[0]} />
		<Cards props={Card_Data[1]}/>
		<Cards props={Card_Data[2]}/>
		</div>
		<About/>
		
		</>
	)


}
