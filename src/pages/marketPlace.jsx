import React from 'react';

function MarketPlace() {

localStorage.setItem('pageId', 'marketplace');

	return (
<>
	
</>
  );
}

window.onload = function() {
  const pageId = localStorage.getItem('pageId');
  console.log(pageId);
}


export default MarketPlace;
