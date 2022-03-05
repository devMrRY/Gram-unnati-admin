/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/footerStyle.js";

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link href="/admin/dashboard" className={classes.block}>
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/admin/user-management" className={classes.block}>
                User Managment
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/admin/crop" className={classes.block}>
                Crop
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/admin/collection" className={classes.block}>
                Collection
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.creative-tim.com?ref=njsmd-footer"
              target="_blank"
              className={classes.a}
            >
              Gram Unnati
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
