import {Fragment} from "react";
import Head from "next/head";
import {getFeaturedPosts} from "../utils/posts";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Kien' Fast Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
