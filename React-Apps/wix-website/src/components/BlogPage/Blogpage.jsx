import React from "react";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import FooterPartUi from "../ReusableComponents/FooterPartUi";
import BlogCard from "../ReusableComponents/BlogCard";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import image1 from "../../Images/BolgPage/image1.webp";
import image2 from "../../Images/BolgPage/image2.webp";
import image3 from "../../Images/BolgPage/image3.webp";
import image4 from "../../Images/BolgPage/image4.webp";
import image5 from "../../Images/BolgPage/image5.webp";
import image6 from "../../Images/BolgPage/image6.webp";

function CardsForBlog() {
  return (
    <>
      <NavBarUi />
      <motion.div
        className="col-12 text-center justify-content-center mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Container className="text-center">
          <BlogCard
            img={image1}
            content={
              "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            }
            headline={"The holiday special"}
          />
          <BlogCard
            img={image2}
            content={
              "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            }
            headline={"Simple backdrops for food shots"}
          />
          <BlogCard
            img={image3}
            content={
              "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            }
            headline={"Before the drip"}
          />
          <BlogCard
            img={image4}
            content={
              "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            }
            headline={"Styling your shots"}
          />
          <BlogCard
            img={image5}
            content={
              "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            }
            headline={"The perfect sizzle"}
          />
          <BlogCard
            img={image6}
            content={
              "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            }
            headline={"Eating with your eyes first"}
          />
        </Container>
        <FooterPartUi />
      </motion.div>
    </>
  );
}

export default CardsForBlog;
