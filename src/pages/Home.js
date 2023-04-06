import logo from '../images/diploma.jpg';

function Home() {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 gap-10 bg-gradient-to-br from-black to-neutral-800'>
                    <div className='p-48 text-white col-span-3 h-96'>
                        <label className='text-6xl roboto'>Hello, I'm</label> <br />
                        <label className='text-8xl roboto'>Viggo Seerden</label> <br /><br />
                        <p className='text-left text-3xl'>Studying both general software development and mobile <br /> development at Fontys University of Applied Sciences <br />
                            situated in Eindhoven.</p>
                        <br />
                        <p className='text-left italic text-xl'>(This site is still in development. Please refer to my LinkedIn <br /> page by clicking the icon in the navigation bar above. Thanks!)</p>
                    </div>
                    <div className='text-white grid-end-1 pic'>
                        <img src={logo} className="shadow pic rounded-e-3xl" alt="logo" />
                    </div>
                </div>
            </div>
            <div className='border-t border-solid border-white'> </div>
            <div className='content'>
                <h5 className='text-white'> ↓ Scroll down to learn more ↓ </h5>
            </div>

            {/* ABOUT */}
            <div id="about" className='py-5'></div>
            <div className='content'>
                <label className='name'>About Me</label>
                <br />
                <p>My name is Viggo Seerden. I am a Dutch 18-year old male software development student at Fontys University of Applied Sciences in Eindhoven. <br />
                    I was born on April 26th 2004, live in Weert, and am fluent in both the English and Dutch languages. <br /> <br />
                    I am currently in the second year of my studies, out of four years total, specialising in mobile development at the moment.</p>
                <p>(WIP)</p>
            </div>
            {/* EXPERIENCE */}
            <div id="experience" className='py-5'></div>
            <div className='content'>
                <label className='name'>Experience</label>
                <br />
                <p>(WIP)</p>
            </div>
            {/* CONTACT */}
            <div id="contact" className='py-5'></div>
            <div className='content'>
                <label className='name'>Contact</label>
                <br />
                <p>You can contact me at either my personal mail address, oggivseerden@gmail.com or my student mail address, 491216@student.fontys.nl.</p>
                <p>(WIP)</p>
            </div>
            <br />
            <br />
            <br />
        </div>

    )
}

export default Home;