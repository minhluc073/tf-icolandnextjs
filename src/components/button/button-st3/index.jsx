import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import '../styles.scss';


Button.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
};

function Button(props) {
    const {title , path , onClick, addclass} = props;
    return (
        <Link className={`btn-action ${addclass}`} href={path} onClick={onClick}>      
            <span>{title}</span>
            <span className="icon-arrow"></span>
        </Link>
    );
}

export default Button;