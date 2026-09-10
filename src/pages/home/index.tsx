import { Box, Button, Card, Chip, Typography } from "@mui/material"
import Image from "next/image";
import { GiBookmarklet } from "react-icons/gi";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
const homePage = ()=>{
    return(
        <Box sx={{display : "flex", flexDirection : "column",bgcolor : "#ece6dcff", minHeight: "100vh", width : "100vw" , paddingY : "25px" , paddingX : "15px" , gap : "10px",justifyContent: { xs: "flex-start", md: "center" } , alignItems: "center"}} >
            
                
                 <Box sx={{display : "flex", flexDirection : "column" , bgcolor : "#ece6dcff" , minHeight : "100vh", width : {xs : "100%", md : "50%"}}} >

                    <Box sx={{ alignItems : "center" , gap : "8px", display: { xs: "flex", md: "none" } }} >
                        <GiBookmarklet style={{fontSize : "25px"}} />
                        <Typography sx={{fontWeight : "bold" , fontSize : "25px"}}  >Novella</Typography>
                    </Box>

                    <Box sx={{
                        boxShadow : '2px 1px 15px rgba(77, 43, 5, 0.42)',
                        borderRadius : "20px",
                        background : "url('/topCard.jpg')",
                        backgroundSize : "cover",
                        backgroundPosition : "bottom",
                        backgroundRepeat : "no-repeat",
                        width : "100%",
                        height : {xs : "300px" , md : "250px"},
                        padding : "20px",
                        display : "flex",
                        flexDirection : "column",
                        gap : "12px",
                        justifyContent : "space-between"
                        }} >

                            <Typography variant="body2" sx={{fontFamily : '"Plus Jakarta Sans", sans-serif' , fontWeight: 0 , fontSize :"10px" , opacity : "80%" , letterSpacing : "0.2em" }} >WELCOME BACK</Typography>
                            <Typography variant="body2" sx={{ fontSize: "20px", letterSpacing: "0.1em" , lineHeight : "20px" }}>
                                Good Stories <br /> are always waiting <br /> for you
                            </Typography>
                            <Typography variant="body2" sx={{fontSize : "10px" , fontWeight : 0 , fontFamily : '"Plus Jakarta Sans", "Inter", sans-serif', opacity : "70%" , lineHeight : "13px"}} >
                                Discover, Read, Write , Be part of <br/>community that love stories.
                            </Typography>
                            <Button sx={{bgcolor : "#d0c5b3d6",borderRadius : "15px" , width : "fit-content", color : "#1D1611"}} >
                                <Typography sx={{fontFamily : '"Plus Jakarta Sans", "Inter", sans-serif', fontSize : "12px" ,textTransform : "none"}} >Explore Stories</Typography>
                                <ArrowForwardIcon sx={{fontWeight : "20" , fontSize : "15px"}} />
                            </Button>
                    </Box>  
                    <Box sx={{bgcolor : "#ece6dcff" }} >
                                <Box sx={{display : "flex" , alignItems : "center" , gap : "10px" }} >
                                    <GiBookmarklet style={{fontSize : "16px"}} />
                                    <Typography >Continue Reading</Typography>
                                </Box>
                                <Box sx={{  display:"flex" ,
                                             gap : "20px" ,overflowX: "auto",
                                            "&::-webkit-scrollbar": {
                                            height: "6px", // Scrollbar အမြင့် (Horizontal အတွက်)
                                            },
                                            scrollbarWidth: { xs: "none", md: "auto" },
                                            msOverflowStyle: { xs: "none", md: "auto" },
                                            "&::-webkit-scrollbar-track": {
                                            backgroundColor: "#e0d7c6", // Scrollbar နောက်ခံအရောင်
                                            borderRadius: "10px",
                                            },
                                            "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: "#dcceb7ff", // Scrollbar အချောင်းအရောင်
                                            borderRadius: "10px",
                                            "&:hover": {
                                                backgroundColor: "#4d1212ff", // Mouse ထောက်လိုက်ချိန် ပေါ်မည့်အရောင်
                                            },},
                                            paddingBottom : "3px"
                                    }} >
                                    {defaultData.map(item => <Box sx={{borderRadius : "9px",overflow :"hidden", width : {xs : "35%" ,  md :  "25%"} , height : "fit-content" , bgcolor : "#e0d7c6" , border : "1px solid #d6cc99ff",flexShrink: 0, paddingBottom : "7px"  }} >
                                        <Box sx={{borderRadius : "9px",bgcolor : "red" , width :  "100%" , height : "120px" , overflow : "hidden" , display : "flex", alignItems : "center" , justifyContent :"center" }} >
                                            <Image alt="storyimage" src={item.url} width={100} height={100} style={{width : "100%" , height : "auto" }} />
                                        </Box>
                                        <Box sx={{marginLeft : "9px" , paddingTop : "5px"}} >
                                            <Typography sx={{fontSize :  {xs : "10px" ,  md :  "12px" , }}} >{item.name}</Typography>
                                            <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "8px",color: "#6b6357",}} >{item.author}</Typography>
                                            <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "8px",color: "#6b6357",}} >
                                                Chapter {item.currentChapter} / {item.totalChapter}
                                            </Typography>
                                        </Box>
                                                            </Box>)}
                                </Box>
                           
                    </Box>    
                    <Box sx={{bgcolor : "#ece6dcff" }} >
                                <Box sx={{display : "flex" , alignItems : "center" , gap : "10px"}} >
                                    <AutoAwesomeIcon sx={{fontSize : "16px"}}  />
                                    <Typography>Recommanded for you</Typography>
                                </Box>
                    </Box>
                    <Box
                        sx={{               display:"flex" ,
                                             gap : "20px" ,overflowX: "auto",
                                            "&::-webkit-scrollbar": {
                                            height: "6px", // Scrollbar အမြင့် (Horizontal အတွက်)
                                            },
                                            scrollbarWidth: { xs: "none", md: "auto" },
                                            msOverflowStyle: { xs: "none", md: "auto" },
                                            "&::-webkit-scrollbar-track": {
                                            backgroundColor: "#e0d7c6", // Scrollbar နောက်ခံအရောင်
                                            borderRadius: "10px",
                                            },
                                            "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: "#dcceb7ff", // Scrollbar အချောင်းအရောင်
                                            borderRadius: "10px",
                                            "&:hover": {
                                                backgroundColor: "#4d1212ff", // Mouse ထောက်လိုက်ချိန် ပေါ်မည့်အရောင်
                                            },},
                                            paddingBottom : "1px",
                                            overflow: "auto",
                            }}>
                                    {recommandedDefault.map(item => <Box sx={{borderRadius : "9px",overflow :"hidden", width : {xs : "25%" ,  md :  "20%"} , height : "fit-content" , bgcolor : "#e0d7c6"  , border : "1px solid #d6cc99ff",flexShrink: 0, paddingBottom : "7px"  }} >
                                        
                                        <Box sx={{borderRadius : "9px",bgcolor : "red" , width :  "100%" , height : "90px" , overflow : "hidden" , display : "flex", alignItems : "center" , justifyContent :"center" }} >
                                            <Image alt="storyimage" src={item.url} width={100} height={100} style={{width : "100%" , height : "auto" }} />
                                        </Box>
                                        <Box sx={{display :"flex" , gap :  "6px",paddingLeft : "7px", paddingTop : "6px"}} >
                                            <Chip  label="Romance" size="small" sx={{ 
                                                                                        bgcolor: "#d4c6ad98", // အနောက်ခံ အရောင်နု
                                                                                        color: "#6b6357",   // စာသားအရောင်
                                                                                        fontSize: "7px",
                                                                                        height: "13px",
                                                                                        borderRadius: "4px",
                                                                                        width : "fit-content"
                                                                                        }} />
                                            <Chip  label="Fantasy" size="small" sx={{ 
                                                                                        bgcolor: "#d4c6ad98", // အနောက်ခံ အရောင်နု
                                                                                        color: "#6b6357",   // စာသားအရောင်
                                                                                        fontSize: "7px",
                                                                                        height: "13px",
                                                                                        borderRadius: "4px",
                                                                                        width : "fit-content"
                                                                                        }} />
                                        </Box>
                                        <Box sx={{marginLeft : "9px"  , }} >
                                            <Typography noWrap sx={{fontSize :  {xs : "10px" ,  md :  "12px" ,  }}} >{item.name}</Typography>
                                            <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "8px",color: "#6b6357",}} >{item.author}</Typography>
                                            <Box sx={{display : "flex" , gap : "12px" , alignItems : "center" }} >
                                                <Box sx={{display : "flex" , gap : "1px"}} >
                                                    <VisibilityIcon sx={{fontWeight: 400,fontSize: "12px",color: "#6b6357"}} />
                                                    <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "7px",color: "#6b6357"}} >{item.totalViewer}</Typography>
                                                </Box>
                                                <Box sx={{display : "flex" , gap : "1px" }} >
                                                    <StarPurple500OutlinedIcon sx={{fontWeight: 400,fontSize: "12px",color: "#6b6357"}} />
                                                    <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "7px",color: "#6b6357"}} >{item.totalLiked}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                                            </Box>)}
                    </Box>
                </Box>       
        </Box>
    )
}

