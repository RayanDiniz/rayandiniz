import * as React from "react";
import Typist from "react-typist";
const Home = () => {
  return (
    <div className="AppHome container">
      <div id="mascara">

        <Typist startDelay={1000} className="boasVindasText">
          <p>Hi!</p>
          I'm Rayan Diniz
          <Typist.Backspace count={11} />
          a brazilian full stack developer.
        </Typist>
      </div>
    </div >
  )
}
export default Home;