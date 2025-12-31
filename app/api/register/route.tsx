import { ConnectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { role, name, email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        await ConnectMongoDB();
        await User.create({ role, name, email, password: hashedPassword })


        return NextResponse.json({ message: "user registered successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error }, { status: 500 });
    }

}