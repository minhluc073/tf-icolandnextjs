import PropTypes from 'prop-types';
import Image from 'next/image';

About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <Image src={item.img} alt="ICOLand" />
    );
}

export default About;