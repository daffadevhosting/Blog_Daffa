
import React from "react";


function MarketPlace() {

localStorage.setItem('pageId', 'marketplace');

  return (
    <>
    <p className="">
  "Looks like there are no items in this collection.
    </p>
</>
  );
}

window.onload = function() {
  const pageId = localStorage.getItem('pageId');
  console.log(pageId);
}


export default MarketPlace;