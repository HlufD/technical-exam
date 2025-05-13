import Image from "next/image";

import landingPageImg from "../assets/images/landing_first_page.png";

import Signin from "@/components/Signin";

export default function Home() {
  return (
    <section className="flex h-[calc(100vh-4rem)] flex-row items-center justify-center w-full">
      <Image
        alt=""
        className="h-[calc(100vh-4rem)] hidden lg:block lg:w-2/3 xl:w-auto"
        src={landingPageImg}
      />
      <Signin />
    </section>
  );
}
