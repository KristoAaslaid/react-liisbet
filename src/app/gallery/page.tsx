import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery/gallery";

import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Liisbeti galerii",
  description: "Liisbeti galerii",
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
