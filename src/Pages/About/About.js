import React from "react";
import "./About.css";
const About = () => {
  return (
    <main className="aboutPage">
      <section className="aboutSection">
        <header className="title">About Website</header>
        <p className="text">
          Well! It's just a simple reactJS website which uses CocktailDB api
          under the hood and let's you search your favorite cocktail.Here You
          can find details of the cocktails and it's ingredients.
          <br />
          That's All
        </p>
        <footer className="footer">&copy; Abhinav Jha </footer>
      </section>
    </main>
  );
};

export default About;
