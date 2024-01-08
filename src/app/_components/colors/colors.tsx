"use client";
import { FC } from "react";
import { tailwindColors } from "../../../../tailwind.config";
import { colord } from "colord";


const Colors: FC = () => {
  return (
    <div className="flex  flex-wrap justify-center" dir="rtl">
      {Object.entries(tailwindColors).map(([name, color]) => (
         <ColorBox key={name} color={color} name={name} />
      ))}
    </div>
  );
};

export default Colors;

export type PropsColor = {
  color: string;
  name: string;
};

const getTextColor = (backgroundColor : string) : string => 
      colord(backgroundColor).isDark() ? "#dddddd" : "#333333"


export const ColorBox: FC<PropsColor> = ({name, color}) => {
  return (
    <div className={`flex flex-col justify-center items-center w-96 h-60 text-center uppercase`} style={{backgroundColor:color, color:getTextColor(color)}}>
        <span>{name}</span>
        <span>{color}</span>
    </div>
  );
};
