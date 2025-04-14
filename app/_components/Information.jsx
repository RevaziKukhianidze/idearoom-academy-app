import Image from "next/image";
import information from "../../public/information.png";
import certificate from "../../public/certificate.svg";
import lessonsIcon from "../../public/lessonsIcon.svg";
import intern from "../../public/intern.svg";
import users from "../../public/users.svg";
import playButton from "../../public/playButton.svg";
export default function Information() {
  return (
    <section className="bg-white mt-8 sm:mt-12 md:mt-16 lg:mt-[64px] py-8 sm:py-12 md:py-16 lg:py-[64px] mb-12 sm:mb-16 md:mb-24">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-0 gap-6 sm:gap-8 md:gap-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center lg:block">
          <div className="w-full relative sm:max-w-md md:max-w-xl lg:max-w-none">
            <Image
              src={information}
              alt="information-image"
              className="w-full relative h-auto"
            />
            <Image
              className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={playButton}
              alt="play-button"
            />
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <h2 className="text-xl sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] mb-8 md:mb-10 lg:mb-[40px] font-bold text-secondary-500 max-w-full sm:max-w-[90%] 2xl:max-w-[100%] 2xl:mb-[60px] text-center  caps-text leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] my-4 sm:my-6 md:my-8 lg:my-6">
            რატომ უნდა ისწავლოთ იდეა რუმის აკადემიაში
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-5">
            <div className="flex gap-4 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none">
              <Image src={certificate} alt="certificate-svg" />
              <div>
                <h4 className="font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]">
                  სერთიფიკატი
                </h4>
                <p className="text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2">
                  ყველა კურსდამთავრებულს გადაეცემა ორენოვანი სერთიფიკატი
                </p>
              </div>
            </div>
            <div className="flex gap-4 xl:ml-1 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none">
              <Image src={lessonsIcon} alt="lessons-icon-svg" />
              <div>
                <h4 className="font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]">
                  ადგილზე სწავლება
                </h4>
                <p className="text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2">
                  ლექციები მიმდინარეობს აუდიტორიულ სივრცეში
                </p>
              </div>
            </div>
            <div className="flex md:mt-6 gap-3 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none">
              <Image src={intern} alt="intern-icon-svg" />
              <div>
                <h4 className="font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]">
                  სტაჟირება / დასაქმება
                </h4>
                <p className="text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2">
                  წარმატებულ კურსდამთავრებულებს აქვთ შანსი დასაქმდნენ ჩვენთან -
                  ციფრულ სააგენტო იდეარუმში
                </p>
              </div>
            </div>
            <div className="flex xl:ml-1 md:mt-6 gap-4 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none">
              <Image src={users} alt="users-svg" />
              <div>
                <h4 className="font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]">
                  ჩვენი გუნდი
                </h4>
                <p className="text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2">
                  წამყვან კომპანიებთან მუშაობის გამოცდილების მქონე ლექტორები
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
