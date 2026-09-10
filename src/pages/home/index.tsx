import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import { GiBookmarklet } from "react-icons/gi";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const homePage = ()=>{
    return(
        <Box sx={{display : "flex", flexDirection : "column",bgcolor : "#ece6dcff" , height : "100vh" , width : "100vw" , paddingY : "25px" , paddingX : "15px" , gap : "10px" }} >
            
                
                 <Box sx={{display : "flex", flexDirection : "column" , bgcolor : "#ece6dcff" , height : "100vh", width : {xs : "100%", md : "50%"}}} >

                    <Box sx={{display : "flex" , alignItems : "center" , gap : "8px" }} >
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
                                <Box sx={{display : "flex" , alignItems : "center" , gap : "2px" }} >
                                    <GiBookmarklet style={{fontSize : "25px"}} />
                                    <Typography sx={{fontWeight : "bold" , fontSize : "25px"}}  >Continue Reading</Typography>
                                </Box>
                                <Box sx={{  display:"flex" ,
                                             gap : "20px" ,overflowX: "auto",
                                            "&::-webkit-scrollbar": {
                                            height: "6px", // Scrollbar အမြင့် (Horizontal အတွက်)
                                            },
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
                                    {defaultData.map(item => <Box sx={{borderRadius : "9px",overflow :"hidden", width : {xs : "35%" ,  md :  "25%"} , height : "fit-content" , bgcolor : "#ece6dcff" , boxShadow : '4px  4px 25px #cbbfa9ff',flexShrink: 0, paddingBottom : "7px"  }} >
                                        <Box sx={{borderRadius : "9px",bgcolor : "red" , width :  "100%" , height : "120px" , overflow : "hidden" , display : "flex", alignItems : "center" , justifyContent :"center" }} >
                                            <Image alt="storyimage" src={item.url} width={100} height={100} style={{width : "100%" , height : "auto" }} />
                                        </Box>
                                        <Box sx={{marginLeft : "9px"}} >
                                            <Typography sx={{fontSize :  {xs : "10px" ,  md :  "12px" , }}} >{item.name}</Typography>
                                            <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "8px",color: "#6b6357",}} >{item.author}</Typography>
                                            <Typography sx={{fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',fontWeight: 400,fontSize: "8px",color: "#6b6357",}} >
                                                Chapter {item.currentChapter} / {item.totalChapter}
                                            </Typography>
                                        </Box>
                                                            </Box>)}
                                </Box>
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