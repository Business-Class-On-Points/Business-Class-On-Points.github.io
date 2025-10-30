import "./AboutMe.css";
import headshot from "./Images/Headshot.png";

export function AboutMe() {
  return (
    <div id="AboutMe">
      <div className="split-container">
        <div className="left-box">
          <img src={headshot} id="headshot" />
        </div>
        <div className="right-box">
          <section>
            <div className="HuyPham">
              <h2 className="Intro">David Pham</h2>
              <p className="text">
                {" "}
                <strong>contact</strong>: hatecoachseats@gmail.com{" "}
              </p>
              <hr></hr>
              <p className="text">
                {" "}
                After two decades of traveling, I realized that my body can no
                longer endure long-haul flights in coach. Over the past five
                years, I’ve explored countless strategies to secure flatbed
                seats for a fraction of the cost—or even for free. I've
                perfected the art of using frequent flyer miles and credit card
                points to book business or first class tickets without paying
                anything beyond taxes. <br></br> <br></br>I specialize in
                maximizing frequent flyer miles through airline loyalty
                programs, credit card bonuses, and strategic point transfers. My
                expertise allows you to transform everyday spending into
                luxurious flights.
                <br></br> <br></br>{" "}
                <strong>Not all credit cards are created equal</strong>. Some
                unlock exclusive benefits like airport lounges, priority
                boarding, and even business class seats. Let me guide you
                through this complex landscape.{" "}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
