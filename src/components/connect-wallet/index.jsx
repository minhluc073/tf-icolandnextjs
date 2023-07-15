import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

Connectwallet.propTypes = {
    item: PropTypes.object,
};

function Connectwallet(props) {
    const {item} = props;

    return (
        <div className="col-xl-3 col-md-6">
            <div className="connect-box">
                <div className="image">
                    <Image src={item.img} alt="ICOLand" />
                </div>
                <Link href="#" className="h5 title">{item.title}</Link>
                <p className="text">{item.text}</p>
            </div>
        </div>
    );
}

export default Connectwallet;