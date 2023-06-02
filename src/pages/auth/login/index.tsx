import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginFeature from "../../../features/loginFeature";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.push("/home");
  }, []);

  return <LoginFeature />;
}
