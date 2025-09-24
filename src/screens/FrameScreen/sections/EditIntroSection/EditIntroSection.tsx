import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

const formFields = [
  {
    id: "firstName",
    label: "First name",
    placeholder: "Write your first name",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last name",
    placeholder: "Write your last name",
    type: "text",
  },
];

const genderOptions = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
];

const locationFields = [
  {
    id: "country",
    label: "Country",
    placeholder: "Choose your country",
  },
  {
    id: "city",
    label: "City",
    placeholder: "Choose your city",
  },
];

const linkFields = [
  {
    id: "linkedin",
    label: "LinkedIn link",
    placeholder: "Write your LinkedIn link",
  },
  {
    id: "portfolio",
    label: "Portfolio link",
    placeholder: "Write your LinkedIn link",
  },
  {
    id: "other",
    label: "Other link",
    placeholder: "Write your LinkedIn link",
  },
];

const jobTypeOptions = [
  { id: "partTime", label: "Part-time" },
  { id: "fullTime", label: "Full-time" },
  { id: "taskBased", label: "Task based" },
];

export const EditIntroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 self-stretch w-full flex-[0_0_auto] items-start relative">
      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        <div className="relative w-[140px] h-[140px] rounded-[200px] [background:url(../avatar.png)_50%_50%_/_cover]" />

        <Button
          variant="outline"
          className="h-12 border-[#00213b] text-[#00213b] px-10 py-[23px] rounded-[40px] font-lable-label-XXL-medium font-[number:var(--lable-label-XXL-medium-font-weight)] text-[length:var(--lable-label-XXL-medium-font-size)] tracking-[var(--lable-label-XXL-medium-letter-spacing)] leading-[var(--lable-label-XXL-medium-line-height)] [font-style:var(--lable-label-XXL-medium-font-style)]"
        >
          Update Photo
        </Button>

        <Button
          variant="outline"
          className="h-12 border-[#f04438] text-[#f04438] px-10 py-[23px] rounded-[40px] font-lable-label-XXL-medium font-[number:var(--lable-label-XXL-medium-font-weight)] text-[length:var(--lable-label-XXL-medium-font-size)] tracking-[var(--lable-label-XXL-medium-letter-spacing)] leading-[var(--lable-label-XXL-medium-line-height)] [font-style:var(--lable-label-XXL-medium-font-style)]"
        >
          Remove photo
        </Button>
      </div>

      <div className="flex gap-[30px] self-stretch w-full flex-[0_0_auto] items-start relative">
        {formFields.map((field) => (
          <div
            key={field.id}
            className="flex-col items-start flex-1 grow flex relative"
          >
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-[#414651] text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
                {field.label}
              </Label>
              <Input
                placeholder={field.placeholder}
                className="h-14 px-3.5 py-2.5 bg-white rounded-lg border-[#d0d3d4] font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-[#717680] text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-[334px] h-[83px] flex flex-col items-start relative">
        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-[#414651] text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
            Date of birth
          </Label>
          <div className="relative">
            <Input
              placeholder="Write your date of birth"
              className="h-14 px-3.5 py-2.5 pr-12 bg-white rounded-lg border-[#d0d3d4] font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-[#717680] text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]"
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#717680]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[155px] gap-6 flex-[0_0_auto] items-start relative">
        <Label className="font-title-title-m-medium font-[number:var(--title-title-m-medium-font-weight)] text-[#414651] text-[length:var(--title-title-m-medium-font-size)] tracking-[var(--title-title-m-medium-letter-spacing)] leading-[var(--title-title-m-medium-line-height)] [font-style:var(--title-title-m-medium-font-style)]">
          Choose gender
        </Label>

        <RadioGroup className="flex flex-col gap-4">
          {genderOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-3">
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="w-5 h-5 border-[#d0d3d4]"
              />
              <Label
                htmlFor={option.id}
                className="font-title-title-s-medium font-[number:var(--title-title-s-medium-font-weight)] text-[#00213b] text-[length:var(--title-title-s-medium-font-size)] tracking-[var(--title-title-s-medium-letter-spacing)] leading-[var(--title-title-s-medium-line-height)] [font-style:var(--title-title-s-medium-font-style)]"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex gap-[30px] self-stretch w-full flex-[0_0_auto] items-start relative">
        {locationFields.map((field) => (
          <div
            key={field.id}
            className="h-[83px] flex-1 grow flex flex-col items-start relative"
          >
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-gray-700 text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
                {field.label}
              </Label>
              <Select>
                <SelectTrigger className="h-14 px-3.5 py-2.5 bg-white rounded-lg border-[#d0d3d4] font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-gray-colorgray500 text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]">
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>

      <Separator className="self-stretch w-full h-px" />

      <div className="flex flex-col gap-10 self-stretch w-full flex-[0_0_auto] items-start relative">
        <h2 className="font-title-title-XL-medium font-[number:var(--title-title-XL-medium-font-weight)] text-app-primary text-[length:var(--title-title-XL-medium-font-size)] tracking-[var(--title-title-XL-medium-letter-spacing)] leading-[var(--title-title-XL-medium-line-height)] [font-style:var(--title-title-XL-medium-font-style)]">
          Contact info
        </h2>

        <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
          <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-[#414651] text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
              Email
            </Label>
            <Input
              placeholder="Write your email"
              type="email"
              className="h-14 px-3.5 py-2.5 bg-white rounded-lg border-[#d0d3d4] font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-[#717680] text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]"
            />
          </div>
        </div>

        <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
          <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-[#414651] text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
              Contact number
            </Label>
            <div className="h-14 flex self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-[#d0d3d4] relative">
              <div className="inline-flex items-center gap-1 pl-3.5 pr-3 py-2.5 border-r border-[#d0d3d4]">
                <img
                  className="w-[26px] h-[18px] rounded-sm object-cover"
                  alt="Country flag"
                  src="/download--2--2.png"
                />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#00213b] text-base">
                  +2
                </span>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
              <div className="flex h-14 items-center gap-2 pl-3 pr-3.5 py-2.5 flex-1">
                <Input
                  placeholder="Write your phone number"
                  className="border-0 p-0 h-auto bg-transparent font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-[#717680] text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="self-stretch w-full h-px" />

      <div className="flex flex-col gap-10 self-stretch w-full flex-[0_0_auto] items-start relative">
        <h2 className="font-title-title-XL-medium font-[number:var(--title-title-XL-medium-font-weight)] text-app-primary text-[length:var(--title-title-XL-medium-font-size)] tracking-[var(--title-title-XL-medium-letter-spacing)] leading-[var(--title-title-XL-medium-line-height)] [font-style:var(--title-title-XL-medium-font-style)]">
          Links
        </h2>

        {linkFields.map((field) => (
          <div
            key={field.id}
            className="h-[83px] self-stretch w-full flex flex-col items-start relative"
          >
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-[#414651] text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
                {field.label}
              </Label>
              <Input
                placeholder={field.placeholder}
                className="h-14 px-3.5 py-2.5 bg-white rounded-lg border-[#d0d3d4] font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-[#717680] text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]"
              />
            </div>
          </div>
        ))}
      </div>

      <Separator className="self-stretch w-full h-px" />

      <div className="flex flex-col gap-10 self-stretch w-full flex-[0_0_auto] items-start relative">
        <h2 className="font-title-title-XL-medium font-[number:var(--title-title-XL-medium-font-weight)] text-app-primary text-[length:var(--title-title-XL-medium-font-size)] tracking-[var(--title-title-XL-medium-letter-spacing)] leading-[var(--title-title-XL-medium-line-height)] [font-style:var(--title-title-XL-medium-font-style)]">
          Availability
        </h2>

        <div className="flex flex-col w-[155px] gap-6 flex-[0_0_auto] items-start relative">
          <Label className="font-title-title-m-medium font-[number:var(--title-title-m-medium-font-weight)] text-[#414651] text-[length:var(--title-title-m-medium-font-size)] tracking-[var(--title-title-m-medium-letter-spacing)] leading-[var(--title-title-m-medium-line-height)] [font-style:var(--title-title-m-medium-font-style)]">
            Applying for
          </Label>

          <div className="flex flex-col gap-4">
            {jobTypeOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-3">
                <Checkbox
                  id={option.id}
                  className="w-5 h-5 rounded-[10px] border-[#d0d3d4]"
                />
                <Label
                  htmlFor={option.id}
                  className="font-title-title-s-medium font-[number:var(--title-title-s-medium-font-weight)] text-[#00213b] text-[length:var(--title-title-s-medium-font-size)] tracking-[var(--title-title-s-medium-letter-spacing)] leading-[var(--title-title-s-medium-line-height)] [font-style:var(--title-title-s-medium-font-style)]"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[83px] gap-[30px] self-stretch w-full items-start relative">
          <div className="flex-col items-start flex-1 grow flex relative">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <Label className="font-lable-label-l-medium font-[number:var(--lable-label-l-medium-font-weight)] text-[#414651] text-[length:var(--lable-label-l-medium-font-size)] tracking-[var(--lable-label-l-medium-letter-spacing)] leading-[var(--lable-label-l-medium-line-height)] [font-style:var(--lable-label-l-medium-font-style)]">
                Hourly rate (USD)
              </Label>
              <Input
                placeholder="Write your hourly rate (USD)"
                type="number"
                className="h-14 px-3.5 py-2.5 bg-white rounded-lg border-[#d0d3d4] font-body-body-m-regular font-[number:var(--body-body-m-regular-font-weight)] text-[#717680] text-[length:var(--body-body-m-regular-font-size)] tracking-[var(--body-body-m-regular-letter-spacing)] leading-[var(--body-body-m-regular-line-height)] [font-style:var(--body-body-m-regular-font-style)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
