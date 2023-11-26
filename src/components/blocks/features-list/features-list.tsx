import React from "react";
import FeatureCard from "../../ui/feature-card/feature-card";
import "./style.css";
import { Features } from "../../../types/features";
import Button from "../../ui/button/button";
import Title, { TitleSize } from "../../ui/title/title";

type FeaturesListProps = {
  features: Features
}

function FeaturesList({ features }: FeaturesListProps) {
  return features && features.length ? (
    <section className="features">
      <Title size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
      <ul className="features__list">
        {features.map((feature) => (
          <li className="features__item" key={feature.id}>
            <FeatureCard feature={feature} />
          </li>
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}

export default FeaturesList;
