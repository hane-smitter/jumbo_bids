import React from "react";
import {
  Grid,
  List,
  ListItem,
  Toolbar,
  Typography,
  ListItemText,
  ListItemAvatar,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {styled} from "@mui/system";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import useStyles from "./styles.js";
import Logo from "../../images/logo.png";

const Container = styled("div")(({theme}) => ({
  color: "#ffffff",
  fontSize: "1rem",
  backgroundColor: theme.palette.common.black,
  paddingInline: theme.spacing(2),
}));

function Footer() {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={3}>
          <List>
            <ListItem disablePadding>
              <ListItemAvatar sx={{ width: "100%" }}>
                <img className={classes.logo} src={Logo} />
              </ListItemAvatar>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="body1" color="inherit">
                JumboBids is an online auction company that deals in new goods
                only. This is a dynamic auction based on unique bids on a marked
                time.
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            className={(classes.headers, !isMobile && classes.marginUndo)}
            gutterBottom
            variant="h6"
            sx={{ color: "secondary.main" }}
          >
            Contact
          </Typography>
          <List className={!isMobile && classes.marginUndo}>
            <ListItem className={classes.listItem}>
              <CallIcon /> &nbsp;
              <ListItemText primary={"(254) 717 25 25 75"} />
            </ListItem>
            <ListItem className={classes.listItem}>
              <LocationOnIcon /> &nbsp;
              <ListItemText primary={"Ridgeways Kiambu Kenya"} />
            </ListItem>
            <ListItem className={classes.listItem}>
              <EmailIcon />
              &nbsp; <ListItemText primary={" info@bidspesa.com"} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            className={(classes.headers, !isMobile && classes.marginUndo)}
            gutterBottom
            variant="h6"
            sx={{ color: "secondary.main" }}
          >
            Social Media
          </Typography>
          <List className={!isMobile && classes.marginUndo}>
            <ListItem className={classes.listItem}>
              <FacebookIcon />
              &nbsp;
              <ListItemText primary={"Facebook"} />
            </ListItem>
            <ListItem className={classes.listItem}>
              <TwitterIcon /> &nbsp;
              <ListItemText primary={"Twitter"} />
            </ListItem>
            <ListItem className={classes.listItem}>
              <YouTubeIcon /> &nbsp;
              <ListItemText primary={"YouTube"} />
            </ListItem>
            <ListItem className={classes.listItem}>
              <InstagramIcon />
              &nbsp; <ListItemText primary={"Instagram"} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.headers} gutterBottom variant="h6">
            Licence
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <Typography variant="body1" color="inherit">
                The Operator of this website, is licensed and regulated by the
                Auctioneers Board of Kenya under License number 0000000.
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider variant="middle" component="hr" sx={{ bgcolor: "common.white" }} />
      <Toolbar>
        <Typography variant="body1" className={classes.center} color="inherit">
          Copyright © {new Date().getFullYear()} JumboBids limited. &nbsp;&nbsp;All rights reserved ®
        </Typography>
      </Toolbar>
    </Container>
  );
}

export default Footer;
