import { ConnectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import NextAuth, { type AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string, password: string };
                try {
                    await ConnectMongoDB();
                    const user = await User.findOne({ email });
                    if (!user) {
                        throw new Error("No user found with the given email");
                    }
                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if (!isPasswordValid) {
                        throw new Error("Invalid password");
                    }
                    return user;
                } catch (err) {
                    console.log("Error in authorize function:", err);
                }

            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",

    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
