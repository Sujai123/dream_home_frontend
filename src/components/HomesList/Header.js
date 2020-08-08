import React, { useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import Logo from "../../logo";
import styles from "./homesList.module.css"

const Header = () => {

  return (
    <Box>
      <Box bgcolor="primary.main" padding="8px 16px" display="flex" alignItems="baseLine">
        <Typography style={{ marginRight: "16px", padding: "5px 0px", fontSize: "20px" }} color="textSecondary">house-owner.in</Typography>
        <Box marginLeft="auto"><TextField id="standard-basic" label="Search..." variant="outlined" color="secondary" size="small" />
        <Button color="primary" variant="contained" style={{ border: "2px solid green", height: "40px",marginLeft: "20px" }}>Search</Button>
        </Box>
      </Box>
      <Box padding="64px 32px" className={styles.image}>
        <Typography variant="h1" component="h2" gutterBottom color="textSecondary">House Owner</Typography>
        <Typography color="textSecondary">Become the owner of your Dream house</Typography>
      </Box>
    </Box>
  )
}

export default Header;