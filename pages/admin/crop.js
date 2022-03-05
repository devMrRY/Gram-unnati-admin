import React, { useEffect } from "react";
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
import { CropProvider, useCropContext } from "../../context/providers/crop";
import { getCrops } from "../../context/actions/crop";

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

function Crop() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [CropData, dispatch] = useCropContext();

  useEffect(() => {
    getCrops()(dispatch);
  }, [])

  const makeData = () => {
    let data = [];
    if(CropData?.crops && Array.isArray(CropData.crops) && CropData.crops.length){
      data = CropData.crops.map((crp, i) => (
        [i + 1, crp.name, crp.category]
      ))
    }
    return data;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="white">
            <Typography variant="h6">Search Crop</Typography>
            <Box mt={2} mb={2}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <TextField margin="dense" fullWidth variant="outlined" label="Name" />
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <TextField margin="dense" fullWidth variant="outlined" label="Category" />
                </GridItem>
              </GridContainer>
            </Box>
            <Button variant="contained" className={classes.submitBtn}>Submit</Button>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="themeBlue"
              tableHead={["Sr No.", "Name", "Category"]}
              tableData={makeData()}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}


const CropComponent = (props) => <CropProvider><Crop {...props} /></CropProvider>

CropComponent.layout = Admin;
CropComponent.AuthRequired = false;

export default CropComponent;
