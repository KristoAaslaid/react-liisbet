import Breadcrumb from "@/components/Common/Breadcrumb";
import Me from "@/components/Me/me";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minust",
  description: "Liisbetist",
  // other metadata
};

const MePage = () => {
  return (
    <>
      <Me />
    </>
  );
};

export default MePage;
