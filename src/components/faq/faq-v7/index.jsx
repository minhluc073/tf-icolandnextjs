import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import AccordionItem from "../accordion-item";

Faq.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Frequently asked questions ",
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
    <section className="section-faq style-2" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="faq__images">
              <Image
                src={require("../../../assets/images/layout/faq-h8.png")}
                alt=""
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="faq__content">
              <div className="block-text">
                <h3 className="heading">{dataTitle.title}</h3>
                <p className="fs-17">{dataTitle.desc}</p>
              </div>

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
        </div>
      </div>
    </section>
  );
}

export default Faq;
