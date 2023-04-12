import io from '../images/io.png';
import art from '../images/art.jpg';
import broadway from '../images/broadway.png';
import tts from '../images/tartarussimlogo.png';
import rockstars from '../images/rockstars.png';
import shelves from '../images/shelves.png';

function ProjectCarousel() {

    var carouselNum = 1;

    function showSlide(index) {
        if (index > 6) {
            index = 1
        }
        else if (index < 1) {
            index = 6
        }

        if (!document.getElementById(1).className.includes("hidden")) {
            document.getElementById(1).className = document.getElementById(1).className + " hidden"
        };
        if (!document.getElementById(2).className.includes("hidden")) {
            document.getElementById(2).className = document.getElementById(2).className + " hidden"
        };
        if (!document.getElementById(3).className.includes("hidden")) {
            document.getElementById(3).className = document.getElementById(3).className + " hidden"
        };
        if (!document.getElementById(4).className.includes("hidden")) {
            document.getElementById(4).className = document.getElementById(4).className + " hidden"
        };
        if (!document.getElementById(5).className.includes("hidden")) {
            document.getElementById(5).className = document.getElementById(5).className + " hidden"
        };
        if (!document.getElementById(6).className.includes("hidden")) {
            document.getElementById(6).className = document.getElementById(6).className + " hidden"
        };

        document.getElementById("1btn").className = "navlink"
        document.getElementById("2btn").className = "navlink"
        document.getElementById("3btn").className = "navlink"
        document.getElementById("4btn").className = "navlink"
        document.getElementById("5btn").className = "navlink"
        document.getElementById("6btn").className = "navlink"

        document.getElementById(index + "btn").className = document.getElementById(index + "btn").className + " active"

        if (document.getElementById(index).className.includes("hidden")) {
            var newlist = document.getElementById(index).className.replace("hidden", "")
            document.getElementById(index).className = newlist;
        };

        carouselNum = index;
    }

    return (
        <div className='px-5 mx-5 pt-5 border border-solid border-white rounded-xl md:block 2xs:hidden'>
            <div className="slidecontent">
                <div id="1" className="">
                    <p className="text-xl roboto text-left">Broadway (Duo Project Semester 4)</p> <br />
                    <div className='grid grid-cols-3'>
                        <div className="col-span-2 text-lg px-7">
                            Broadway is a progressive web app which allows users to control their Spotify player with their voice. This project was specifically aimed at people
                            driving cars, as the assignment stated to make it safer for drivers to control their music without having to move their focus off the road.
                            Aside from the music controls, the app was set to include an AI companion, to keep drivers company by having conversations, and traffic information.<br /><br />
                            Basic playback control options were provided, such as play/pause, next/previous, volume control, and toggling shuffle and repeat. The app is also
                            available in both Dutch and English, which also includes voice commands.<br /> <br />
                            The app was made using React.js, and uses the Spotify API to get user data from their active Spotify session, as the app requires users to log in with their
                            Spotify account to use it. The voice recognition was handled using the React Speech Recognition package. Finally, GitHub was used for version control. <br /> <br />
                            To learn more about our target audience, we interviewed some people who listen to music while driving about how they currently do so, what they like about their
                            current method, and what they don't like about it. After which we researched both compact UI's and hands-free UI's, and created a storyboard to visualise our
                            ideas.
                        </div>
                        <div className="col-span-1 px-3">
                            <img src={broadway} alt="broadway"></img>
                        </div>
                    </div>
                </div>
                <div id="2" className="hidden">
                    <p className="text-xl roboto text-left">Art Detective (Duo Project Semester 4)</p> <br />
                    <div className='grid grid-cols-3'>
                        <div className="col-span-2 text-lg px-7">
                            Art Detective is an Android app which can recognise paintings from pictures using machine learning technology. All the user has to do is take a picture of
                            a painting, then possibly crop said picture if necessary, and voila. The user would then be provided with the name and artist of the painting, and get the
                            option to learn more about either the painting or artist by redirecting the user to a Google search. The original concept also included music and movie
                            recognition, to cover more art forms than just paintings. <br /> <br />
                            The app was made in Android Studio using Jetpack Compose. For the image recognition part, I made a TensorFlow Lite model to recognise 10 different paintings,
                            which I then incorporated into the app. GitHub was used as a version management tool. <br /> <br />
                            As for research, we first looked into possible image recognition methods and tools, existing apps that are similar, and how we could personalise the experience.
                            We made a persona to help understand the needs of our target audience, and then brainstormed ideas for the app before starting development.

                        </div>
                        <div className="col-span-1 px-3">
                            <img src={art} alt="art detective"></img>
                        </div>
                    </div>
                </div>
                <div id="3" className="hidden">
                    <p className="text-xl roboto text-left">iO Colleague Tracker (Group Project Semester 3)</p> <br />
                    <div className='grid grid-cols-3'>
                        <div className="col-span-2 text-lg px-7">
                            A project commisioned by iO digital situated in Eindhoven, this app was made to allow iO staff to see whether or not their colleagues were present at
                            the office, or working from home. This was determined through both manual input from the users, as well as WiFi logs provided to us by iO. Using these,
                            we could determine whether someone was at the office by checking if their device's MAC-address was present in the logs. You could also set a timespan during
                            which you would be present at the office. You could notify a colleague when you needed them for something, after which they would receive a push-notification
                            on their phone. <br /> <br />
                            This project was made using the Ionic React framework for the front-end, and SpringBoot Java plus a MySQL database for the back-end. I was responsible for
                            the front-end, so I did not come into contact with the back-end aside from API calls. Notifications were handled using FireBase, and Google SSO was used for
                            logging in. <br /> <br />
                            In terms of project management, we used Scrum, which included a Jira board, daily stand-ups, stakeholder meetings, sprints and retrospectives.
                            We also used GitHub as our version management system. FireBase was used to distribute prototype versions of our app to the stakeholders for testing and
                            feedback, and a CI/CD pipeline was made for both getting the back-end online, and building the app.
                        </div>
                        <div className="col-span-1 px-3">
                            <img src={io} alt="io colleague tracker"></img>
                        </div>
                    </div>

                </div>
                <div id="4" className="hidden">
                    <p className="text-xl text-left roboto">Tartarus Simulator (Individual Project Semester 3)</p> <br />
                    <div className='grid grid-cols-2'>
                        <div className="col-span-1 text-lg px-7">
                            Tartarus Simulator is a turn-based dungeon crawling RPG game I made, which was fully playable in your browser. The game was hosted on a website I made for
                            it, on which you could also find updates and guides for the game, as well as find other players. The game and site would interact in a multitude of ways,
                            such as for saving, multiplayer interactions and resource management. An admin front-end was also made for managing updates and announcements displayed
                            on the site.
                        </div>
                        <div className="col-span-1 px-3">
                            <img src={tts} alt="tartarus simulator"></img>
                        </div>
                    </div>
                    <div className="text-lg px-7 py-4">
                        The front-end of the site was made using React.js, while the back-end was an ASP.NET Core API written in C#, and used a MySQL database. The game was made in
                        Unity. For the interactions between the game and site, the package React Unity WebGL was used. I had set up GitHub repositories for the front- and back-ends,
                        both of which had their own CI/CD pipelines which deployed builds to a DockerHub repository, and in the case of the back-end, also performed unit- and
                        integration tests, and ran a code scan by using SonarCloud. The app had users create an account using Google SSO to save their progress and interact with
                        other players, however people without an account could still play the game as a guest.
                    </div>
                </div>
                <div id="5" className="hidden">
                    <p className="text-xl roboto text-left">Rockstars IT Content Sharing Platform (Group Project Semester 2)</p> <br />
                    <div className="text-lg px-7">
                        This was a project commisioned by Rockstars IT. It involved creating a platform on which Rockstars IT could share their content in the form of articles,
                        podcasts and videos, as well as display their staff categorised into groups called tribes. <br /> <br />
                        This was a project split across two groups, one for the front-end and one for the back-end, and I was on the back-end team. This back-end still came with
                        an admin front-end though. This was made using ASP.NET Core MVC, with a MySQL database backing it. We had set up a GitHub repository too. <br /> <br />
                        Scrum was used throughout the project, which involved a Jira board, daily stand-ups, stakeholder meetings, sprints and retrospectives.
                    </div>
                    <br />
                    <div className="px-3">
                        <img src={rockstars} alt="rockstars it content sharing"></img>
                    </div>
                </div>
                <div id="6" className="hidden">
                    <p className="text-xl roboto text-left">The Shelves (Individual Project Semester 2)</p> <br />
                    <div className="text-lg px-7">
                        The Shelves is an application that allows users to track and manage their video game collection. It provides users with an overview of several statistics
                        such as their collections total size or worth, as well as providing information about individual pieces. It also comes with a wishlist feature, and a log
                        feature so users can see how their collection has grown overtime. <br /> <br />
                        This was made using ASP.NET Core MVC written in C#, with a MySQL database. The project had a three-layer architecture, those being presentation,
                        business logic and data access, and was written to adhere to the object oriented- and SOLID principles.
                    </div>
                    <br />
                    <div className="px-3">
                        <img src={shelves} alt="the shelves"></img>
                    </div>
                </div>
            </div>
            <div className="slidecontrols pt-3 my-3 border-t border-solid border-white">
                <input type="button" className='navlink' onClick={() => showSlide(carouselNum - 1)} value="<" />
                <button className='navlink active' id="1btn" onClick={() => showSlide(1)}>1</button>
                <button className='navlink' id="2btn" onClick={() => showSlide(2)}>2</button>
                <button className='navlink' id="3btn" onClick={() => showSlide(3)}>3</button>
                <button className='navlink' id="4btn" onClick={() => showSlide(4)}>4</button>
                <button className='navlink' id="5btn" onClick={() => showSlide(5)}>5</button>
                <button className='navlink' id="6btn" onClick={() => showSlide(6)}>6</button>
                <input type="button" className='navlink' onClick={() => showSlide(carouselNum + 1)} value=">" />
            </div>
        </div>
    )
}

export default ProjectCarousel;