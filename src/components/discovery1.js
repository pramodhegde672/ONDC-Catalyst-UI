import * as React from "react";
import Sidenavs from "./sidenav/sidenav";
import "./discovery1.css";
import {
  Grid,
  TextField,
  Button,
  Typography,
  CardActionArea,
  CardActions,
  InputLabel,
  Box,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import InputAdornment from "@mui/material/InputAdornment";
import { Container } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { recentsearches } from "../axios/services/HomeServices";
import { mostsearches } from "../axios/services/HomeServices";
import IconButton from "@mui/material/IconButton";
// import Slider from "react-slick";

function Discovery1() {
  const navigate = useNavigate();

  function discovery2() {
    navigate("/discovery2");
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetchData();

    async function fetchData() {
      const data = await recentsearches();
      console.log("data=======", data);
      setData(data.result);
      setLoading(false);
      const data2 = await mostsearches();
      console.log("data=======", data2);
      setData2(data2.result);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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

  return (
    <div className="discovery">
      <Sidenavs />
      <div
        style={{
          marginLeft: "231px",
          marginBottom: "35px",
          width: "1020px",
          height: "850px",
          borderRadius: "24px",
          border: "1px solid #DADADA",
          background: "#FFF",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              color: "var(--neutrals-900, #1E2024)",
              fontFamily: "Inter",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "136%",
              padding: "3px",
              marginTop: "50px",
            }}
          >
            Search
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#262626",
              fontFamily: "Inter",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              padding: "3px",
              marginTop: "5px",
            }}
          >
            We are glad having you here looking for answers.
          </Grid>

          <Grid
            item
            xs={8}
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <TextField
              id="outlined-size-small"
              size="small"
              label="Search"
              variant="outlined"
              style={{
                width: "30rem",
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
            xs={3}
            style={{
              display: "flex",
              padding: "10px",
              width: "127px",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              style={buttonStyle}
              onClick={discovery2}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Container
          style={{
            width: "990px",
            height: "250px",
            borderRadius: "16px",
            background:
              "radial-gradient(125.39% 188.38% at 51.49% -46.6%, #F1F3F9 38.96%, rgba(241, 243, 249, 0.00) 96.89%)",
            marginLeft: "25px",
            marginTop: "50px",
          }}
        >
          <Grid container style={{ height: "85px" }}>
            <Grid item xs={10} style={{ padding: "28px" }}>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "start",
                  color: "var(--neutrals-900, #1E2024)",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "136%",
                }}
              >
                Recent Search
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              style={{ paddingTop: "20px", paddingLeft: "25px" }}
            >
              <IconButton
                color="inherit"
                onClick={() => {
                  // Handle the button click here
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={1}
              style={{ paddingTop: "20px", paddingRight: "25px" }}
            >
              <IconButton
                color="inherit"
                onClick={() => {
                  // Handle the button click here
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{ paddingTop: "10px", paddingLeft: "18px" }}
          >
            {data.map((result, index) => (
              <Grid
                key={index}
                item
                xs={3}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  paddingTop: "0px",
                  paddingLeft: "16px",
                }}
              >
                <Card
                  className="carditem"
                  style={{
                    width: "225px",
                    height: "130px",
                    borderRadius: "7px 20px 7px 7px",
                  }}
                >
                  <CardActionArea
                    style={{ paddingTop: "5px", paddingLeft: "4px" }}
                  >
                    <Grid container>
                      <Grid item xs>
                        <CardMedia
                          component="img"
                          image={result.image}
                          alt="ibis"
                          style={{
                            width: "76px",
                            height: "115px",
                            borderRadius: "7px",
                          }}
                        />
                      </Grid>
                      <Grid item xs>
                        <CardContent
                          style={{
                            padding: "9px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            style={{
                              color: "#000",

                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight: "normal",
                              width: "127px",
                              height: "32px",
                            }}
                          >
                            {result.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                              color: "#4E4E4E",
                              fontFamily: "Inter",
                              fontSize: "10px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "normal",
                              width: "127px",
                              height: "32px",
                            }}
                          >
                            {result.description}
                          </Typography>
                        </CardContent>
                        <CardActions style={{ padding: "4px" }}>
                          <Button
                            size="small"
                            color="primary"
                            style={{
                              color: "#005FFE",
                              fontFamily: "Inter",
                              fontSize: "10px",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight: "150%",
                            }}
                          >
                            See detail
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container
          style={{
            width: "990px",
            height: "250px",
            borderRadius: "16px",
            background:
              "radial-gradient(125.39% 188.38% at 51.49% -46.6%, #F1F3F9 38.96%, rgba(241, 243, 249, 0.00) 96.89%)",
            marginLeft: "25px",
            marginTop: "50px",
          }}
        >
          <Grid container style={{ height: "85px" }}>
            <Grid item xs={10} style={{ padding: "28px" }}>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "start",
                  color: "var(--neutrals-900, #1E2024)",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "136%",
                }}
              >
                Most Searched
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              style={{ paddingTop: "20px", paddingLeft: "25px" }}
            >
              <IconButton
                color="inherit"
                onClick={() => {
                  // Handle the button click here
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={1}
              style={{ paddingTop: "20px", paddingRight: "25px" }}
            >
              <IconButton
                color="inherit"
                onClick={() => {
                  // Handle the button click here
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{ paddingTop: "10px", paddingLeft: "18px" }}
          >
            {data2.map((result2, index) => (
              <Grid
                key={index}
                item
                xs={3}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  paddingTop: "0px",
                  paddingLeft: "16px",
                }}
              >
                <Card
                  className="carditem"
                  style={{
                    width: "225px",
                    height: "130px",
                    borderRadius: "7px 20px 7px 7px",
                  }}
                >
                  <CardActionArea
                    style={{ paddingTop: "5px", paddingLeft: "4px" }}
                  >
                    <Grid container>
                      <Grid item xs>
                        <CardMedia
                          component="img"
                          image={result2.image}
                          alt="ibis"
                          style={{
                            width: "76px",
                            height: "115px",
                            borderRadius: "7px",
                          }}
                        />
                      </Grid>
                      <Grid item xs>
                        <CardContent
                          style={{
                            padding: "9px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            style={{
                              color: "#000",

                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight: "normal",
                              width: "127px",
                              height: "32px",
                            }}
                          >
                            {result2.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                              color: "#4E4E4E",
                              fontFamily: "Inter",
                              fontSize: "10px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "normal",
                              width: "127px",
                              height: "32px",
                            }}
                          >
                            {result2.description}
                          </Typography>
                        </CardContent>
                        <CardActions style={{ padding: "4px" }}>
                          <Button
                            size="small"
                            color="primary"
                            style={{
                              color: "#005FFE",
                              fontFamily: "Inter",
                              fontSize: "10px",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight: "150%",
                            }}
                          >
                            See detail
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Discovery1;
