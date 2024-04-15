"use client";

import React from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
// @use "../../../node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import cs from "../../scss/helpers.module.scss";
import s from "./youtube.module.scss";

const url = "https://www.youtube.com/embed/_Im4_3Z1NxQ?si=Z7alXLG0-9ITljmx?controls=0";

export const Youtube: React.FC = () => {
  const extractYoutubeId = () => {
    const pathname = new URL(url).pathname;
    return pathname.substring(pathname.lastIndexOf("/") + 1);
  };

  return (
    <section className={s.root}>
      <h2 className={s.title}>Youtube</h2>

      <div className={`${s.container} ${cs.container}`}>
        <div className={s.videoWrapper}>
          <LiteYouTubeEmbed
            iframeClass={s.video}
            id={extractYoutubeId()}
            poster="maxresdefault"
            title=""
          />
        </div>
      </div>
    </section>
  );
};

// frameborder is deprecated => use css instead
// add: loading="lazy"
// autoplay=1&controls=0&modestbranding=1
