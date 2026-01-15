import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ConnectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { JWT } from "next-auth/jwt";
import { Session, User as NextAuthUser } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                await ConnectMongoDB();
                const user = await User.findOne({ email: credentials.email });
                if (!user) return null;

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                if (!isValid) return null;

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,

                };
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async jwt({
            token,
            user,
        }: {
            token: JWT;
            user?: NextAuthUser & { role?: string };
        }) {
            if (user?.role) {
                token.role = user.role;
            }
            return token;
        },

        async session({
            session,
            token,
        }: {
            session: Session;
            token: JWT & { role?: string };
        }) {
            if (session.user) {
                session.user.role = token.role;
            }
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
