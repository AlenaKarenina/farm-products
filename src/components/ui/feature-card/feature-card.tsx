import React from "react";
import "./style.css";
import { Feature } from "../../../types/features";
import Title, { TitleSize } from "../title/title";

type FeatureCardProps = {
  feature: Feature
}

function FeatureCard({
  feature
}: FeatureCardProps) {

  const { isNegative, image, title, owner, about } = feature;

  return (
    <section className={`feature${isNegative ? " feature_negative" : ""}`}>
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`feature__owner${
              isNegative ? " feature__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </header>
      <p
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </section>
  );
}

export default FeatureCard;
