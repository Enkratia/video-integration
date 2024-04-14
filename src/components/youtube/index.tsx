"use client";

import React from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
// @use "../../../node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import cs from "../../scss/helpers.module.scss";
import s from "./youtube.module.scss";

const url = "https://www.youtube.com/embed/_Im4_3Z1NxQ?si=Z7alXLG0-9ITljmx?controls=0";

export const Youtube: React.FC = () => {
  const getYoutubeId = () => {
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
            id={getYoutubeId()}
            poster="maxresdefault"
            title=""
          />
        </div>

        <div className={s.videoWrapper}>
          <div className={s.videoWrapperInner}>
            {/* <iframe
              className={s.video}
              loading="lazy"
              src="https://www.youtube.com/embed/_Im4_3Z1NxQ?si=Z7alXLG0-9ITljmx?controls=0"
              title=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe> */}
          </div>
          {/* 
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kJQP7kiw5Fk?frameborder=0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe> */}
        </div>
      </div>
    </section>
  );
};

// frameborder is deprecated => use css instead
// add: loading="lazy"
// autoplay=1&controls=0&modestbranding=1
