import { useRouter } from "next/router";
import { useEffect } from "react";
import RegisterFeature from "../../../features/registerFeature";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.push("/home");
  }, []);

  return <RegisterFeature />;
}
