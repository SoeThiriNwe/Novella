import { db } from "@/prisma/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const method = req.method;
    if (method==="POST"){
        const {email, name} = req.body;
        const checkedAndCreatedUser = await db.orm.public.User.upsert({create : {email , name}, update : {} , conflictOn : {email}})
        console.log(checkedAndCreatedUser)
    }
  res.status(200).json({ name: "John Doe" });
}