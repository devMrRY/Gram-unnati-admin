import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/theme/Grid/GridItem.js";
import GridContainer from "components/theme/Grid/GridContainer.js";
import Table from "components/theme/Table/Table.js";
import Card from "components/theme/Card/Card.js";
import CardHeader from "components/theme/Card/CardHeader.js";
import CardBody from "components/theme/Card/CardBody.js";
import { Box, Button, TextField, Typography } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  submitBtn: {
    color: "white",
    backgroundColor: "#043471",
    "&:hover,&:focus": {
      backgroundColor: "#043471",
    }
  },
};

function Collection() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="white">
            <Typography variant="h6">Search Collection</Typography>
            <Box mt={2} mb={2}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <TextField margin="dense" fullWidth variant="outlined" label="Name" />
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <TextField margin="dense" fullWidth variant="outlined" label="Country" />
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <TextField margin="dense" fullWidth variant="outlined" label="City" />
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <TextField margin="dense" fullWidth variant="outlined" label="Salary" />
                </GridItem>
              </GridContainer>
            </Box>
            <Button variant="contained" className={classes.submitBtn}>Submit</Button>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="themeBlue"
              tableHead={["Sr No.", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["2", "Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["3", "Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["4", "Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["5", "Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["6", "Mason Porter", "Chile", "Gloucester", "$78,615"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Collection.layout = Admin;
Collection.AuthRequired = true;

export default Collection;
