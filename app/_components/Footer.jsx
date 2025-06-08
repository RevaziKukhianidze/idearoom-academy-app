// import Image from "next/image";
// import Logo from "./Logo";
import Link from "next/link";
import Icons from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container max-sm:max-w-[90%]  mx-auto px-4 pt-[60px] flex flex-col justify-center mt-[50px] items-center text-center bg-white rounded-[16px] min-h-[300px] md:min-h-[441px] mb-12">
        {/* ეს ჩავამატოთ? */}
        <Logo />
        <div>
          <div className="mb-4">
            <p className="uppercase text-sm font-medium text-secondary-500 mb-[5px] mt-12">
              ACADEMY OF IDEAROOM
            </p>
            <p className="uppercase caps-text text-sm mb-4 font-medium text-secondary-500">
              იდეარუმის აკადემია
            </p>
          </div>
          <p className="text-secondary-500 text-sm mb-5">
            © 2024. საქართველო, ქუთაისი | ყველა უფლება დაცულია
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Icons />
          </div>
          <Link href="/privacy">
            <p className="uppercase caps-text mt-8 text-sm cursor-pointer hover:underline mb-8">
              წესები და პირობები
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
