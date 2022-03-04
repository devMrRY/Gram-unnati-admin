/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";

import styles from "assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";

export default function Sidebar(props) {
  const router = useRouter();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }

  function renderChildren(parent){
    return (activeRoute(parent.layout+parent.path) && parent.child && parent.child.map((child, ind) => {
      let listChildItemClasses = classNames({
        [" " + classes[color]]: activeRoute(child.layout + child.path),
      });
      const whiteFontClasses = classNames({
        [" " + classes.whiteFont]: activeRoute(child.layout + child.path)
      });
      return <Link href={child.layout + child.path} passHref key={ind}>
        <a className={classes.item}>
            <ListItem key={ind} button className={classes.itemChildLink + listChildItemClasses}>
              {typeof child.icon === "string" ? (
              <Icon
                className={classNames(classes.itemIcon, whiteFontClasses, {
                  [classes.itemIconRTL]: props.rtlActive,
                })}
              >
                {child.icon}
              </Icon>
            ) : (
              <child.icon
                className={classNames(classes.itemIcon, whiteFontClasses, {
                  [classes.itemIconRTL]: props.rtlActive,
                })}
              />
            )}
            <ListItemText
              primary={child.name}
              className={classNames(classes.itemText, whiteFontClasses, {
                [classes.itemTextRTL]: props.rtlActive,
              })}
              disableTypography={true}
            />
          </ListItem>
        </a>
      </Link>
    }))
  }
  const { color, logo, image, logoText, routes } = props;
  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        let listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <>
            <Link href={prop.layout + prop.path} passHref key={key}>
              <a className={classes.item}>
                <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(classes.itemIcon, whiteFontClasses, {
                        [classes.itemIconRTL]: props.rtlActive,
                      })}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(classes.itemIcon, whiteFontClasses, {
                        [classes.itemIconRTL]: props.rtlActive,
                      })}
                    />
                  )}
                  <ListItemText
                    primary={`${prop.name} ${prop.child ? '>' : ''}`}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </a>
            </Link>
            {renderChildren(prop)}
          </>
        );
      })}
    </List>
  );
  let brand = (
    <div className={classes.logo}>
      <a
        href="/admin/dashboard"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        <span>{logoText}</span>
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {<AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              // style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div className={classes.background} />
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
    "white",
    "purple",
    "blue",
    "green",
    "orange",
    "red",
  ]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
