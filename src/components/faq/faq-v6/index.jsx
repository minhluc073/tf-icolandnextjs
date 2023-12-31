import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import AccordionItem from "../accordion-item";

Faq.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "FAQs ",
  desc: "Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others.",
};

const dataTab = [
  {
    id: 1,
    title: "General",
  },
  {
    id: 2,
    title: "Token Sales",
  },
  {
    id: 3,
    title: "Legal",
  },
  {
    id: 4,
    title: "Road map",
  },
];

function Faq(props) {
  const { data } = props;

  return (
    <section className="section-faq style-4" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="faq__main">
              <div className="block-text">
                <h2 className="heading">{dataTitle.title} </h2>
                <p className="fs-20">{dataTitle.desc} </p>
              </div>
              <div className="faq__content">
                <div className="flat-tabs">
                  <Tabs>
                    <TabList className="menu-tab">
                      {dataTab.map((data) => (
                        <Tab key={data.id}>
                          <h5>{data.title}</h5>
                        </Tab>
                      ))}
                    </TabList>
                    <TabPanel className="content-tab animation-tab">
                      <div className="content-inner flat-accordion">
                        {data.slice(0, 4).map((item) => (
                          <AccordionItem key={item.id} item={item} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel className="content-tab animation-tab">
                      <div className="content-inner flat-accordion">
                        {data.slice(4, 8).map((item) => (
                          <AccordionItem key={item.id} item={item} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel className="content-tab animation-tab">
                      <div className="content-inner flat-accordion">
                        {data.slice(8, 12).map((item) => (
                          <AccordionItem key={item.id} item={item} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel className="content-tab animation-tab">
                      <div className="content-inner flat-accordion">
                        {data.slice(12, 16).map((item) => (
                          <AccordionItem key={item.id} item={item} />
                        ))}
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
