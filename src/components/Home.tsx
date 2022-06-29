import * as React from "react";
import Typed from "react-typed";
const Home = () => {
  return (
    <div className="AppHome container">
      <div id="mascara">

      <Typed  className="boasVindasText"
        strings={[
            "Hi!",
            "I'm Rayan Diniz",
            "A brazilian full stack developer.",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop={true}
      />
      </div>
    </div >
  )
}
export default Home;