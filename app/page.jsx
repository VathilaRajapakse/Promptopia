import React from "react";
import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-Powerd Prompts</span>
      </h1>
      <p className="desc text-center">
        Discover the limitless possibilities of AI with Promptopia, the ultimate
        open source tool. Join the AI revolution today with
        Promptopia.
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