export default homePage;

const defaultData = [
    {
        id : 0,
        url : "/story (4).jpg",
        name : "The Last Letter",
        author : "Soe Soe",
        totalChapter : 28,
        currentChapter : 12
    },
    {
        id : 1,
        url : "/story (5).jpg",
        name : "Moonlit Promise",
        author : "Soe Soe",
        totalChapter : 28,
        currentChapter : 12
    },
    {
        id : 2,
        url : "/story (6).jpg",
        name : "Pretty Lies",
        author : "Soe Soe",
        totalChapter : 28,
        currentChapter : 12
    },
    {
        id : 3,
        url : "/story (7).jpg",
        name : "Pretty Lies",
        author : "Soe Soe",
        totalChapter : 28,
        currentChapter : 12
    },
]
const recommandedDefault = [
    {
        id : 1,
        name : "His Only Sunshine",
        url : "/storyForRecommanded (1).jpg",
        author : "Thiri",
        totalViewer : "1.2M",
        totalLiked : "23.2k"
    },
    {
        id : 2,
        name : "Between Two Door",
        url : "/storyForRecommanded (2).jpg",
        author : "Thiri",
        totalViewer : "1.2M",
        totalLiked : "23.2k"
    },
    {
        id : 3,
        name : "Pretty Lies",
        url : "/storyForRecommanded (3).jpg",
        author : "Thiri",
        totalViewer : "1.2M",
        totalLiked : "23.2k"
    },
    {
        id : 4,
        name : "The Silence Blossom",
        url : "/storyForRecommanded (2).jpg",
        author : "Thiri",
        totalViewer : "1.2M",
        totalLiked : "23.2k"
    },
    {
        id : 5,
        name : "The Silence Blossom",
        url : "/storyForRecommanded (2).jpg",
        author : "Thiri",
        totalViewer : "1.2M",
        totalLiked : "23.2k"
    },
]