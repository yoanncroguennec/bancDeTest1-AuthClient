import { Box, Card, CardActions, Grid, Paper, styled, Typography } from "@mui/material";


export const RootProducts = styled(Grid)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
    },
}));

export const BoxItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
    alignItems: "center", display: "flex", flexWrap: "nowrap", height: "300px",
    [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
    },
}));

export const BoxItemDesc = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: 350
}));

export const ImgDesktop = {
    border: "4px solid #000",
    borderRadius: "20px",
    boxShadow: "0px 20px 50px #555",
    marginRight: "30px",
    width: "220px"
}

export const ImgMobile = {
    border: "4px solid #000",
    borderRadius: "20px",
    boxShadow: "0px 20px 50px #555",
    marginRight: "30px",
    width: "130px"
}

