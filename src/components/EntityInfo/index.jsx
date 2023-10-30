import { Link } from "react-router-dom";
import { swapiBaseUrl } from "../../common/baseUrls";

export function TextInfo({ caption, text }) {
  return (
    <p>
      {caption} {text ? text : "n/a"}
    </p>
  );
}

export function LinkInfo({ caption, data }) {
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
}

export function ArrayInfo({ caption, data }) {
  console.log("data", data);
  return (
    <p>
      {caption}{" "}
      {data && data.length
        ? data.map((element) => (
            <Link
              to={element.url && element.url.replaceAll(swapiBaseUrl, "")}
              className="link"
              key={element.url}
            >
              {`${element.name} `}
            </Link>
          ))
        : "n/a"}
    </p>
  );
}
