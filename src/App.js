import React from 'react';
import HomeController from "./controllers/home-controller";
import homeView from "./views/home-view.json";

function App() {
  const props = {
    name: 'homeView',
    classes: 'container-fluid',
    content: homeView,
  };
  return (
    <HomeController {...props} />
  );
}

export default App;
