import React from "react";
import "./style.css";
import { Features } from "../../../types/features";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";

type PageWrapperProps = {
  features: Features;
}

// Обёртка для контента страниц
function PageWrapper({ features }: PageWrapperProps) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage features={features} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
