import { BsCheckCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
const Feature = ({ feature }) => {
      return (


            <div className=''>
                  <p className='flex items-center '><BsCheckCircleFill className='text-green-500 mr-2'></BsCheckCircleFill>
                        {feature}</p>

            </div>
      );
};
Feature.propTypes = {
      feature: PropTypes.string
};
export default Feature;