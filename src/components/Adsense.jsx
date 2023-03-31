import React from 'react';
import AdSense from 'react-adsense';
 

const Adsense = () => (
<AdSense.Google
  client='ca-pub-1171588080744378'
  slot='8699873320'
  className="iklanGoogle"
  style={{ maxWidth: 300, height: 300 }}
  format=''
/>
);

export default Adsense;