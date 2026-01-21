/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/hero-background.png";

const imageAltText = "Modern abstract technology background with glowing gradients";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "100%", padding: "2rem" }}>
        <h1>{name}</h1>
        <h2 style={{ color: "#fff" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} className="arrow-down" style={{ height: "3rem", width: "3rem", filter: "invert(1)" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
