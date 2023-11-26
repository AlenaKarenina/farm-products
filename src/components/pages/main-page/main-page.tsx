import React from "react";
import About from "./../../blocks/about/about";
import FeaturesList from "./../../blocks/features-list/features-list";
import { Features } from "../../../types/features";

type MainPageProps = {
  features: Features;
}

function MainPage({ features }: MainPageProps): JSX.Element {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
