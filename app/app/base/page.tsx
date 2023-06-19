import { Suspense } from "react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/config/auth";

export default async function Page() {
	const session = await getServerSession(authOptions);
	return (
		<Suspense fallback={<>loading...</>}>
			<pre>{JSON.stringify(session, null, 2)}</pre>
		</Suspense>
	);
}
