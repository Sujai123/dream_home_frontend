import React from 'react'
import { Box, Button, Hidden, Typography, Grid, Paper } from "@material-ui/core"
import ButtonBase from '@material-ui/core/ButtonBase';
import styles from "./homesList.module.css"
import Logo from "../../logo"

function Property({
  name,
  subName,
  address,
  Price,
  occupancy,
  description,
  image,
  postedBy,
  property
}) {
  return (
    <Grid container item xs={12} justify="center">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container direction="column" spacing={2}>
          <Grid container spacing={3} item>
            <Grid item>
              <ButtonBase style={{ width: "100%", height: "auto", maxWidth: "300px", maxHeight: "300px" }}>
                <img alt="complex" src={image} style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6" style={{ fontWeight: "bold" }}>{name}</Typography>
                  <Typography gutterBottom variant="subtitle1">{address}</Typography>
                  <Grid container>
                    <Grid item xs={3}><Typography style={{ fontWeight: "bold" }}>{Price}</Typography></Grid>
                    <Grid item xs={6} style={{ marginLeft: "auto" }}><Typography style={{ fontWeight: "bold" }}>{occupancy}</Typography></Grid>
                  </Grid>
                  <Typography>{description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container style={{borderTop: "1px solid rgba(0, 0, 0, 0.125)"}} alignItems="center">
            <Grid item>
              <Typography>Posted by</Typography>
              <Typography style={{ fontWeight: "bold",textDecoration: "underline" }}>{postedBy}</Typography>
            </Grid>
            <Grid item style={{ marginLeft: "auto" }}>
              <Button
              variant="outlined"
              color="primary"
              >
                Show Properties
          </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Property
