import makeStyles from "@mui/styles/makeStyles";

export default makeStyles((theme) => ({
  center: {
    margin: "auto",
    textAlign: "center",
  },
  headers: {
    marginBlockStart: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  logo: {
    maxWidth: "200px",
    // objectFit: "contain",
    // marginLeft: "-17px",
    width: "100%",
  },
  divider: {
    maxWidth: "90%",
  },
  listItem: {
    padding: 0,
    fontSize: "16px",
  },
  marginUndo: {
    marginBlockStart: "15px",
    marginLeft: 80,
    fontSize: "18px",
  },
}));
