import logo from '../images/diploma.jpg';

function Home() {
    return (
        <div className='content home'>
            <img src={logo} className="App-logo" alt="logo" />
            <label className='hello'>Hello, I'm</label>
            <label className='name'>Viggo Seerden</label>
            <br/>
            <p>Studying both general software development and mobile development at Fontys University of Applied Sciences in Eindhoven.</p>
            <p>(This site is still in development. Please refer to my LinkedIn page by clicking the icon in the navigation bar above. Thanks!)</p>
        </div>
    )
}

export default Home;