import Link from "../Link/Link";


const Navbar = () => {

      const routes = [
            { path: '/', name: 'Home', id: 'home' },
            { path: '/about', name: 'About', id: 'about' },
            { path: '/contact', name: 'Contact', id: 'contact' },
            { path: '/products/:id', name: 'ProductDetail', id: 'productDetail' },
            { path: '*', name: 'NotFound', id: 'notFound' }
      ];


      return (
            <nav>
                  <ul className="md:flex">
                        {
                              routes.map(route => <Link keys={route.id} route={route}></Link>)
                        }

                  </ul>

            </nav>
      );
};

export default Navbar;