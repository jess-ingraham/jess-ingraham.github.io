const rows = [
{rowId:"internRowOne", ids:["internOne", "internTwo", "internThree"]}
,{rowId:"internRowTwo", ids:["internFour", "internFive", "internSix"]}
,{rowId:"internRowThree", ids:["internSeven", "internEight", "internNine"]}
,{rowId:"classesRowOne", ids:["classOne", "classTwo", "classThree"]}
,{rowId:"classesRowTwo", ids:["classFour", "classFive", "classSix"]}
,{rowId:"classesRowThree", ids:["classSeven", "classEight", "classNine"]}
];


const content = [
{id:"internOne", cont:'Three Bridges Capital is a European Hedge Fund. Currently the prgramming team is working on building an accounting system and bringing their accounting in house. My job is building, altering, and maintaing tables, views, and stored procedures for the database side. I also log errors in the data and create stored procedures to update data when the end user fixes the error (ie if a new country code is not listed in our table already, an error is logged. Once that country code is accounted for, the stored procedure finds all the rows that had that country code and updates it.)<br /><br /> This internship is a lot of SQL and data processing and I learned a lot about production side databases. Starting this internship was my first exposure to a large data warehouse and really showed me how to break down information for ease of use and readability.'}
,{id:"internTwo", cont:"TodayTix is an online ticketing agency that sells tickets to Broadway and Off-Broadway shows, and events around New York City as well as other countries. My job as a concierge agent is to wait at the theater before showtime and deliver the tickets to customers that have purchased them. We also check all of the tickets for customers and report any descrepincies (i.e wrong date/time/show, party not seated together). "}
,{id:"internThree", cont:"I tutored for the NYU course Database Design And Web Implementation, a course I had taken previously. This class is taught with python, SQLlite, mySQL, and some mongoDB. The students learn to scrub data files without using pandas or numpy and then those libraries are used at the end of the course. This way, students understand how to read in, filter, and scrub text/csv files. Students also learn how to use python to connect to an SQL database and template a webpage based on results.</br></br> My job was to tutor all the students. I would help debug assignemnts as well as talk through solutions or ideas and the best ways to set up databases that would be effective. I also helped students with test review and ans"}
,{id:"internFour", cont:"From September to December of 2017, I interned for the Membership department of the American Ballet Theatre in New York. During my internship I assisted in maintaining their Raiser's Edge database by updating donors accounts as well as performing analytics by pulling queries and compiling the results. I also contacted donors about any issues that may have come up during their donation processesing. I assisted in processesing the donation that came into the membership department and the acknowledgement letters that were sent to donors. I worked with the other interns to help set up and facilitate events at the American Ballet Theatre Offices as well as at the Koch Theatre in Lincoln center. <br /><br/>While my time at the American Ballet Theatre was not as technical as I would have wanted it to be, I learned a lot about how companies, especially one that relies on donors, use their data to reach out to donors. There was a lot of analysis about when most people donate and which requests get the most responses. I was also interning when the company was redesigning their website, so I was able to witness what concepts they weren't understanding and how redesigning a website is approached from the client standpoint."}
,{id:"internFive", cont:"From June to August of 2017 I interned for the Projects department of bankESB in Easthampton Massachusetts. I worked with the Project Manager and Project Coordinator to assist in upkeeping and implementing new softwares for both employees of the bank, and customers of the bank. For most of the summer, I had a daily task to log all of the complaints that reached the bank from customers about the new bill-pay platform that had recently been changed. I also worked with the IT department to maintain bankESB's intranet where daily annoucnments and important documents are stored. I would add a new post to the main page when a request for a new post was emailed to the IT department.<br/><br/>The biggest project I worked on during my internship was assisting in implementing a Person-to-Person payment system. I was an intern during the very first meeting with the FinTech and worked all summer on the project with the project coordinator. I sat in meetings with the representatives from the FinTech and COCC to coordinate the release of the product; I created testing guides for in-depth error testing and for other bank employees to test the product; I wrote a white paper for the system; I kept error logs and reported any issues we may have with the product. The department decided at the end of the summer to not use the Person-to-Person system due to errors within the system but being able to see the steps of implementing a new software within a business was invaluable."}
,{id:"internSix", cont:"My sophomore year in college I worked at Aerie, a sub-division of American Eagle Outfitters, in New York City. I worked as a Stock Associate but was also trained to work on the sales floor. I worked to keep the stock room and sales floor clean and organized so that customers and associates would be able to find products. I received deliveries and unpacked new products. Towards the end of my time, I was delegating responsibilities to other stock associates and working directly with the store stock lead and store managers to make sure everything stayed up to the proper standards. I eventually left due to the end of the school year."}
,{id:"internSeven", cont:"CInemark was a great first job. I served customers and answered questions while efficiently filling orders. I learned how to stay calm under high pressure situations, especially when we would get lines of 50-70 poeple all waiting to be served. By the end of my time there, I was acting in a supervisory position, delegating roles and being a go-between for co-workers and manangers."}
,{id:"classOne", cont:"From course description: Extracting, transforming and analyzing data in myriad formats with traditional relational databases as well as non-relational databases. Data modeling, cloud databases, and API programming. Garnering insights using Python and current data analysis tools and libraries.<br /><br />This course so far has involved scrubbing data in python. We have used pandas and numpy to analyse data and we have created our own version of a pandas-like library."}
,{id:"classTwo", cont:"From course description: This class will examine the challenges of scaling up a data-centric web application to serve millions of users. Students will learn and apply distributed computing concepts as they convert a simple single-node web application to a scalable distributed architecture, with an emphasis on back-end components. Students will be introduced to the practice of scaling by distribution, and the exercises will have students apply a combination of popular open source technologies and code newly written by them, as they continue to augment the service.<br/><br/>This course focuses on scaling web technologies including servers, both hardware and software, databases, and web monitoring tools. Our current assignemt is to write a prober that every 30 seconds will check the status of a website."}
,{id:'classThree', cont:"From course description: In this class, the goal of the project for this class is to build a data product. We will discuss more what this means, but at the minimum we expect the final deliverable to give the ability to users to interact with the project (through a chatbot, or through a web front end), and allow the users to get something meaningful from the underlying data.<br/><br/>So far we have used api's to get ingormation from a website and used the watson nlp api to analyse the sentiment and emotion. We have used regular expression to scrape websites. My team and I are currently working on ideas for our final project."}
,{id:"classFour", cont:"This course is a practical introduction to creating modern web applications. It will cover full stack web development - from database design all the way through client side interactivity. Students will use current server and client side web frameworks to build dynamic, data-driven sites. Various tools to support development will also be introduced, such as version control and build systems. </br></br>I decided to take this course because I found a love for UI/UX. Like the description said, we covered full stack web devolopment technologies. We covered node.js, server creation from scratch and using express, handlebars, databases such as mongoDB and more. Examples of work from this class will be available on my github at the end of the class as they are currently in private repositories to prevent cheating. This class is one of the most fun classes I have taken."}
,{id:"classFive", cont:"From course description: This course covers the principles and design of operating systems. Topics include process scheduling and synchronization, deadlocks, memory management including virtual memory, input-output and file systems. Programming assignments."}
,{id:"classSix", cont:"From course description: After this course, you should be able to understand what happens under the hood when your computer executes programs. You will be able to visualize the big picture that shows how software and hardware are interrelated. The main goal of this class is to teach you how computers work under-the-hood to execute programs and manipulate data. The course will start with the C programming language, down to assembly and machine-level code, to basic operating system and architectural concepts."}
,{id:"classSeven", cont:"This course was an introductory course to databases and database design. We used SQLite and mySQL for databases and used python to format the data on a webpage. This class focused on how to properly model a database based on information given and what that information would be used for. I became a tutor for this course the following semester."}
];
	


