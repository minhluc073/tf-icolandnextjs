import React from 'react';
import Blogitem from '../components/blog/blog-item6';
import datablog from '../data/data-blog';
import Link from 'next/link';
import PageTitle from '../components/page-title';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer/footer-v2';
import Gotop from '../components/gotop';

function Blogv1(props) {

    return (
        <div className='home-blog backgroup-body'>
                 <Header />
                 <PageTitle title='Blog Style 1' desc='Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue.'  />
                 <section className="blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blog-page__main">
                                    <div className="main-content">
                                        {
                                            datablog.slice(17,24).map (item => (
                                                <Blogitem key={item.id} item={item}/>
                                            ))
                                        }
                                        <div className="button-loadmore">
                                            <Link href="#" className="btn-action-outli style-9"><span>Load More</span></Link>
                                        </div>
                                    </div>
                                    <Sidebar />    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <Gotop/>
        </div>
    );
}

export default Blogv1;