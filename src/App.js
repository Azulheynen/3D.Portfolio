import React, { useContext } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";
import { motion } from "framer-motion";
import CustomRoute  from "./CustomRoute";

import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-portfolio-background bg-cover bg-no-repeat min-h-screen">
          <Header />
          <AnimRoutes />
        </div>
      </Router>

      <motion.div></motion.div>
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color="250, 101, 60"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default App;
