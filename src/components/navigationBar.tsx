import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import { GiBookshelf } from "react-icons/gi";
import { LuPersonStanding } from "react-icons/lu";
import { useState } from "react";
import { useRouter } from "next/router";
const NavigationBar = ()=>{
    const router = useRouter();
    const [value, setValue]  = useState(0)
    const primaryBg = "#ece6dcff"; // Bottom Nav Background Color
  const activeColor = "#5C3D2E"; // Active Item (Brown) 
  const inactiveColor = "#8C7B70"; // Inactive Item (Light Brown/Grey)
    return(
        <Box sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000}} >
            <BottomNavigation
            sx={{
          backgroundColor: primaryBg,
          height: "50px",
          // Active & Inactive text styling
          "& .MuiBottomNavigationAction-root": {
            color: inactiveColor,
            minWidth: "auto",
            padding: "3px 0",
            "&.Mui-selected": {
              color: activeColor,
            },
          },
          "& .MuiBottomNavigationAction-label": {
            fontFamily : '"Times New Roman", Times, serif',
            fontSize: "10px",
            fontWeight: 400,
            marginTop: "2px",
            "&.Mui-selected": {
              fontSize: "12px",
              fontWeight: 700,
            },
          },
        }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
                if(newValue===2){
                    router.push("/write")
                }else if (newValue===0){
                    router.push("/home")
                }
                
            }}
            >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Discover" icon={<ExploreIcon />} />
            <BottomNavigationAction label="Write" icon={<AddCircleOutlinedIcon />} />
            <BottomNavigationAction label="Library" icon={<GiBookshelf />} />
            <BottomNavigationAction label="Profile" icon={<LuPersonStanding />} />

            </BottomNavigation>
        </Box>
    )

}
export default NavigationBar;