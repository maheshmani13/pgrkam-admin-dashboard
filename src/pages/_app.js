import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import Signin from "@/components/Signin";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Signin></Signin>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
