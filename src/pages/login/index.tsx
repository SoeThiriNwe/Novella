import { useAppDispatch } from "@/store/hooks";
import { checkAndCreateUser } from "@/store/slices/userSlice";
import { Box, Button, Divider, Typography } from "@mui/material"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GiBookmarklet } from "react-icons/gi";
const loginPage = ()=>{

    const { data }  = useSession();
    const router = useRouter();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(data && data.user && data.user.email && data.user.name ){
           dispatch(checkAndCreateUser({email : data.user.email , name : data.user.name}))
            router.push("/home")
        }

    },[data])

    return( 
        <Box
         sx={{
            background :  "url('/loginPageImg.png')" ,
            backgroundSize : "cover",
            backgroundPosition : "center",
            backgroundRepeat : "no-repeat",
            width : "100%" , height : "100vh",
            display : "flex",
            justifyContent : "space-between",
            paddingX : { xs : "20px" , md : "40px"  , lg : "90px" },
            paddingY : "10px",
            gap : "8px",
            alignItems : {xs : "center", md : "center", lg : "start"}
            }} 
        >
            <Image alt="flower img" src={"/babyBreath.png"} width={240} height={250} style={{position : "absolute" , bottom : "0px" , right : "0px" , opacity :  "90%"}} ></Image>
            <Box >
                <Box sx={{ display : "flex" , alignItems : "center" , gap : "10px" }} >
                    <GiBookmarklet style={{color : "white" , fontSize : "60px" , marginTop : "20px" }} />
                    <Box>
                        <Typography sx={{color : "white" , fontSize : {xs : "20px" , sm : "27px" , md : "35px"}}} >Novella</Typography>
                        <Typography sx={{color : "white",height: "0px", fontSize : {xs : "9px" , sm : "16px"   }, textWrap : "wrap" , bgcolor : "red"  }}>Read, Write, Inspire</Typography>
                    </Box>
                </Box>
                <Box sx={{height : "500px", display :"flex" , flexDirection : "column", alignItems : "start", justifyContent : "center"}}>
                    <Typography sx={{color : "white", fontSize : {xs : "20px" , sm : "27px" , md : "35px"}}} >Every story has a reader.</Typography>
                    <Typography sx={{color : "white" , fontSize : {xs : "12px" , sm : "16px"   }}} >Share yours. Find yourself in theirs.</Typography>
                </Box>
                <Box
                    sx={{
                        background:
                        "linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                        padding: "20px 35px 20px 20px",
                        borderRadius: "25px"}}
                    >
                    <Typography sx={{fontSize: {xs :  "15px", md : "18px"},color: "#E8DCCB",lineHeight: 1.3,}}>
                        A book is a dream
                        <br />
                        that you hold
                        <br />
                        in your hands.
                    </Typography>
                </Box>
            </Box>
            
            <Box
            sx={{
                background : "url('/vintagebg.jpg')",
                width : {xs : "200px" , md : "450px" },
                borderRadius : "20px",
                height : { xs : "70%", md : "80%" , lg : "98%" }
            }}
            >
                <Box sx={{display : "flex" , flexDirection : "column", justifyContent : "center" , alignItems : "center", paddingTop : "100px" , gap : "12px"  }} >
                    <Typography sx={{fontSize : "28px"}} >Welcome</Typography>
                    <Typography sx={{fontSize : "12px"}}>To continue your reading journey</Typography>
                    <Box sx={{display : "flex" , alignItems : "center" , gap : "5px", paddingTop : "5px"}}>
                        <Divider sx={{width : "50px" , color : "#33493dff"}} />
                        <GiBookmarklet style={{color : "#1D1611"}} />
                        <Divider sx={{width : "50px" , color : "#33493dff"}} />
                    </Box>
                    <Button variant="outlined" sx={{border : "1px solid #33493dff" , textTransform : "none"}} onClick={()=>{signIn("google")}} ><Typography  >Continue with Google</Typography></Button>
                    <Divider sx={{width : "300px" , color : "#33493dff" , paddingTop : "30px", marginBottom : "30px"}} />
                    


                </Box>
            </Box>
        </Box>
    )
}

export default loginPage;