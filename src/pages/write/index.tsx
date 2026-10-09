import { Box, Typography } from "@mui/material"
import { CiSquarePlus } from "react-icons/ci";const Write = ()=>{
    return(
        <Box sx={{bgcolor : "primary.main", height : "100vh"}} >
            <Box sx={{display : "flex" , alignItems : "center", justifyContent : "space-between"}} >
                <Typography sx={{padding : "10px" , fontSize : "27px"}} >My Stories</Typography>
                <CiSquarePlus style={{fontSize : "30px" , fontWeight : 700 ,marginRight : "20px"}} />
            </Box>
        </Box>
    )
}

export default Write;