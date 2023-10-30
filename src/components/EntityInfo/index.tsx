import { Link } from "react-router-dom";
import { swapiBaseUrl } from "../../common/baseUrls";
import { TextInfoProps, LinkInfoProps, ArrayInfoProps } from "./types/index";

export const TextInfo: React.FC<TextInfoProps> = ({ caption, text }) => {
  return (
    <p>
      {caption} {text ? text : "n/a"}
    </p>
  );
};

export const LinkInfo: React.FC<LinkInfoProps> = ({ caption, data }) => {
  return (
    <p>
      {caption}{" "}
      {data ? (
        <Link
          to={data.url && data.url.replaceAll(swapiBaseUrl, "")}
          className="link"
        >
          {data.name}
        </Link>
      ) : (
        "n/a"
      )}
    </p>
  );
};

export const ArrayInfo: React.FC<ArrayInfoProps> = ({ caption, data }) => {
  console.log("data", data);
  return (
    <p>
      {caption}{" "}
      {data?.length
        ? data.map((element: { name: string; url: string }) => (
            <Link
              to={element?.url?.replaceAll(swapiBaseUrl, "")}
              className="link"
              key={element.url}
            >
              {`${element.name} `}
            </Link>
          ))
        : "n/a"}
    </p>
  );
};
