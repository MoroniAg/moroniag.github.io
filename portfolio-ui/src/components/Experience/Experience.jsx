import React from "react";
import { useTranslation } from "react-i18next";
import CardExperience from "./CardExperience";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16 mb-8 w-full h-full">
      <CardExperience
        mode="project"
        data={t("experience.portfoliov2", { returnObjects: true })}
      />
      <CardExperience
        mode="work"
        data={t("experience.dwconsulware", { returnObjects: true })}
      />
      <CardExperience
        mode="project"
        data={t("experience.feriaproject", { returnObjects: true })}
      />
      <CardExperience
        mode="work"
        data={t("experience.cumorah", { returnObjects: true })}
      />
      <CardExperience
        mode="project"
        data={t("experience.portfoliov1", { returnObjects: true })}
      />
      <CardExperience
        mode="work"
        data={t("experience.phcodes", { returnObjects: true })}
      />
      <CardExperience
        mode="work"
        data={t("experience.emunay", { returnObjects: true })}
      />
      <CardExperience
        mode="project"
        data={t("experience.inventory", { returnObjects: true })}
      />
      <CardExperience
        mode="work"
        data={t("experience.cumorahv1", { returnObjects: true })}
      />
    </div>
  );
}
