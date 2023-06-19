"use client";
import { signIn } from "next-auth/react";

export default function Page() {
	return (
		<main className="p-24">
			<button onClick={async () => { await signIn("credentials", { redirect: false }) }}>Login</button>
		</main>
	);
}
