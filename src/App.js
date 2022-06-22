import React from 'react';

import { addComponents } from "dbl-components/lib/js/components";
import { iconSet } from "dbl-components/lib/js/media/icons";

import HomeController from "./controllers/home-controller";
import homeView from "./views/home-view.json";
import Article from "./components/article";

iconSet(require('./frontend-v1.0/selection.json'));
addComponents({ Article });

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
