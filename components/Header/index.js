import React from 'react';
import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
 return (
   <Navbar bg="white" expand="lg" className="border-bottom border-custom-gray">
     <Navbar.Brand className='mx-3'>
       <Link href="/restaurants">
        <a>
           <Image
             src="/logo.png"
             alt="OneBitFood"
             width={200}
             height={44}
             className="clickable_effect"
           />
         </a>
       </Link>
     </Navbar.Brand>
   </Navbar>
)
}

export default Header;