import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Kien.jpg"
          alt="An image showing Kien"
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <h1>Hi, I'm Kien</h1>
      <p>
        I blog about web development - especially <br /> frontend frameworks
        (React or Vue) <br /> and backend frameworks (Express or Nest)
      </p>
    </section>
  );
};

export default Hero;
