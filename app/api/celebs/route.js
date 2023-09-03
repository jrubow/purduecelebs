import { NextResponse } from "next/server"
import { connectToDatabase } from "../../../lib/mongodb.js";

export async function GET(req) {
  let { db } = await connectToDatabase();
  console.log("mmade it here")
  const celebs = await db.collection("celebInfo").find().toArray();

  return NextResponse.json({ celebs }, {status:200});
}