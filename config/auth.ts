// import { env } from "@/env.mjs";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import axios from "axios";
import { type DefaultSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// import { prisma } from "@/config/prisma";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

export const authOptions: NextAuthOptions = {
	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		if (user) {
	// 			token.username = user.username;
	// 			token.role = user.role;
	// 			// token.sub = user.id
	// 		}
	// 		return token;
	// 	},
	// 	async session({ session, token, user }) {
	// 		session.user.id = token.sub;
	// 		session.user.username = token.username;
	// 		session.user.role = token.role;
	// 		return session;
	// 	},
	// },

	// adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
	cookies: {
		sessionToken: {
			name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""
				}next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: "lax",
				path: "/",
				// When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
				domain: VERCEL_DEPLOYMENT ? "platina-three.vercel.app" : undefined,
				secure: VERCEL_DEPLOYMENT,
			},
		},
	},
	// pages: {
	// 	signIn: `/login`,
	// 	verifyRequest: `/login/verify`,
	// 	// error: "/login", // Error code passed in query string as ?error=
	// 	newUser: "/register",
	// },
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				// const authResponse = await axios.post(
				// 	`${env.NEXTAUTH_URL}/api/login`,
				// 	JSON.stringify(credentials),
				// );

				// if (authResponse.status === 202) {
				// 	const user = await authResponse.data;

				// 	return {
				// 		...user,
				// 		image: user.avatar,
				// 	};
				// }
				return {
					id: "1",
					name: "test",
				};
			},
		}),
	],
};
