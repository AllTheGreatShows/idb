import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle} from 'reactstrap';


//	[name, position, img, Bio, r1, r2, r3, commits, issues, units]
var members = [
	["Sanat Sharma", "Phase 1 Team Lead", "https://utexas.box.com/shared/static/rg7h5drt8osqbb7t3klh703t0ad9mz40.jpg", "Bio: Sanat is a junior in computer science who is passionate about creating change in the world through tech. He enjoys learning about new concepts in tech (recently working on computer vision and machine learning), singing and watching soccer.",
	"Managed the group workflow", "Worked on frontend and backend development", "Searched through iTunes Store API for raw data.",
	12, 3, 0],
	["Jesse Tipton", "Phase 2 Team Lead", "https://utexas.box.com/shared/static/ntda5bgjr5ghhf8k5i65vidvu0npoxu8.jpg", "Bio: Jesse is a senior in computer science who also works as a part time iOS developer. He is involved with the Mobile Application Development and teaches their iOS workshops.",
	"Helped set up python Flask", "Updated README.md", "Connected frontend to backend",
	19, 3, 0],
	["Ashay Lokhande", "", "https://utexas.box.com/shared/static/yk1pmh6cyi66otf3gursk9z2uaqn2vwu.jpg", "Bio: Ashay is a junior in computer science who tends to prefers backend, infrastructure, and low-level development. He enjoys being a teaching assistant and researcher at UT. Outside the classroom he loves travelining and hiking.",
	"Helped design the models for our database", "Worked on integrating model instance templates", "Worked on navigation across pages",
	3, 3, 0],
	["Claire Dubiel", "", "https://utexas.box.com/shared/static/rhujg9i47kjpq94gh6z9k2jzfpgo51ae.jpg", "Bio: Claire is a junior in computer science. She does bioinformatics research and is involved with community service and computer science outreach to local elementary schools.",
	"Scraped data from Mixcloud API", "Assembled the project writeup", "Collated project data for about page",
	5, 3, 0],
	["Will Kuglen", "", "https://utexas.box.com/shared/static/jf3oow4mlova0oy7pn2bl11g6547f0pd.png", "Bio: Will Kuglen is a third year computer science and design double major at The University of Texas at Austin. He is interested in both software and hardware, artificial intelligence, and robotics. He also has a passion in typography, industrial design, and UI/UX.",
	"Frontend and main React developer", "Implemented bootstrap into the project layout", "Applied layouts to landing page", 
	3, 3, 0]];


function Acard(props) {
	return (
		<Card className="Acard">
        <CardImg top width="300px" src={props.image} alt="Card image cap" />
	        <CardBody>
		        <CardTitle>{props.title}</CardTitle>
				   	<CardSubtitle>{props.subtitle}</CardSubtitle>
					  <CardText>{props.bio}</CardText>
					  <CardText>Major Responsibilities:
					  	<ul>
					  		<li>{props.r1}</li>
					  		<li>{props.r2}</li>
					  		<li>{props.r3}</li>
					  	</ul>
					  </CardText>
					  <CardText>
					  	<ul>
					  		<li>Number of Commits: {props.commits}</li>
					  		<li>Number of Issues: {props.issues}</li>
					  		<li>Number of Unit Tests: {props.units}</li>
					  	</ul>
					  </CardText>
					</CardBody>
			</Card>
      );
}

