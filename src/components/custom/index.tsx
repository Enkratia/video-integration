"use client";

import React from "react";

import ReactPlayer from "react-player/lazy";
// import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import cs from "../../scss/helpers.module.scss";
import s from "./custom.module.scss";
import Icon from "../../../public/img/default/check.svg";

export const Custom: React.FC = () => {
  const [domLoaded, setDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  const url =
    "https://videocdn.cdnpk.net/joy/content/video/free/2022-01/large_preview/220114_01_Drone_4k_017.mp4";

  return (
    <section className={s.root}>
      <h2 className={s.title}>Custom player</h2>

      <div className={`${s.container} ${cs.container}`}>
        <div className={s.videoWrapper}>
          <div className={s.videoWrapperInner}>
            {/* {domLoaded ? (
              <ReactPlayer
                url={url}
                className={s.video}
                controls={true}
                width="100%"
                height="100%"
                playIcon={<Icon width="50px" height="50px" />}
              />
            ) : (
              ""
            )} */}
            <figure id="videoContainer">
              <video id="video" controls preload="metadata" poster="img/poster.jpg">
                <source src={url} type="video/mp4" />
              </video>

              <ul id="video-controls" className="controls">
                <li>
                  <button id="playpause" type="button">
                    Play/Pause
                  </button>
                </li>
                <li>
                  <button id="stop" type="button">
                    Stop
                  </button>
                </li>
                <li className="progress">
                  <progress id="progress" value="0">
                    <span id="progress-bar"></span>
                  </progress>
                </li>
                <li>
                  <button id="mute" type="button">
                    Mute/Unmute
                  </button>
                </li>
                <li>
                  <button id="volinc" type="button">
                    Vol+
                  </button>
                </li>
                <li>
                  <button id="voldec" type="button">
                    Vol-
                  </button>
                </li>
                <li>
                  <button id="fs" type="button">
                    Fullscreen
                  </button>
                </li>
              </ul>

              <figcaption>
                &copy; Blender Foundation |<a href="http://mango.blender.org">mango.blender.org</a>
              </figcaption>
            </figure>

            {/* <video
              className={s.video}
              src="https://videocdn.cdnpk.net/joy/content/video/free/2022-01/large_preview/220114_01_Drone_4k_017.mp4"
              preload="metadata"
              controls={true}></video> */}
          </div>
        </div>
      </div>
    </section>
  );
};

////////////////////////////////////////////////////////////////
/* <div className={s.videoWrapper}>
  <div className={s.videoWrapperInner}>
    <iframe
      className={s.video}
      loading="lazy"
      src="https://www.youtube.com/embed/_Im4_3Z1NxQ?si=Z7alXLG0-9ITljmx?controls=0"
      title=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
  </div>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/kJQP7kiw5Fk?frameborder=0"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen></iframe>
</div>; */
