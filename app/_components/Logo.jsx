import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image className="w-[93px] h-[auto]" src={logo} alt="ideaRoom-logo" />
    </Link>
  );
}
