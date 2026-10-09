import { createTheme } from "@mui/material";

const theme = createTheme({
  palette : {
    primary : {
      main : "#ece6dcff"
    }
  },
  typography :{
    body1 : {
        color : "#1D1611",
        fontFamily: '"Times New Roman", Times, serif', fontWeight: 600//1 and 2 are the same , 
    },
    body2 : {
        color : "#ffff",
        fontFamily: '"Times New Roman", Times, serif', fontWeight: 600
    }
   
  }
});
export default theme;
