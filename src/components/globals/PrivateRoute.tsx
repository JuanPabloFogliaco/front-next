import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PrivateRoute({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/auth/login");
    }
  });

  return <>{children}</>;
}
