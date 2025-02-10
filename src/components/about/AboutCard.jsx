import { Card, CardHeader, CardBody, Image, Divider } from "@heroui/react";
import "./Card.css";

export default function AboutCard({ title, imgSource, text }) {
  return (
    <div>
      <Card className=" card max-w-[300px] min-h-[520px] mx-auto bg-white shadow-md hover:shadow-lg transition-all duration-300 group transform hover:scale-105 origin-center relative
        before:absolute before:inset-[-8px] before:border-[8px]">
        <CardHeader className="p-0 overflow-hidden flex justify-center items-center h-48 w-full rounded-t-xl z-10 shadow-lg shadow-gray-200">
          <Image
            alt="Industrial Services"
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            src={imgSource}
          />
        </CardHeader>
        <CardBody className="px-6 py-4 z-10 font-[Inter] relative">
          <div className="space-y-5">
            <h3 className="text-[25px] font-semibold text-[#150655] mb-4 text-center tracking-wide">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-[18px] tracking-normal">
              {text}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
