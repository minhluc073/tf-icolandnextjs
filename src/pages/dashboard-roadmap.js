import React from "react";
import dataRoadmap from "../data/data-roadmap";
import Roadmap from "../components/dashboard/dashboard-roadmap";

function DashboardRoadmap(props) {
  return (
    <>
      <Roadmap data={dataRoadmap} />
    </>
  );
}

export default DashboardRoadmap;
