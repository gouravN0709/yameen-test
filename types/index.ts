import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type newBlog = {
  name: string;
  email: string;
  message?: string;
};
