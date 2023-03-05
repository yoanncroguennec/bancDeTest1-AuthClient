import { Box, Card, CardActions, styled, Typography } from "@mui/material";


export const RootPresentation = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
    },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "7px",
    paddingLeft: "50px",
    [theme.breakpoints.down("sm")]: {
        // background: "red",
    },
}));

export const BoxCard = styled(Card)(({ theme }) => ({
    borderRadius: 10,
    boxShadow: "0px 20px 50px #555", height: "520px",
    width: 400,
    [theme.breakpoints.down("sm")]: {
        // background: "red",
    },
}));

export const CardActionsBox = styled(CardActions)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        // background: "red",
    },
}));
