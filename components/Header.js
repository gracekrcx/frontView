import Link from 'next/link';
import React from 'react';

const Header = () => {
  return(
    <div>
      <Link href="/"> 
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
};

export default Header;