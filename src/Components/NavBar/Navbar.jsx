import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';



const Navbar = () => {
      const [open, setOpen] = useState(false);
      const routes = [
            { path: '/', name: 'Home', id: 'home' },
            { path: '/about', name: 'About', id: 'about' },
            { path: '/contact', name: 'Contact', id: 'contact' },
            { path: '/products/:id', name: 'ProductDetail', id: 'productDetail' },
            { path: '*', name: 'NotFound', id: 'notFound' }
      ];


      return (
            <nav>
                  <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                        {
                              open === true ? <RxCross2></RxCross2> : <RiMenu2Fill></RiMenu2Fill>
                        }
                        {/* <RiMenu2Fill className="text-2xl "></RiMenu2Fill> */}
                  </div>
                  <ul className="md:flex">
                        {
                              routes.map(route => <Link keys={route.id} route={route}></Link>)
                        }

                  </ul>

            </nav>
      );
};

export default Navbar;