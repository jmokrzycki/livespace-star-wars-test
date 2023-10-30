import { Link } from "react-router-dom";
import { swapiBaseUrl } from "../../common/baseUrls";
import { TextInfoProps, LinkInfoProps, ArrayInfoProps } from "./types/index";

export const TextInfo: React.FC<TextInfoProps> = ({ caption, text }) => {
  return (
    <p>
      <span>{caption}</span>
      <span>{text ? text : "n/a"}</span>
    </p>
  );
};

export const LinkInfo: React.FC<LinkInfoProps> = ({ caption, data }) => {
  return (
    <p>
      <span>{caption}</span>{" "}
      {data ? (
        <Link
          to={data.url && data.url.replaceAll(swapiBaseUrl, "")}
          className="link"
        >
          {data.name}
        </Link>
      ) : (
        <span>"n/a"</span>
      )}
    </p>
  );
};

export const ArrayInfo: React.FC<ArrayInfoProps> = ({ caption, data }) => {
  console.log("data", data);
  return (
    <p>
      <span>{caption}</span>{" "}
      {data?.length ? (
        data.map((element: { name: string; url: string }) => (
          <Link
            to={element?.url?.replaceAll(swapiBaseUrl, "")}
            className="link"
            key={element.url}
          >
            {`${element.name} `}
          </Link>
        ))
      ) : (
        <span>"n/a"</span>
      )}
    </p>
  );
};
