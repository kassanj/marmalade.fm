import React from 'react';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

function App() {
  return (
    <div>
      <div className="flex-l justify-end">
        <FeaturedMix />
        <div className="w-50-l relative z-1">
          <Header />
        </div>
      </div>
      <iframe
        width="100%"
        height="60"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Fboards-of-canada-societas-x-tape-warp-30-23rd-june-2019%2F"
        frameBorder="0"
        className="player db fixed bottom-0"></iframe>
    </div>
  );
}

export default App;
