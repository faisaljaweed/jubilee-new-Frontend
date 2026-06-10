import Button from "../common/button";
import Group_1000005372 from "../../public/img/Contact/contact us.png";

export default function TalkToUsDirectlySection() {
  return (
    <section className="w-full bg-white py-14 md:py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-4 md:px-8 lg:gap-16">
        {/* Left Image */}
        <div className="flex w-full justify-center md:w-[45%] lg:w-[490px]">
          <img
            src={Group_1000005372.src}
            alt="Customer support representative"
            className="h-auto w-full max-w-[360px] object-contain md:max-w-[390px] lg:max-w-[520px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[500px] text-center md:text-left">
          <h2 className="font-futura m-0 text-[34px] uppercase font-semibold uppercase leading-[1.1] text-[#4a4a4a] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Get Real-Time
            <br />
            Assistance
          </h2>

          <p className="font-futura mt-5 max-w-[790px] text-[14px] font-normal leading-[1.7] text-[#666666] md:text-[15px]">
            While the rest of us are busy digitizing, our secure AI Agent is
            right here, waiting to assist with your policy details or walk you
            through our latest services.
          </p>

          <p className="font-futura mt-3 max-w-[390px] pb-3 text-[14px] font-normal leading-[1.7] text-[#777777] md:text-[15px]">
            It’s fluent in the fine art of getting you answers without the hold
            music. Think of it as your personal insurance consultant
          </p>

          <Button
            className="font-futura uppercase cursor-pointer rounded-full bg-[#BA0C2F] px-8 py-2 text-[14px] font-semibold text-white transition hover:bg-[#AF0327] hover:text-white md:px-8 md:py-4 mt-10"
            text="Talk To Our AI Agent "
          />
        </div>
      </div>
    </section>
  );
}
