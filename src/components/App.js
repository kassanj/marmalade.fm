import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeaturedMix from './FeaturedMix';
import Header from './Header';


const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
          </div>
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Fboards-of-canada-societas-x-tape-warp-30-23rd-june-2019%2F"
            frameBorder="0"
            className="player db fixed bottom-0"></iframe>
        </div>
      </Router>
    );
  }
}

export default App;
