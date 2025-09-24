import React from "react";
import { Button } from "../../../../components/ui/button";

export const FormWrapperSection = (): JSX.Element => {
  return (
    <div className="flex w-full justify-end gap-6 items-start relative">
      <Button
        variant="outline"
        className="w-[164px] h-[68px] border border-solid border-[#00213b] text-[#00213b] rounded-[40px] font-lable-label-XXL-medium font-[number:var(--lable-label-XXL-medium-font-weight)] text-[length:var(--lable-label-XXL-medium-font-size)] tracking-[var(--lable-label-XXL-medium-letter-spacing)] leading-[var(--lable-label-XXL-medium-line-height)] [font-style:var(--lable-label-XXL-medium-font-style)] h-auto"
      >
        Cancel
      </Button>

      <Button className="w-[164px] h-[68px] bg-[#00213b] text-[#ffffff] rounded-[40px] font-lable-label-XXL-medium font-[number:var(--lable-label-XXL-medium-font-weight)] text-[length:var(--lable-label-XXL-medium-font-size)] tracking-[var(--lable-label-XXL-medium-letter-spacing)] leading-[var(--lable-label-XXL-medium-line-height)] [font-style:var(--lable-label-XXL-medium-font-style)] h-auto">
        Update
      </Button>
    </div>
  );
};
