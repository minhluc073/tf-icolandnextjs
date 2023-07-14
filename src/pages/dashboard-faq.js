import React from "react";
import Faq from "../components/dashboard/dashboard-faq";
import dataFaq from "../data/data-faq";
function DashboardFaq(props) {
  return (
    <>
      <Faq data={dataFaq} />
    </>
  );
}

export default DashboardFaq;
