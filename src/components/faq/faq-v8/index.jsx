import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccordionItem from "../../faq/accordion-item";

Faq.propTypes = {
  data: PropTypes.array,
};

function Faq(props) {
  const { data } = props;
  const [dataTitle] = useState({
    title: "FaQs",
    desc: "Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others.",
  });

  const [dataTab] = useState([
    {
      id: 1,
      title: "General",
    },
    {
      id: 2,
      title: "Token sales",
    },
    {
      id: 3,
      title: "Legal",
    },
    {
      id: 4,
      title: "Road map",
    },
  ]);

  return (
    <section className="dashboard faq">
      <div className="dashboard__content">
        <div className="dashboard__main">
          <section className="section-faq style-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-md-12">
                  <div className="faq__content">
                    <div className="block-text">
                      <h2 className="heading">{dataTitle.title}</h2>
                      <p className="fs-17">{dataTitle.desc}</p>
                    </div>
                    <Tabs>
                      <TabList className="menu-tab">
                        {dataTab.map((data) => (
                          <Tab key={data.id}>
                            <h5>{data.title}</h5>
                          </Tab>
                        ))}
                      </TabList>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(0, 4).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(4, 8).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(8, 12).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(12, 16).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(16, 20).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12">
                  <div className="faq__images">
                    <Image
                      src={require("../../../assets/images/layout/faq.png")}
                      alt="ICOLand"
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Faq;
