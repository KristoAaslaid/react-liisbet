import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery/gallery";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const GalleryPage = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default GalleryPage;
