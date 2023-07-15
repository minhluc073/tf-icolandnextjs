import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Listitem from "../../dashboard/list-itemv2";

About.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Allow us to Introduce Ourselves",
  desc: "ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.",
};

const dataList = [
  {
    id: 1,
    number: "01",
    title: "High-Quality Rendered And Equally Affordable Artwork",
  },
  {
    id: 2,
    number: "02",
    title: "Learning, Researching, And Studying The Crypto Market Daily",
  },
  {
    id: 3,
    number: "03",
    title: "The Immersive World Of NFTs With All Its Collectors & Projects",
  },
  {
    id: 4,
    number: "04",
    title: "The Immersive World Of NFTs With All Its Collectors & Projects",
  },
];

function About(props) {
  // const [dataTitle] = useState(
  //     {
  //         title : 'Allow us to Introduce Ourselves',
  //         desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
  //     }
  // )

  // const [dataList] = useState(
  //     [
  //         {
  //             id: 1,
  //             number: '01',
  //             title:'High-Quality Rendered And Equally Affordable Artwork'
  //         },
  //         {
  //             id: 2,
  //             number: '02',
  //             title:'Learning, Researching, And Studying The Crypto Market Daily'
  //         },
  //         {
  //             id: 3,
  //             number: '03',
  //             title:'The Immersive World Of NFTs With All Its Collectors & Projects'
  //         },
  //         {
  //             id: 4,
  //             number: '04',
  //             title:'The Immersive World Of NFTs With All Its Collectors & Projects'
  //         },
  //     ]
  // )

  return (
    <section className="dashboard">
      <div className="dashboard__main">
        <section className="about style-9">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="block-text">
                  <h2 className="title">{dataTitle.title}</h2>
                  <p className="fs-20 mt-16">{dataTitle.desc}</p>
                </div>
                <div className="group-img">
                  <Image
                    src={require("../../../assets/images/layout/item-01.jpg")}
                    alt="ICOLand"
                  />
                  <Image
                    src={require("../../../assets/images/layout/item-02.jpg")}
                    alt="ICOLand"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="about__content">
                  {dataList.map((item) => (
                    <Listitem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
