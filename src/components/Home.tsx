import * as React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
const Home = () => {
  return (
    <div className="AppHome container">
      <div id="mascara">
        <TypistLoop interval={3000}>
        {["a brazilian full stack developer."].map(text =>
          <Typist key={text} startDelay={1000} className="boasVindasText">
            <p>Hi!</p>
            I'm Rayan Diniz
            <Typist.Backspace count={11} />
            {text}
          </Typist>
        )}
        </TypistLoop>
      </div>
    </div >
  )
}
export default Home;