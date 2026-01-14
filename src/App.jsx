// import Hero from "./component/Hero";
// import Navbar from "./component/Navbar";
// import OurWork from "./component/OurWork";
// import WhatWeDo from "./component/WhatWeDo";


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhatWeDo/>
//        <OurWork />
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import OurWork from "./component/OurWork";

const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <OurWork />
  </>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
