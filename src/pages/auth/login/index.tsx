import { useEffect } from "react";
import Login from "../../../components/login/login";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.push("/home");
  }, []);

  return <Login />;
}
