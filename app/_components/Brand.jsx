import brands from "../../public/brands.png";
import Headline from "./Headline";
export default function Brand() {
  return (
    <div className="pb-[50px] rounded-[16px] flex flex-col justify-center items-center">
      <div className="container">
        <Headline text="კომპანიები, რომლებთანაც ჩვენი ლექტორები თანამშრომლობენ" />
        <img
          className="mt-[30px] w-full"
          src={brands.src}
          alt="ბრენდები ფოტო"
        />
      </div>
    </div>
  );
}
