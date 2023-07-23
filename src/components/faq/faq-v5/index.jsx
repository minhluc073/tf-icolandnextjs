import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import Image from "next/image";
import AccordionItem from "../accordion-item";

Faq.propTypes = {
  data: PropTypes.array,
};

function Faq(props) {
  const { data } = props;
  const [dataTitle] = useState({
    title: "Frequently asked question ",
    subtitle: "FAQS",
  });

  const [dataTab] = useState([
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
  ]);

  return (
    <section className="section-faq style-2" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div
              className="faq__content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="block-text">
                <h6 className="sub-heading">{dataTitle.subtitle}</h6>
                <h3 className="heading">{dataTitle.title}</h3>
              </div>

              <div className="flat-tabs">
                <Tabs>
                  <TabList className="menu-tab">
                    {dataTab.map((data) => (
                      <Tab key={data.id}>
                        <h6>{data.title}</h6>
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanel className="content-tab animation-tab">
                    <div className="content-inner flat-accordion">
                      {data.slice(22, 26).map((item) => (
                        <AccordionItem key={item.id} item={item} />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel className="content-tab animation-tab">
                    <div className="content-inner flat-accordion">
                      {data.slice(10, 14).map((item) => (
                        <AccordionItem key={item.id} item={item} />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel className="content-tab animation-tab">
                    <div className="content-inner flat-accordion">
                      {data.slice(14, 18).map((item) => (
                        <AccordionItem key={item.id} item={item} />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel className="content-tab animation-tab">
                    <div className="content-inner flat-accordion">
                      {data.slice(18, 22).map((item) => (
                        <AccordionItem key={item.id} item={item} />
                      ))}
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="faq__images">
              <Image
                src={require("../../../assets/images/layout/faq-5.png")}
                alt="image"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
