import "./Home.css"
import image from './Images/Logo.png'

export function Home(){
    console.log("Home component rendered");
    return(
         <div id = "For-Pad">
            <div id = "Home">
                <div className="split-container">
                    <div className="left-box">
                    <h3 id = "Statement">Are you ready to turn your everyday <br/> spending into flights?</h3>
                        <section className = "BigDraw">
                            <div id = "Learn">
                            <section className = "individualBox">
                                <h2>Learn</h2>
                                <hr></hr>
                                <p>Discover the secrets of maximizing your frequent flyer miles and credit card rewards. Understand how to navigate complex credit card programs, identify lucrative point-earning opportunities, and turn your everday spending into business class tickets.</p>
                            </section>
                            </div>
                            <div id = "Earn">
                            <section className = "individualBox">
                                <h2>Earn</h2>
                                <hr></hr>
                                <p>Leverage credit card sign-up bonuses, category spending multipliers, and airline partnerships to rapidly accumulate miles and points. Unlock access to exclusive airport lounges and priority boarding.</p>
                                </section>
                            </div>
                            <div id = "Enjoy">
                            <section className = "individualBox">
                                <h2>Enjoy</h2>
                                <hr></hr>
                                <p>Fly in a flatbed business or first class seat for the same price as a coach ticket in just six months. Relax in luxury airplane lounges before your fight, enjoying complimentary food, drinks, and amenities before your flight.</p>
                            </section>
                            </div>
                        </section>
                    </div>
                    <div className="right-photo">
                        <div className="logoImage">
                            <img src={image} id="photo"/>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
}