import React from 'react';
import './Header.css'; // Correct relative path

const Header = () => {
  return (
    <div className='header-conatiner'>
      {/* <div className='header-logo'> API-HUB</div> */}
    <center>
            <div id='search-box' itemprop='mainEntity' itemscope='itemscope' itemtype='https://schema.org/WebSite'>
            <form action='/search' id='search-fs' itemprop='potentialAction' itemscope='itemscope' itemtype='https://schema.org/SearchAction' method='get' query-input='required'>
            <i aria-hidden='true' class='fa fa-search'></i>
            <input id='search-text' itemprop='query-input' name='q' placeholder='Search here' required='' type='text' value=''/>
            <input name='max-results' type='hidden' value='9'/>
            <button type='submit'>Search</button></form></div>
    </center>
    </div>
  );
};

export default Header;