document.addEventListener('DOMContentLoaded', main);


function main(){

	fadeInHeader();

	document.querySelectorAll(".box h3, .box h4, p.date").forEach((box) =>{
		box.addEventListener('click', openClose, false);
	});
}

function openDropdown(id){

	let dropdownId;
	rows.forEach((row) =>{
		row.ids.forEach((check) =>{
			if(id === check){
				dropdownId = row.rowId;
			}
		});
	});

	let desc;
	content.forEach((check) =>{
		if(check.id === id){
			desc = check.cont;
		}
	});

	let dropdown = document.querySelector("#"+ dropdownId);
	dropdown.innerHTML = desc;

	dropdown.classList.add('open');
}

function closeDropdown(id){

	let dropdownId;
	rows.forEach((row) =>{
		row.ids.forEach((check) =>{
			if(id === check){
				dropdownId = row.rowId;
			}
		});
	});

	let dropdown = document.querySelector("#"+ dropdownId);
	dropdown.innerHTML = '';

	dropdown.classList.remove('open');	
}

function addSelect(box){
	// want every other box besides the one that's clicked to close, then select the box

	//remove the class from all the others
	document.querySelectorAll(".box").forEach((other) =>{
		if(other.classList.contains("selected")){
			other.classList.remove("selected");
			closeDropdown(other.id);
			// other.querySelector('div.dropdown').classList.remove('open');
		}
	});
	
	box.classList.add("selected");
	openDropdown(box.id);
}


function openClose(evt){
	//check if the box is already open, if it is close it, if it's not then close the other box and open this one

	//if the h3 element was selected, then set box to the parent element instead
	let box;
	if(evt.target.parentNode.classList.contains('box')){
		box = evt.target.parentNode;
	}
	else{
		box = evt.target;
	}

	//check if the box is already open

	if(box.classList.contains('selected')){
		box.classList.remove('selected');
		closeDropdown(box.id);

	}
	else{
		//if it's not then open the box
		addSelect(box);
	}


}

function fadeInHeader(){

	let items = [];
	items.push(document.querySelector('div.about_me'));

	document.querySelectorAll('div.images img').forEach((image)=>{
		items.push(image);
	});

	items.push(document.querySelector('div.pic-caption'));


	items.forEach(function(item, index){
		setTimeout(()=>{unfade(item)}, (1000 * index));
	});

}

function unfade(element) {
	var op = 0.1;  // initial opacity
	element.style.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 10);
}