import Image from "next/image";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image
        src="/images/logo.png"
        alt="The Fast Blog logo"
        width={136}
        height={76}
      />
    </div>
  );
};

export default Logo;
