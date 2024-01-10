import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
// import { userdatastate } from "../../store/userdatastate";
import { userState } from "../../store/userState";

export default function Signin() {
  const userstate = useSetRecoilState(userState);
  // const setuserdata = useSetRecoilState(userdatastate);

  const router = useRouter();

  useEffect(() => {
    fetch("https://pgrkam2.onrender.com/api/v1/user/auth/me", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          userstate({
            userName: data.data.email,
          });
        } else {
          userstate({
            userName: "",
          });
          if (router.pathname != "/") {
            router.push("/");
          }
        }
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://pgrkam2.onrender.com/api/v1/user")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setuserdata(data.data);
  //     });
  // }, []);
  return <></>;
}
