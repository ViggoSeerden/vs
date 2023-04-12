import ProjectCarousel from '../components/Carousel';
import logo from '../images/pic.webp';

function Home() {

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            document.getElementById("topbtn").style.opacity = 1;
        } else {
            document.getElementById("topbtn").style.opacity = 0;
        }
    }

    function topFunction() {
        document.getElementById("top").scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div>
            <div className='fullscr'>
                <div className='flex justify-center'>
                    <div className='grid w-auto xl:grid-cols-5 lg:grid-cols-6 md:grid-cols-5'>
                        <div className='py-20 sm:20 xs:px-12 2xs:px-5 text-white  xl:col-span-3 lg:col-span-3 md:col-span-2 2xs:col-span-5 gradient'>
                            <label className='fadein lg:text-4xl md:text-2xl xs:text-2xl 2xs:text-xl roboto'>Hello, I'm</label> <br />
                            <label className='fadein lg:text-6xl md:text-4xl xs:text-4xl 2xs:text-2xl roboto'>Viggo Seerden</label> <br /><br />
                            <p className='fadein text-left lg:text-2xl md:text-lg sm:text-xl'>Currently studying both general software development and mobile development at Fontys University of Applied Sciences
                                situated in Eindhoven.</p>
                        </div>
                        <div className='text-white grid-end-1 xl:col-span-2 lg:col-span-3 md:col-span-3 picdiv bggradient' width="100%">
                            <img src={logo} className='pic 2xs:hidden sm:hidden md:block' alt="logo" height="100%" width="100%" />
                        </div>
                    </div>
                </div>
                <div className='border-t border-solid border-white'> </div>
                <div className='content'>
                    <label className='text-xl text-center px-5'>Thank you for visiting! While this site is fully responsive, for the best experience,
                        I highly recommend you view this site on a computer!</label>
                    <br />
                    <br />
                    <button className='text-white no-underline hover:underline text-center 2xs:text-sm xs:text-md sm:text-lg'
                        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })} >
                        ⇩ &nbsp; Scroll down to learn more about me &nbsp; ⇩
                    </button>
                </div>
            </div>

            {/* ABOUT */}
            <div id="about" className='py-3'></div>
            <div className='py-16 lg:px-20 md:px-15 2xs:px-0 text-center grid grid-cols-2 text-white'>
                <div className='grid-end-1 col-span-2 lg:px-24 2xs:px-12'>
                    <label className='text-6xl roboto'>About Me</label>
                    <br />
                    <br />
                    <p className='text-center text-2xl'>My name is Viggo Seerden. I am a Dutch 18-year old male software development student at Fontys University of Applied Sciences
                        in Eindhoven.
                        I was born on April 26th 2004 and live in Weert, Limburg. Before I started studying ICT at Fontys, I got my senior general secondary education (HAVO) diploma
                        at the Philips van Horne, also in Weert. <br /> <br />
                        I am currently in the second year of my studies, out of four years total.
                        Upon starting at Fontys, I was exposed to five different career paths in IT, and experienced first-hand what they entail.
                        Out of all of them, I was most interested in software development, since it's what I enjoyed doing the most,
                        so that's the path I ended up taking for the remainder of my studies, currently also learning mobile development. <br /> <br />
                        I've always had an interest in technology, since I grew up using computers and playing video games for as long as I can remember,
                        so I knew early on in my life that this is the direction I wanted to go in. Aside from general usage, I've done some venturing into more advanced aspects
                        of technology on my own, such as modifying existing applications for use on a smartwatch, creating prototypes of games in Unity, or buying defect game
                        consoles and trying to repair them. <br /> <br />
                    </p>
                    <p className='text-center text-2xl italic'>
                        If you wish to contact me, you can do so by either sending me an e-mail to my personal e-mail address, or by sending me a message on LinkedIn.
                        Both can be found in the navigation bar at the top of the screen.
                    </p>
                </div>
            </div>
            <div className='py-16 text-center flex align-center flex-col w-full'>
                <button className='text-white no-underline hover:underline text-center'
                    onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })} >
                    ⇩ &nbsp; Scroll down to learn about my experience &nbsp; ⇩
                </button>
            </div>
            {/* EXPERIENCE */}
            <div id="experience" className='py-12'></div>
            <div className='text-center flex align-center flex-col w-full text-white'>
                <label className='text-6xl roboto'>Experience</label>
            </div>
            <br />
            <br />
            <div className='grid grid-cols-2 lg:px-32 md:px-12'>
                <div className='col-span-1 text-white'>
                    <ProjectCarousel />
                </div>
                <div className='px-10 lg:py-5 md:text-right 2xs:text-center text-white grid-end-1 md:col-span-1 2xs:col-span-2'>
                    <p className='md:text-right 2xs:text-center text-xl'>Over the course of my ICT studies, I've been able to gain valuable experience with several different programming languages,
                        frameworks, and tools. For most of my time at Fontys, I've built full-stack web applications, but I've also worked on UWP, Android and iOS projects.<br /><br />
                        If you're viewing this on a computer (which I recommend you do), you can see some of the more developed projects I've worked on for school, what they entail,
                        and what technologies and methods were used, on the left-hand side of the screen. <br /> <br />
                        Currently, I'd say my best languages and frameworks include Javascript, React.js, and .NET Framework.
                        It should be noted, however, that I have by no means mastered any programming language or tool, as I am still a student.<br /><br />
                        Outside of IT, I currenly work in a restaurant as a dishwashing machine operator, and have previously worked at a supermarket as a retail salesworker.
                        Furthermore, in terms of speaking languages, I am fluent in both Dutch and English, while also knowing a little German. <br /> <br />
                        For a better overview of my experience and/or skills, please refer to my LinkedIn page.</p>
                </div>
            </div>
            <button onClick={topFunction} id="topbtn" title="Go to top">^</button>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home;