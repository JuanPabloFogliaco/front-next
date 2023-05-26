import { useRouter } from "next/router";
import Register from "../../../components/register/register";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.push("/home");
  }, []);

  return <Register />;
}
