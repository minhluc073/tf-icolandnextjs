import React, { useState } from "react";
import Button from "../components/button/button-st1";
import Image from "next/image";

// const dataTitle = {
//     title : 'Page not found',
//     desc : 'Duis dolor sit amet, consectetur adipiscing elitvestibulum in pharetra.',
// }

function Page404(props) {
  const [dataTitle] = useState({
    title: "Page not found",
    desc: "Duis dolor sit amet, consectetur adipiscing elitvestibulum in pharetra.",
  });
  return (
    <section className="page-404">
      <div className="container">
        <div className="row">
          <div className="main-404">
            <Image
              src={require("../assets/images/layout/404.png")}
              alt="ICOLand"
            />
            <h2 className="title">{dataTitle.title}</h2>
            <p>{dataTitle.desc}</p>
            <Button title="Back To Homepage" addclass="style-1" path="/" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page404;
