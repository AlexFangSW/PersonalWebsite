import Tag from "@/components/Tag";
import { JSX } from "react";

export const CONTENT_WIDTH: number = 780;

// Predefined Tag elements
export const TAGS: { [key: string]: JSX.Element } = {
  dummy: <Tag text="dummy" colorHex="#0ABAB5" />,
  Python: <Tag text="Python" colorHex="#FADA7A" />,
  Typescript: <Tag text="Typescript" colorHex="#3674B5" />,
  Go: <Tag text="Go" colorHex="#8CCDEB" />,
  K8s: <Tag text="K8s" colorHex="#8CCDEB" />,
  FastAPI: <Tag text="FastAPI" colorHex="#03A6A1" />,
  RabbitMQ: <Tag text="RabbitMQ" colorHex="#C83F12" />,
  SQLAlchamy: <Tag text="SQLAlchamy" colorHex="#C83F12" />,
  PostgreSQL: <Tag text="PostgreSQL" colorHex="#4682A9" />,
  Redis: <Tag text="Redis" colorHex="#C83F12" />,
  NextJS: <Tag text="NextJS" colorHex="#7F8CAA" />,
};
