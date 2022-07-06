/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router, Routes } from "solid-app-router";

import './index.css';
import App from './App';
import Service from './components/service'
import Docs from './components/docs'

/* render(() => <App />, document.getElementById('root') as HTMLElement); */
render(
    () => (
      <Router>
        <Routes>
          <Route path="/" component={App} />
          <Route path="/service" component={Service} />
          <Route path='/docs' component={Docs}/>
        </Routes>
      </Router>
    ),
    document.getElementById("root") as HTMLElement
  );