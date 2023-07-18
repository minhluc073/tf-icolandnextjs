import React from 'react';
import PageTitle from '../components/page-title';
import Header from '../components/header/header-v8';
import Footer from '../components/footer/footer-v2';
import dataIcon from '../data/data-icon';
import Iconitem from '../components/icon';
import Gotop from '../components/gotop';

function Icon(props) {

    return (
        <div className='page-about backgroup-body'>
                 <Header />
                 <PageTitle title='Custom Icon' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
                 <div className="title-style center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>Custom Icon</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-icon bg-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="list-icon">
                                        {
                                            dataIcon.map (item => (
                                                <Iconitem key={item.id} item={item}/>
                                            ))
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <Gotop />
        </div>
    );
}

export default Icon;