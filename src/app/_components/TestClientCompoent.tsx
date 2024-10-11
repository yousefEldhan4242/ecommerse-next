"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const TestClientCompoent = () => {
  const { t } = useTranslation();

  return <div>{t("header")}</div>;
};

export default TestClientCompoent;
