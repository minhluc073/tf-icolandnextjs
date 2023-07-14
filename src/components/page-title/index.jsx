import React from 'react';
import PropTypes from 'prop-types';


PageTitle.propTypes = {
    title: PropTypes.string,
};

function PageTitle(props) {

    const {title} = props;
    const {desc} = props;

    return (
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <h2 className="title">{title}</h2>
                            <p className="desc">{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;