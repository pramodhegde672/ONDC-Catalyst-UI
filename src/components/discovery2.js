import * as React from "react";
import Sidenavs from "./sidenav/sidenav";
import {
  Grid,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Rating,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useEffect, useState } from "react";
import {
  topReviews,
  best,
  lowestPrice,
  mostStars,
  more,
} from "../axios/services/HomeServices";
import Divider from "@mui/material/Divider";

function Discovery2() {
  const buttonStyle = {
    borderRadius: "8px",
    background: "var(--foundation-violet-normal, #775DA6)",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "150%",
    textTransform: "none",
    width: "127px",
  };

  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  };

  const [topReviewsdata, topReviewssetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bestdata, bestsetData] = useState([]);
  const [lowestPricedata, lowestPricesetData] = useState([]);
  const [mostStarsdata, mostStarssetData] = useState([]);
  const [moredata, moresetData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetchData();

    async function fetchData() {
      const topReviewsdata = await topReviews();
      console.log("data=======", topReviewsdata);
      topReviewssetData(topReviewsdata.result);
      setLoading(false);
      const bestdata = await best();
      console.log("data=======", bestdata);
      bestsetData(bestdata.result);
      setLoading(false);
      const lowestPricedata = await lowestPrice();
      console.log("data=======", lowestPricedata);
      lowestPricesetData(lowestPricedata.result);
      setLoading(false);
      const mostStarsdata = await mostStars();
      console.log("data=======", mostStarsdata);
      mostStarssetData(mostStarsdata.result);
      setLoading(false);
      const moredata = await more();
      console.log("data=======", moredata);
      moresetData(moredata.result);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Sidenavs />
      <div
        style={{
          marginLeft: "220px",
          // marginBottom: "35px",
          // width: "1020px",
          // height: "850px",
          // borderRadius: "24px",
          // border: "1px solid #DADADA",
          // background: "#FFF",
        }}
      >
        <Grid container style={{ display: "flex" }}>
          <Grid
            item
            xs={8}
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "10px",
              marginTop: "20px",
              // marginLeft: "28px",
            }}
          >
            <TextField
              id="outlined-size-small"
              size="small"
              label="Show me products required for a wedding ceremony"
              variant="outlined"
              style={{
                width: "603px",
                background: "#FFF",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchSharpIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid
            item
            xs={2}
            style={{
              padding: "10px",
              width: "110px",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              // marginLeft: "5px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              style={buttonStyle}
              // onClick={}
            >
              Search
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              padding: "10px 10px 10px 5px",
              width: "110px",
              marginTop: "20px",
              // marginRight: "50px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              style={buttonStyle}

              // onClick={}
            >
              Filters
            </Button>
          </Grid>
        </Grid>
        <Container
          style={{
            width: "1440px",
            height: "100%",
            background: "#F3F4F6",
            marginTop: "27px",
          }}
        >
          <Grid Container>
            <Grid
              item
              xs={6}
              style={{
                paddingTop: "27px",
                paddingLeft: "27px",
                display: "flex",
              }}
            >
              <ErrorOutlineIcon />
              <Typography
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "22px",
                  letterSpacing: "-0.1px",
                  paddingLeft: "12px",
                }}
              >
                2513
              </Typography>
              <Typography
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  letterSpacing: "-0.1px",
                  paddingLeft: "12px",
                }}
              >
                Products found for your query
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ paddingTop: "20px", paddingLeft: "10px" }}
            >
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="one" label="Best" />
                  <Tab value="two" label="Top Reviews" />
                  <Tab value="three" label="Lowest Price" />
                  <Tab value="four" label="Most Stars" />
                  <Tab value="five" label="More" />
                </Tabs>
                <TabPanel value={value} index="one">
                  {/* Content for "Best" Tab */}
                  <Grid Container>
                    {bestdata.map((result, index) => (
                      <Grid
                        item
                        key={index}
                        xs={6}
                        style={{ paddingBottom: "20px" }}
                      >
                        <Card
                          className="carditem"
                          style={{ width: "40%", height: "198px" }}
                        >
                          <CardActionArea>
                            <Grid container>
                              <Grid item xs={4}>
                                <CardMedia
                                  component="img"
                                  image={result.image}
                                  alt="ibis"
                                  style={{
                                    width: "176px",
                                    height: "198px",
                                    borderRadius: "8px 8px 0px opx",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={4}
                                style={{
                                  display: "flex",
                                  width: "231px",
                                  // padding: "12px 0px",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                }}
                              >
                                <CardContent
                                  style={{
                                    paddingTop: "12px",
                                    paddingLeft: "3px",
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "231px",
                                      color: "#000",
                                      fontFamily: "Inter",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      lineHeight: "normal",
                                    }}
                                  >
                                    {result.placeName}
                                  </Typography>
                                  <Typography
                                    style={{
                                      width: "231px",
                                      height: "23px",
                                      color: "#959595",
                                      fontFamily: "Inter",
                                      fontSize: "10px",
                                      fontStyle: "normal",
                                      fontWeight: "400",
                                      lineHeight: "normal",
                                      paddingTop: "6px",
                                    }}
                                  >
                                    {result.address}
                                  </Typography>
                                  <Grid
                                    container
                                    style={{ paddingTop: "26px" }}
                                  >
                                    <Grid item xs={2}>
                                      <Typography
                                        style={{
                                          color: "#000",
                                          fontFamily: "Inter",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: "500",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.ratings}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Rating
                                        name="read-only"
                                        precision={0.5}
                                        size="small"
                                        value={result.ratings}
                                        readOnly
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Typography
                                        style={{
                                          color: "#ABABAB",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.reviews}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    style={{
                                      height: "1px",
                                      width: "230px",
                                      marginTop: "12px",
                                      border: "none",
                                      borderBottom: "2px dotted #D8D8D8",
                                    }}
                                  />
                                </CardContent>
                                {/* <CardActions>
                                  <Button size="small" color="primary">
                                    See detail
                                  </Button>
                                </CardActions> */}
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index="two">
                  {/* Content for "Top Reviews" Tab */}
                  <Grid Container>
                    {topReviewsdata.map((result, index) => {
                      return (
                        <Grid
                          item
                          key={index}
                          xs={6}
                          style={{ paddingBottom: "20px" }}
                        >
                          <Card
                            className="carditem"
                            style={{ width: "41%", height: "198px" }}
                          >
                            <CardActionArea>
                              <Grid container>
                                <Grid item xs={4}>
                                  <CardMedia
                                    component="img"
                                    image={result.image}
                                    alt="ibis"
                                    style={{
                                      width: "176px",
                                      height: "198px",
                                      borderRadius: "8px 8px 0px opx",
                                    }}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs={5}
                                  style={{
                                    display: "flex",
                                    width: "231px",
                                    // padding: "12px 0px",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                  }}
                                >
                                  <CardContent
                                    style={{
                                      paddingTop: "12px",
                                      paddingLeft: "0px",
                                      paddingBottom: "0px",
                                      paddingRight: "0px",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                  >
                                    <Grid Container>
                                      <Grid item xs={8}>
                                        <Typography
                                          style={{
                                            width: "231px",
                                            color: "#000",
                                            fontFamily: "Inter",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            lineHeight: "normal",
                                          }}
                                        >
                                          {result.placeName}
                                        </Typography>
                                      </Grid>

                                      <Grid item xs={8}>
                                        <Typography
                                          style={{
                                            width: "231px",
                                            height: "23px",
                                            color: "#959595",
                                            fontFamily: "Inter",
                                            fontSize: "10px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "normal",
                                            paddingTop: "6px",
                                          }}
                                        >
                                          {result.address}
                                        </Typography>
                                      </Grid>

                                      <Grid
                                        container
                                        style={{ paddingTop: "26px" }}
                                      >
                                        <Grid item xs={2}>
                                          <Typography
                                            style={{
                                              color: "#000",
                                              fontFamily: "Inter",
                                              fontSize: "12px",
                                              fontStyle: "normal",
                                              fontWeight: "500",
                                              lineHeight: "normal",
                                              paddingTop: "3px",
                                            }}
                                          >
                                            {result.ratings}
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                          <Rating
                                            name="read-only"
                                            precision={0.5}
                                            size="small"
                                            value={result.ratings}
                                            readOnly
                                          />
                                        </Grid>
                                        <Grid item xs={3}>
                                          <Typography
                                            style={{
                                              color: "#ABABAB",
                                              fontFamily: "Inter",
                                              fontSize: "10px",
                                              fontStyle: "normal",
                                              fontWeight: "400",
                                              lineHeight: "normal",
                                              paddingTop: "3px",
                                            }}
                                          >
                                            {result.reviews}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>

                                    <Divider
                                      style={{
                                        height: "1px",
                                        width: "220px",
                                        marginTop: "18px",
                                        border: "none",
                                        borderBottom: "2px dotted #D8D8D8",
                                      }}
                                    />
                                  </CardContent>

                                  {/* <CardActions>
                                  <Button size="small" color="primary">
                                    See detail
                                  </Button>
                                </CardActions> */}
                                </Grid>
                                <Grid
                                  item
                                  xs={3}
                                  style={{ borderLeft: "1px solid #C8CFDA" }}
                                >
                                  <Grid Container>
                                    <Grid item xs={12}>
                                      {result.greatprice ? (
                                        <Box
                                          style={{
                                            display: "flex",
                                            width: "80px",
                                            height: "20px",
                                            padding: "4px",
                                            marginLeft: "6px",
                                            marginTop: "8px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "8px",
                                            borderRadius: "4px",
                                            backgroundColor: "#005FFE",
                                          }}
                                        >
                                          <Typography
                                            style={{
                                              color: "#FFF",
                                              fontFamily: "Inter",
                                              fontSize: "10px",
                                              fontStyle: "normal",
                                              fontWeight: "600",
                                              lineHeight: "22px",
                                              letterSpacing: "-0.1px",
                                            }}
                                          >
                                            {result.greatprice}
                                          </Typography>
                                        </Box>
                                      ) : (
                                        <div
                                          style={{ marginTop: "28px" }}
                                        ></div>
                                      )}
                                    </Grid>
                                    <Grid item xs={12}>
                                      <CardMedia
                                        component="img"
                                        image={result.logo}
                                        alt="logo"
                                        style={{
                                          width: "60%",
                                          height: "25px",
                                          marginLeft: "6px",
                                          marginTop: "5px",
                                        }}
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      style={{ display: "flex" }}
                                    >
                                      <del
                                        style={{
                                          width: "40px",
                                          color: "#FE007A",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "normal",
                                          marginTop: "5px",
                                          marginLeft: "6px",
                                        }}
                                      >
                                        {result.originalprice}
                                      </del>
                                      <Typography
                                        style={{
                                          color: "#FE007A",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "700",
                                          lineHeight: "normal",
                                          marginTop: "5px",
                                        }}
                                      >
                                        {result.discount}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      style={{ display: "flex" }}
                                    >
                                      <Typography
                                        style={{
                                          color: "#000",
                                          fontFamily: "Inter",
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: "700",
                                          lineHeight: "135.023%",
                                          marginTop: "10px",
                                          marginLeft: "6px",
                                        }}
                                      >
                                        {result.price}
                                      </Typography>
                                      <Typography
                                        style={{
                                          color: "#BCBCBC",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "135.023%",
                                          marginTop: "15px",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        {result.pricedesc1}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        style={{
                                          color: "#BCBCBC",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "135.023%",
                                          marginLeft: "3px",
                                        }}
                                      >
                                        {result.pricedesc2}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        style={{
                                          color: "#BCBCBC",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "135.023%",
                                          marginTop: "12px",
                                          marginLeft: "3px",
                                        }}
                                      >
                                        {result.desc}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      {result.buttonname ? (
                                        <CardActions onClick={() => {}}>
                                          <Button
                                            variant="contained"
                                            style={{
                                              width: "139px",
                                              height: "24px",
                                              backgroundColor: "#775DA6",
                                            }}
                                          >
                                            <Typography
                                              style={{
                                                color: "#FFF",
                                                fontFamily: "Inter",
                                                fontSize: "10px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                lineHeight: "22px",
                                                letterSpacing: "-0.1px",
                                              }}
                                            >
                                              {result.buttonname}
                                            </Typography>
                                          </Button>
                                        </CardActions>
                                      ) : (
                                        ""
                                      )}
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index="three">
                  {/* Content for "Lowest Price" Tab */}
                  <Grid Container>
                    {lowestPricedata.map((result, index) => (
                      <Grid
                        item
                        key={index}
                        xs={6}
                        style={{ paddingBottom: "20px" }}
                      >
                        <Card
                          className="carditem"
                          style={{ width: "40%", height: "198px" }}
                        >
                          <CardActionArea>
                            <Grid container>
                              <Grid item xs={4}>
                                <CardMedia
                                  component="img"
                                  image={result.image}
                                  alt="ibis"
                                  style={{
                                    width: "176px",
                                    height: "198px",
                                    borderRadius: "8px 8px 0px opx",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={4}
                                style={{
                                  display: "flex",
                                  width: "231px",
                                  // padding: "12px 0px",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                }}
                              >
                                <CardContent
                                  style={{
                                    paddingTop: "12px",
                                    paddingLeft: "3px",
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "231px",
                                      color: "#000",
                                      fontFamily: "Inter",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      lineHeight: "normal",
                                    }}
                                  >
                                    {result.placeName}
                                  </Typography>
                                  <Typography
                                    style={{
                                      width: "231px",
                                      height: "23px",
                                      color: "#959595",
                                      fontFamily: "Inter",
                                      fontSize: "10px",
                                      fontStyle: "normal",
                                      fontWeight: "400",
                                      lineHeight: "normal",
                                      paddingTop: "6px",
                                    }}
                                  >
                                    {result.address}
                                  </Typography>
                                  <Grid
                                    container
                                    style={{ paddingTop: "26px" }}
                                  >
                                    <Grid item xs={2}>
                                      <Typography
                                        style={{
                                          color: "#000",
                                          fontFamily: "Inter",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: "500",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.ratings}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Rating
                                        name="read-only"
                                        precision={0.5}
                                        size="small"
                                        value={result.ratings}
                                        readOnly
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Typography
                                        style={{
                                          color: "#ABABAB",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.reviews}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    style={{
                                      height: "1px",
                                      width: "230px",
                                      marginTop: "12px",
                                      border: "none",
                                      borderBottom: "2px dotted #D8D8D8",
                                    }}
                                  />
                                </CardContent>
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>

                <TabPanel value={value} index="four">
                  {/* Content for "Most Stars" Tab */}
                  <Grid Container>
                    {mostStarsdata.map((result, index) => (
                      <Grid
                        item
                        key={index}
                        xs={6}
                        style={{ paddingBottom: "20px" }}
                      >
                        <Card
                          className="carditem"
                          style={{ width: "40%", height: "198px" }}
                        >
                          <CardActionArea>
                            <Grid container>
                              <Grid item xs={4}>
                                <CardMedia
                                  component="img"
                                  image={result.image}
                                  alt="ibis"
                                  style={{
                                    width: "176px",
                                    height: "198px",
                                    borderRadius: "8px 8px 0px opx",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={4}
                                style={{
                                  display: "flex",
                                  width: "231px",
                                  // padding: "12px 0px",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                }}
                              >
                                <CardContent
                                  style={{
                                    paddingTop: "12px",
                                    paddingLeft: "3px",
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "231px",
                                      color: "#000",
                                      fontFamily: "Inter",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      lineHeight: "normal",
                                    }}
                                  >
                                    {result.placeName}
                                  </Typography>
                                  <Typography
                                    style={{
                                      width: "231px",
                                      height: "23px",
                                      color: "#959595",
                                      fontFamily: "Inter",
                                      fontSize: "10px",
                                      fontStyle: "normal",
                                      fontWeight: "400",
                                      lineHeight: "normal",
                                      paddingTop: "6px",
                                    }}
                                  >
                                    {result.address}
                                  </Typography>
                                  <Grid
                                    container
                                    style={{ paddingTop: "26px" }}
                                  >
                                    <Grid item xs={2}>
                                      <Typography
                                        style={{
                                          color: "#000",
                                          fontFamily: "Inter",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: "500",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.ratings}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Rating
                                        name="read-only"
                                        precision={0.5}
                                        size="small"
                                        value={result.ratings}
                                        readOnly
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Typography
                                        style={{
                                          color: "#ABABAB",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.reviews}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    style={{
                                      height: "1px",
                                      width: "230px",
                                      marginTop: "12px",
                                      border: "none",
                                      borderBottom: "2px dotted #D8D8D8",
                                    }}
                                  />
                                </CardContent>
                                {/* <CardActions>
                                  <Button size="small" color="primary">
                                    See detail
                                  </Button>
                                </CardActions> */}
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>

                <TabPanel value={value} index="five">
                  {/* Content for "More" Tab */}
                  <Grid Container>
                    {moredata.map((result, index) => (
                      <Grid
                        item
                        key={index}
                        xs={6}
                        style={{ paddingBottom: "20px" }}
                      >
                        <Card
                          className="carditem"
                          style={{ width: "40%", height: "198px" }}
                        >
                          <CardActionArea>
                            <Grid container>
                              <Grid item xs={4}>
                                <CardMedia
                                  component="img"
                                  image={result.image}
                                  alt="ibis"
                                  style={{
                                    width: "176px",
                                    height: "198px",
                                    borderRadius: "8px 8px 0px opx",
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={4}
                                style={{
                                  display: "flex",
                                  width: "231px",
                                  // padding: "12px 0px",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                }}
                              >
                                <CardContent
                                  style={{
                                    paddingTop: "12px",
                                    paddingLeft: "3px",
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "231px",
                                      color: "#000",
                                      fontFamily: "Inter",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      lineHeight: "normal",
                                    }}
                                  >
                                    {result.placeName}
                                  </Typography>
                                  <Typography
                                    style={{
                                      width: "231px",
                                      height: "23px",
                                      color: "#959595",
                                      fontFamily: "Inter",
                                      fontSize: "10px",
                                      fontStyle: "normal",
                                      fontWeight: "400",
                                      lineHeight: "normal",
                                      paddingTop: "6px",
                                    }}
                                  >
                                    {result.address}
                                  </Typography>
                                  <Grid
                                    container
                                    style={{ paddingTop: "26px" }}
                                  >
                                    <Grid item xs={2}>
                                      <Typography
                                        style={{
                                          color: "#000",
                                          fontFamily: "Inter",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: "500",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.ratings}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Rating
                                        name="read-only"
                                        precision={0.5}
                                        size="small"
                                        value={result.ratings}
                                        readOnly
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Typography
                                        style={{
                                          color: "#ABABAB",
                                          fontFamily: "Inter",
                                          fontSize: "10px",
                                          fontStyle: "normal",
                                          fontWeight: "400",
                                          lineHeight: "normal",
                                          paddingTop: "3px",
                                        }}
                                      >
                                        {result.reviews}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    style={{
                                      height: "1px",
                                      width: "230px",
                                      marginTop: "12px",
                                      border: "none",
                                      borderBottom: "2px dotted #D8D8D8",
                                    }}
                                  />
                                </CardContent>
                                {/* <CardActions>
                                  <Button size="small" color="primary">
                                    See detail
                                  </Button>
                                </CardActions> */}
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Discovery2;
