import Breadcrumb from "@/components/Common/Breadcrumb";
import Me from "@/components/Me/me";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
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
