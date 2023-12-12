import videoBg from "../assets/vid/Hero.mp4";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section__overlay"></div>
        <video
          src={videoBg}
          className="hero-section__video"
          autoPlay
          loop
          muted
          width={"100%"}
          playsinline
        />

        <div className="hero-section__content">
          <h1>
            Welcome to <span>Time Casuple</span>
          </h1>
          <p>
            Where we hold our <span>brainless memories</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
