import { ConnectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        await ConnectMongoDB();
        const user = await User.findOne({ email }).select('_id');
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error }, { status: 500 });
    }
}