class About extends Component {



renderCard(i) {
	return <Acard
		title={members[i][0]}
		subtitle={members[i][1]}
		image={members[i][2]}
		bio={members[i][3]}
		r1={members[i][4]}
		r2={members[i][5]}
		r3={members[i][6]}
		commits={members[i][7]}
		issues={members[i][8]}
		units={members[i][9]}/>;
}


render() {
	return (
		<div>
			<h1>About Us</h1>
			<h2>CS373 Fall 2017 Group-13 <br/> All the Great Shows: A podcast database for everyone</h2>
			<p>All The Great Shows is a podcast database that allows users to search and discover popular podcasts on the internet.  It scrapes data from popular platforms in the podcast community such as the iTunes Store API and the Mixcloud API.  Users can discover new podcast series by genre as well as query results by artist, location, and and topic.
				Our website is designed to be used by anyone and we do mean anyone.  We truly believe that there is a podcast series out there for everyone to discover and learn something new.  Podcasts can be listened to in the car, during a break at work, while waiting in line, or to wind down after a long day.  Podcasts range in subjects from politics to arts, entertainment. innovation, travel, and practically any topic that you can think of.</p>

			<h2>Meet our Team</h2>
			{this.renderCard(0)}
			{this.renderCard(1)}
			{this.renderCard(2)}
			{this.renderCard(3)}
			{this.renderCard(4)}

			<h2>Phase 1 Statistics</h2>
			<ul>
				<li>Total number of commits: 39</li>
				<li>Total number of issues: 15</li>
				<li>Total number of unit tests: n/a</li>
				<li><a href="http://docs.allthegreatshows.apiary.io"> Apiary API </a></li>
				<li><a href="https://github.com/AllTheGreatShows/allthegreatshows"> Github Repository </a></li>
				<li><a href="https://trello.com/allthegreatshows"> Trello </a> </li>
			</ul>

			<h2>The Data</h2>
			<ul>
				<li><a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">iTunes Store API</a></li>
				<p>Data from the top 100 trending podcasts was scraped from the iTunes Store API. 
				We scraped this data by running this query through the search API:
				https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/10/explicit.json</p>
				<li><a href="https://www.mixcloud.com/developers/"> Mixcloud API</a></li>
					<p>Data from the top 100 trending podcasts was scraped from the Mixcloud API.  An example search being http://api.mixcloud.com/popular/</p>
			</ul>

			<h2>Phase 1 Tools Used</h2>
				<h3>Project Planning Tools</h3>
				<ul>
					<li>Github</li>
						<p>Github was used for version control and to collaborate while editing the source code.</p>
					<li>Slack</li>
						<p>Slack was utilized to communicate with other members about our schedule availability and the current status of the project.</p>
					<li>Trello</li>
						<p>Trello was used to group issues together on boards to keep track of our progress throughout the workflow. </p>
					<li>Plan it Poker</li>
						<p>Plan It Poker served as a tool to gauge and log the approximate time it took to complete tasks in order to stay on schedule</p>
				</ul>
				<h3>Front End Development Tools</h3>
				<ul>
					<li>Bootstrap</li>
						<p>Bootstrap is a free open-source web framework that allows developers to design web applications.  It is built on top of HTML, CSS, and JavaScript design templates to be compatible and responsive mobile websites.</p>
					<li>React JS (future)</li>
						<p>React JS is a popular JavaScript library for building user interfaces.</p>
				</ul>
				<h3>Back End Development Tools</h3>
				<ul>
					<li>Python Flask</li>
					<li>Jinga</li>
				<p>The Flask application routes to different pages based on the URL visited. The pages are constructed through the Jinja 2 template engine. We define a base HTML file (base.html) which all other pages extend. The base file defines the basic architecture of the HTML that is shared by all pages. Common head elements like metadata, stylesheets, and scripts as well as a container for body content are all define in the base file. The template engine also provides a mechanism for passing data from the Python environment of our Flask app to the individual HTML pages.</p>
				</ul>
				<h3>Tools not required by the project</h3>
				<ul>
					<li><a href="http://doodle.com/">Doodle Poll: Easy Scheduling</a>
						<p>Doodle poll was used to coordinate members' availabilities to find when multiple group members could work on the project together in the lab.</p>
					</li>
					<li>
						Google Docs
						<p>Google docs played a useful role in collaborating on the project report.</p>
					</li>
				</ul>
			<h2><a href="https://utexas.box.com/shared/static/kc88p1yibsogm4nbf093gj5md26k03q0.pdf"> Link to the Project Report</a></h2>
		</div>
	);
}

	
/*

	</ul>

	<ul>
	</ul>

</body>
</html>
}
*/

}
export default About;