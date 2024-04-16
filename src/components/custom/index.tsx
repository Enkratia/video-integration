"use client";

import React from "react";

import ReactPlayer from "react-player/lazy";
// import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import cs from "../../scss/helpers.module.scss";
import s from "./custom.module.scss";
import Icon from "../../../public/img/default/check.svg";

const url =
  "https://videocdn.cdnpk.net/joy/content/video/free/2022-01/large_preview/220114_01_Drone_4k_017.mp4";

export const Custom: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const progressRef = React.useRef<HTMLProgressElement>(null);

  const [test, setState] = React.useState({});

  const [videoOptions, setVideoOptions] = React.useState({});

  const [domLoaded, setDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  // **
  const onVideoLoadedMetadata = () => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video || !progress) return;

    progress.setAttribute("max", video.duration.toString());
  };

  const onPlayPauseUp = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };

  const onStopUp = () => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video || !progress) return;

    video.pause();
    video.currentTime = 0;
    progress.value = 0;
  };

  const onMuteUp = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
  };

  // **
  const onVolumeUp = (dir: string) => {
    const video = videoRef.current;
    if (!video) return;

    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }
  };

  return (
    <section className={s.root}>
      <h2 className={s.title}>Custom player</h2>

      <div className={`${s.container} ${cs.container}`}>
        <div className={s.videoWrapper}>
          <div className={s.videoWrapperInner}>
            <video
              ref={videoRef}
              onLoadedMetadata={onVideoLoadedMetadata}
              controls={false}
              preload="metadata"
              // poster="img/poster.jpg"
              className={s.video}>
              <source src={url} type="video/mp4" />
            </video>

            <div className={s.controls}>
              <div className={s.progressWrapper}>
                <progress ref={progressRef} className={s.progress} value="0"></progress>
              </div>

              <ul className={s.btns}>
                <li className={`${s.item} ${s.playpauseWrapper}`}>
                  <button
                    onPointerUp={onPlayPauseUp}
                    className={`${s.btn} ${s.playpause}`}
                    type="button">
                    Play/Pause
                  </button>
                </li>

                <li className={s.item}>
                  <button onPointerUp={onStopUp} className={`${s.btn} ${s.stop}`} type="button">
                    Stop
                  </button>
                </li>

                <li className={s.item}>
                  <button onPointerUp={onMuteUp} className={`${s.btn} ${s.mute}`} type="button">
                    Mute/Unmute
                  </button>
                </li>

                <li className={s.item}>
                  <button
                    onPointerUp={() => onVolumeUp("+")}
                    className={`${s.btn} ${s.volumeUp}`}
                    type="button">
                    Vol+
                  </button>
                </li>

                <li className={s.item}>
                  <button
                    onPointerUp={() => onVolumeUp("-")}
                    className={`${s.btn} ${s.volumeDown}`}
                    type="button">
                    Vol-
                  </button>
                </li>

                <li className={s.item}>
                  <button className={`${s.btn} ${s.fullscreen}`} type="button">
                    Fullscreen
                  </button>
                </li>
              </ul>
            </div>

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

/* {domLoaded ? (
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
)} */

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
