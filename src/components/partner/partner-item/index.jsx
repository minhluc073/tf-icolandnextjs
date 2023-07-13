import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

PartnerItem.propTypes = {
    item: PropTypes.object,
};

function PartnerItem(props) {
    const {item} = props;

    return (
        <Image src={item.img} alt="ICOLand" />
    );
}

export default PartnerItem;