import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    router.push("/login")
  },[])

  

  return (
    <></>
  );
}
//သူ က page တစ်ခု အစဆုံး run ပြီးရ နဲ့ ဒီ page က စေတာ တွေ အကုန်လုံး ကို run ပြီးရ နဲ့ နောက် တစ်ဖက် ကို ချက်ချင်း run မယ် ဆိုတဲ့ အဓိပ္ပာယ် ရ တယ် ။ အဲ့ဒါကြောင့် မလို့ ဒီ ဘက် က နေ use effect နဲ့ ဟို ဘက် ကို ချက်ချင်း ပို့လိုက် တယ် ဆိုတဲ့ ဟာ တွေ use effect နဲ့ မှာ နောက် code ထဲ မှာ ဘာ တွေ လာ မှ မထည့် အတွက် ကြောင့် မလို့ page တစ်ခုလုံး ကို run ပြီးရ နဲ့ ဟို ဘက် ကို push လိုက် မယ် ဆိုတဲ့ အဓိပ္ပာယ် ကြောင့် မလို့ ဒီ use effect ကို သုံး ပြီး ဒီ မှာ ရေးထားထား တယ် ။
