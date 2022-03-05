import React, { useState } from "react";
import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import Card from "components/theme/Card/Card.js";
import CardBody from "components/theme/Card/CardBody.js";
import GridItem from "components/theme/Grid/GridItem.js";
import GridContainer from "components/theme/Grid/GridContainer.js";
import CardHeader from "./theme/Card/CardHeader";
import Logo from "../assets/img/logo.png";

import { sendOtp, verifyOtp } from '../context/actions/auth';
import { useAuthContext } from "../context/providers/auth";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  card: {
    width: "500px !important",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    '& img': {
        borderRadius: "50%",
    }
  },
  submitBtn: {
      marginTop: "5px",
  }
};

export default function Login() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [AuthData, dispatch] = useAuthContext();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [shwoError, setShowError] = useState(false);

  const handleMobile = (e) => {
    setMobile(e.target.value)
  }

  const handleOtp = (e) => {
    setOtp(e.target.value)
  }

  const handleSubmit = () => {
    setShowError(true);
    if(!mobile || (AuthData.otpSent && !otp)){
      return;
    }
    let payload = {
      mobile,
      otp
    }
    setShowError(false);
    !AuthData.otpSent ? sendOtp(payload)(dispatch) : verifyOtp(payload)(dispatch);
  }

  return (
    <Box className={classes.container}>
      <Card className={classes.card}>
        <CardHeader className={classes.header}>
          <img src={Logo} width="100" height="100" />
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12}>
              <TextField
                margin="dense"
                fullWidth
                variant="outlined"
                value={mobile}
                onChange={handleMobile}
                label="Mobile Number"
                disabled={!!AuthData.otpSent}
                error={shwoError && !mobile}
                helperText={shwoError && !mobile ? 'Mobile Number is required' : ''}
              />
            </GridItem>
            {AuthData.otpSent && <GridItem xs={12}>
              <TextField
                margin="dense"
                fullWidth
                value={otp}
                onChange={handleOtp}
                variant="outlined"
                label="OTP"
                error={shwoError && !otp}
                helperText={shwoError && !otp ? 'OTP is required' : ''}
              />
            </GridItem>}
            <GridItem xs={12}>
              <Button onClick={handleSubmit} variant="contained" size="medium" color="primary" fullWidth className={classes.submitBtn}>
                Submit
              </Button>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </Box>
  );
}
