import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { EditIntroSection } from "./sections/EditIntroSection/EditIntroSection";
import { FormWrapperSection } from "./sections/FormWrapperSection/FormWrapperSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[794px] items-start gap-12 p-12 relative bg-[#ffffff] rounded-[32px]">
      <div className="flex w-[694px] justify-between flex-[0_0_auto] items-start relative">
        <h1 className="relative flex-1 mt-[-1.00px] font-heading-heading-m-medium font-[number:var(--heading-heading-m-medium-font-weight)] text-app-primary text-[length:var(--heading-heading-m-medium-font-size)] tracking-[var(--heading-heading-m-medium-letter-spacing)] leading-[var(--heading-heading-m-medium-line-height)] [font-style:var(--heading-heading-m-medium-font-style)]">
          Edit intro
        </h1>

        <Button
          variant="ghost"
          size="icon"
          className="flex w-11 h-11 items-center justify-center gap-2.5 p-4 relative rounded-xl h-auto"
        >
          <XIcon className="w-6 h-6" />
        </Button>
      </div>

      <EditIntroSection />
      <FormWrapperSection />
    </div>
  );
};
