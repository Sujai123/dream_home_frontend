import React from 'react';
import { Box, Typography, Grid } from "@material-ui/core"
import Property from "./Property";
import styles from "./homesList.module.css"


const properties = [
  {
    name: "Shivani Enclave",
    subName: "by Hindustan multi-state co-operative housing society",
    address: "Vellalur, Coimbatore",
    Price: "Rs.1300/sqft",
    occupancy: "50 out of 150 properties occupied",
    description: "A premium property nearby the heart of the city...",
    image: require("../../assets/pleasant_lookout-wide.jpg"),
    postedBy: "Hindustan multi-state co-operative housing society"
  },
  {
    name: "Coconut Grove",
    subName: "by Raadi's Realty",
    address: "Singanallur, Coimbatore",
    Price: "Rs.1300/sqft",
    occupancy: "50 out of 150 properties occupied",
    description: "A premium property nearby the heart of the city...",
    image: require("../../assets/landscape-1581571098588-3886.jpg"),
    postedBy: "Geethu's Realty Promoters"
  },
  {
    name: "Vriksha Garden",
    subName: "by Real Value Promoters",
    address: "Pattanam Pudur, Coimbatore",
    Price: "Rs.1300/sqft",
    occupancy: "50 out of 150 properties occupied",
    description: "A premium property nearby the heart of the city...",
    image: require("../../assets/avenger-2.jpg"),
    postedBy: "Real Value Promoters"
  },
]

function List() {

  const renderPropertyList = () => {
    return properties.map((property, index) => {
      return (
        <Property key={index} property={property} {...property} />
      )
    })
  }

  return (
    <Grid container justify="center">
      <Grid item container spacing={2} md justify="center" spacing={2}>
        <Grid item><Typography variant="h4" style={{"fontWeight": "700" }}>List view</Typography></Grid>
        {renderPropertyList()}
      </Grid>
    </Grid>
  )
}

export default List
