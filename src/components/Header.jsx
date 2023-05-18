import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div
          className={`${classes.row} ${classes["v-center"]} ${classes["space-between"]}`}
        >
          <div className={classes.logo}>
            <a href="/">AGENCY.</a>
          </div>
          <div className={classes.nav}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
