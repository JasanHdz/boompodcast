import React from "react";
import Link from "next/link";

const Serie = props => {
  const { channels, title } = props;
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div className="channels">
        {channels.map(clip => (
          <Link href={`/channel/?id=${clip.id}`} prefetch key={clip.id}>
            <a className="channel">
              <img src={clip.urls.logo_image.original} alt="" />
              <h2>{clip.title}</h2>
            </a>
          </Link>
        ))}
        {style}
      </div>
    </React.Fragment>
  );
};

const style = (
  <style jsx>{`
    .channels {
      display: grid;
      grid-gap: 15px;
      padding: 15px;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    a.channel {
      display: block;
      margin-bottom: 0.5em;
      color: #333;
      text-decoration: none;
    }
    .channel img {
      border-radius: 3px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
      width: 100%;
    }
    h2 {
      padding: 5px;
      font-size: 0.9em;
      font-weight: 600;
      margin: 0;
      text-align: center;
    }
  `}</style>
);

export default Serie;
