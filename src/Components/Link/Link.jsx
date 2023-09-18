import PropTypes from 'prop-types';
const Link = ({ route }) => {
      return (
            <li className="mr-10 text-black px-6 py-3 hover:bg-yellow-500">
                  <a href={route.path}>{route.name}</a>
            </li>
      );
};

Link.propTypes = {
      route: PropTypes.object
};
export default Link;