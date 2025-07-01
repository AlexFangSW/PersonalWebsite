import Tag from "@/components/Tag";
import { JSX } from "react";

export const CONTENT_WIDTH: number = 780;

enum Colors {
  yellow = "#FFF287",
  red = "#FE5D26",
  blue = "#00CAFF",
  green = "#71C0BB",
  black = "#000000",
  white = "#EAE4D5",
}

// Predefined Tag elements
export const TAGS: { [key: string]: JSX.Element } = {
  dummy: <Tag text="dummy" colorHex="#0ABAB5" />,
  Python: <Tag text="Python" colorHex={Colors.yellow} />,
  Typescript: <Tag text="Typescript" colorHex={Colors.blue} />,
  Go: <Tag text="Go" colorHex={Colors.blue} />,
  K8s: <Tag text="K8s" colorHex={Colors.blue} />,
  FastAPI: <Tag text="FastAPI" colorHex={Colors.green} />,
  RabbitMQ: <Tag text="RabbitMQ" colorHex={Colors.red} />,
  SQLAlchamy: <Tag text="SQLAlchamy" colorHex={Colors.red} />,
  PostgreSQL: <Tag text="PostgreSQL" colorHex={Colors.blue} />,
  Redis: <Tag text="Redis" colorHex={Colors.red} />,
  NextJS: <Tag text="NextJS" colorHex={Colors.white} />,
};
