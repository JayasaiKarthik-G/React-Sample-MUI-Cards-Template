import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import iphone15 from "./assets/iphone15.jpg";
import samsungS24 from "./assets/samsungS24.jpg";
import oneplus12 from "./assets/oneplus12.jpg";
import redmi13 from "./assets/redmiNote13.jpg";

import macbookM3 from "./assets/macbookAirM3.jpg";
import dellXps from "./assets/dellXps15.jpg";
import hpPavilion from "./assets/hpPavilion.jpg";
import lenovo from "./assets/lenovoLegion.jpg";

import ipadAir from "./assets/ipadAir.jpg";
import samsungS9 from "./assets/samsungGalaxyTabS9.jpg";
import xiaomiPad6 from "./assets/xiaomiPad6.jpg";
import lenovoTabP12 from "./assets/lenovoTabP12.jpg";

import './App.css'

function App() {

  let products = {
    mobiles: [
      {
        id: 1,
        name: "iPhone 15",
        price: 79999,
        rating: 4.8,
        img: iphone15
      },
      {
        id: 2,
        name: "Samsung S24",
        price: 74999,
        rating: 4.7,
        img: samsungS24
      },
      {
        id: 3,
        name: "OnePlus 12",
        price: 64999,
        rating: 4.6,
        img: oneplus12
      },
      {
        id: 4,
        name: "Redmi Note 13",
        price: 21999,
        rating: 4.3,
        img: redmi13
      }
    ],

    laptops: [
      {
        id: 5,
        name: "MacBook Air M3",
        price: 124999,
        rating: 4.9,
        img: macbookM3
      },
      {
        id: 6,
        name: "Dell XPS 15",
        price: 139999,
        rating: 4.8,
        img: dellXps
      },
      {
        id: 7,
        name: "HP Pavilion",
        price: 68999,
        rating: 4.5,
        img: hpPavilion
      },
      {
        id: 8,
        name: "Lenovo Legion",
        price: 99999,
        rating: 4.7,
        img: lenovo
      }
    ],

    tablets: [
      {
        id: 9,
        name: "iPad Air",
        price: 59999,
        rating: 4.8,
        img: ipadAir
      },
      {
        id: 10,
        name: "Samsung Galaxy Tab S9",
        price: 69999,
        rating: 4.7,
        img: samsungS9
      },
      {
        id: 11,
        name: "Xiaomi Pad 6",
        price: 28999,
        rating: 4.5,
        img: xiaomiPad6
      },
      {
        id: 12,
        name: "Lenovo Tab P12",
        price: 24999,
        rating: 4.4,
        img: lenovoTabP12
      }
    ]
  };

  let mobiles = products.mobiles.map((item, ind) =>{
    return(
      <Box 
        sx = {{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "5px",
          borderRadius: "10px",
          backgroundColor: "whitesmoke",
          padding: "10px 20px"
        }} key={ind}>
         
        <Box 
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
            overflow: "hidden"
          }}>
          <img 
            src={item.img} 
            alt={item.name}
            style={{width: "250px", height: "100%"}}
          />
        </Box>
        <Typography variant="body1" sx={{fontWeight: "800"}}>
          {item.name}
        </Typography>
        <Typography variant="subtitle1" sx={{fontWeight: "500"}}>
          Price: Rs.{item.price}
        </Typography>
        <Typography variant="subtitle2">
          Rating: {item.rating}
        </Typography>
      </Box>
    )
  })

  let laptops = products.laptops.map((item, ind) =>{
    return(
      <Box 
        sx = {{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "5px",
          borderRadius: "10px",
          backgroundColor: "whitesmoke",
          padding: "10px 20px"
        }} key={ind}>
         
        <Box 
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
            overflow: "hidden"
          }}>
          <img 
            src={item.img} 
            alt={item.name}
            style={{width: "250px", height: "100%"}}
          />
        </Box>
        <Typography variant="body1" sx={{fontWeight: "800"}}>
          {item.name}
        </Typography>
        <Typography variant="subtitle1" sx={{fontWeight: "500"}}>
          Price: Rs.{item.price}
        </Typography>
        <Typography variant="subtitle2">
          Rating: {item.rating}
        </Typography>
      </Box>
    )
  })

  let tablets = products.tablets.map((item, ind) =>{
    return(
      <Box 
        sx = {{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "5px",
          borderRadius: "10px",
          backgroundColor: "whitesmoke",
          padding: "10px 20px"
        }} key={ind}>
         
        <Box 
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
            overflow: "hidden"
          }}>
          <img 
            src={item.img} 
            alt={item.name}
            style={{width: "250px", height: "100%"}}
          />
        </Box>
        <Typography variant="body1" sx={{fontWeight: "800"}}>
          {item.name}
        </Typography>
        <Typography variant="subtitle1" sx={{fontWeight: "500"}}>
          Price: Rs.{item.price}
        </Typography>
        <Typography variant="subtitle2">
          Rating: {item.rating}
        </Typography>
      </Box>
    )
  })

  return (
    <Grid 
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 5px",
        borderRadius: "10px"
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#D5E7F5",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        <Typography variant="h5" sx={{fontWeight: "500"}}>
          Mobile Products
        </Typography>

        <Grid container spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "40px",
            padding: {
              xs: "10px 0px",
              md: "10px 20px"
            },
            borderRadius: "10px",
            backgroundColor: "white"
          }}  
        >
          {mobiles}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#E7E2FF",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        <Typography variant="h5" sx={{fontWeight: "500"}}>
          Laptop Products
        </Typography>

        <Grid container spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "40px",
            padding: {
              xs: "10px 0px",
              md: "10px 20px"
            },
            borderRadius: "10px",
            backgroundColor: "white"
          }}  
        >
          {laptops}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#D7F2E8",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        <Typography variant="h5" sx={{fontWeight: "500"}}>
          Tablet Products
        </Typography>

        <Grid container spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "40px",
            padding: {
              xs: "10px 0px",
              md: "10px 20px"
            },
            borderRadius: "10px",
            backgroundColor: "white"
          }}  
        >
          {tablets}
        </Grid>
      </Grid>
      
    </Grid>
  )
}

export default App
