import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="" page_title="" bg_image="/assets/img/breadcrumb/blog-bg.jpg" />
        <PostboxArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Blog;
