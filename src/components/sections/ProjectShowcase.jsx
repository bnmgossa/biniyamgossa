import React, { useRef, useState } from 'react';
import {
  ExternalLink,
  LoaderCircle,
  Maximize2,
  Pause,
  Play,
} from 'lucide-react';

import { personalProjects } from '../../data/personalProjects';
import { academicProjects } from '../../data/academicProjects';
import {
  googleDrivePreview,
  isGoogleDriveUrl,
} from '../../data/data';

const createProjectGroups = (projects) => [
  {
    id: 'it',
    label: 'IT & Systems',
    accent: 'emerald',
    activeClass:
      'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20',
    textClass: 'text-emerald-600',
    dotClass: 'bg-emerald-500',
    projects: projects.filter(
      (project) => project.category === 'it'
    ),
  },

  {
    id: 'frontend',
    label: 'Frontend Development',
    accent: 'blue',
    activeClass:
      'bg-blue-500 text-white border-blue-500 shadow-md shadow-blue-500/20',
    textClass: 'text-blue-600',
    dotClass: 'bg-blue-500',
    projects: projects.filter(
      (project) => project.category === 'frontend'
    ),
  },
];

const enterFullscreen = (event) => {
  const frame = event.currentTarget
    .closest('[data-video-frame]')
    ?.querySelector('iframe');

  if (frame && frame.requestFullscreen) {
    frame.requestFullscreen();
  }
};

const ProjectShowcase = () => {
  const [activeGroupId, setActiveGroupId] = useState('it');
  const [failedDriveVideos, setFailedDriveVideos] = useState({});
  const [videoStatus, setVideoStatus] = useState({});

  const videoRefs = useRef({});

  const showcaseProjects = [
    ...personalProjects,
    ...academicProjects,
  ];

  const projectGroups = createProjectGroups(showcaseProjects);

  const activeGroup =
    projectGroups.find(
      (group) => group.id === activeGroupId
    ) || projectGroups[0];

  return (
    <section
      id="showcase"
      className="space-y-6 -mt-8"
    >
      {/* =========================================================
          SECTION HEADER
      ========================================================== */}
      <div className="flex items-center gap-4 px-1">
        <div className="shrink-0">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">
            03. Showcase
          </p>

          <h2 className="mt-1 text-2xl font-black uppercase tracking-tighter text-gray-900 md:text-4xl">
            Work in{' '}
            <span className="text-blue-500">
              motion
            </span>
          </h2>
        </div>

        <div className="h-px flex-1 bg-linear-to-r from-emerald-500 via-blue-500 to-transparent" />
      </div>

      {/* =========================================================
          CATEGORY TABS
      ========================================================== */}
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-black/10 bg-gray-50 p-1.5">
          {projectGroups.map((group) => {
            const isActive =
              activeGroupId === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() =>
                  setActiveGroupId(group.id)
                }
                className={`
                  rounded-xl
                  border
                  px-3
                  py-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  md:text-xs
                  ${
                    isActive
                      ? group.activeClass
                      : 'border-transparent text-gray-500 hover:bg-white hover:text-gray-900'
                  }
                `}
              >
                {group.label}

                <span className="ml-1 opacity-60">
                  ({group.projects.length})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          ACTIVE CATEGORY TITLE
      ========================================================== */}
      <div className="flex items-center gap-2 px-1">
        <span
          className={`h-2 w-2 rounded-full ${activeGroup.dotClass}`}
        />

        <h3
          className={`text-sm font-black uppercase tracking-[0.16em] ${activeGroup.textClass}`}
        >
          {activeGroup.label}
        </h3>

        <div className="h-px flex-1 bg-linear-to-r from-black/10 to-transparent" />
      </div>

      {/* =========================================================
          PROJECT GRID
      ========================================================== */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-270
          grid-cols-2
          justify-items-center
          gap-2
          sm:gap-5
          lg:grid-cols-3
          lg:gap-6
        "
      >
        {!activeGroup.projects.length && (
          <p className="col-span-full py-10 text-center text-sm text-gray-500">
            No projects in this category.
          </p>
        )}

        {activeGroup.projects.map((project, index) => {
          const videoKey = `${project.title}-${index}`;

          const isDriveProject =
            project.link &&
            isGoogleDriveUrl(project.link);

          const isDriveVideo =
            project.video &&
            isGoogleDriveUrl(project.video);

          const shouldStayInPage =
            (isDriveProject || isDriveVideo) &&
            (project.video || project.image);

          /* Try native playback first so the title action can control play/pause. */
          const useNativeVideo =
            Boolean(project.video) &&
            !failedDriveVideos[videoKey];

          const isPlaying =
            videoStatus[videoKey]?.playing || false;

          const isLoading =
            videoStatus[videoKey]?.loading || false;

          const toggleVideo = async () => {
            const video =
              videoRefs.current[videoKey];

            if (!video) {
              return;
            }

            if (video.paused) {
              try {
                await video.play();
              } catch (error) {
                setVideoStatus((current) => ({
                  ...current,
                  [videoKey]: {
                    ...current[videoKey],
                    playing: false,
                    error: true,
                  },
                }));
              }
            } else {
              video.pause();
            }
          };

          return (
            <article
              key={videoKey}
              className="
                group
                w-full
                
                max-w-87.5
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-black/10
                bg-white
                shadow-[0_6px_25px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
              "
            >
              {/* ===================================================
                  MEDIA AREA
              ==================================================== */}
              <div
                data-video-frame
                className={`
                  relative
                  aspect-video
                  w-full
                  h-32
                  overflow-hidden
                  ${
                    project.video
                      ? 'bg-black'
                      : 'bg-gray-100'
                  }
                `}
              >
                {/* =================================================
                    DIRECT / NATIVE VIDEO
                ================================================== */}
                {useNativeVideo ? (
                  <>
                    <video
                      ref={(video) => {
                        videoRefs.current[videoKey] =
                          video;
                      }}
                      controls
                      preload="metadata"
                      poster={project.image}
                      playsInline
                      aria-label={`${project.title} video player`}
                      onLoadStart={() => {
                        setVideoStatus(
                          (current) => ({
                            ...current,
                            [videoKey]: {
                              ...current[videoKey],
                              loading: true,
                            },
                          })
                        );
                      }}
                      onCanPlay={() => {
                        setVideoStatus(
                          (current) => ({
                            ...current,
                            [videoKey]: {
                              ...current[videoKey],
                              loading: false,
                            },
                          })
                        );
                      }}
                      onPlay={() => {
                        setVideoStatus(
                          (current) => ({
                            ...current,
                            [videoKey]: {
                              ...current[videoKey],
                              playing: true,
                            },
                          })
                        );
                      }}
                      onPause={() => {
                        setVideoStatus(
                          (current) => ({
                            ...current,
                            [videoKey]: {
                              ...current[videoKey],
                              playing: false,
                            },
                          })
                        );
                      }}
                      onError={() => {
                        setVideoStatus(
                          (current) => ({
                            ...current,
                            [videoKey]: {
                              ...current[videoKey],
                              loading: false,
                              error: true,
                            },
                          })
                        );

                        if (isDriveVideo) {
                          setFailedDriveVideos(
                            (current) => ({
                              ...current,
                              [videoKey]: true,
                            })
                          );
                        }
                      }}
                      className="h-full w-full bg-black object-contain"
                    >
                      <source
                        src={project.video}
                        type="video/mp4"
                      />

                      Your browser does not support video playback.
                    </video>

                    {/* Loading indicator */}
                    {isLoading && (
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 text-white">
                        <LoaderCircle
                          size={25}
                          className="animate-spin"
                        />
                      </div>
                    )}

                    {/* Custom Play / Pause */}
                    <button
                      type="button"
                      onClick={toggleVideo}
                      aria-label={
                        isPlaying
                          ? `Pause ${project.title} video`
                          : `Play ${project.title} video`
                      }
                      title={
                        isPlaying
                          ? 'Pause video'
                          : 'Play video'
                      }
                      className="
                        absolute
                        bottom-3
                        left-3
                        z-30
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-500
                        text-white
                        shadow-lg
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:bg-emerald-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-white
                      "
                    >
                      {isPlaying ? (
                        <Pause
                          size={17}
                          fill="currentColor"
                        />
                      ) : (
                        <Play
                          size={17}
                          fill="currentColor"
                        />
                      )}
                    </button>
                  </>
                ) : isDriveVideo ? (
                  /* =================================================
                     GOOGLE DRIVE VIDEO
                  ================================================== */
                  <>
                    <iframe
                      src={googleDrivePreview(
                        project.video
                      )}
                      title={`${project.title} project video`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="h-full w-full border-0 bg-black"
                    />

                    {/* Small video badge */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-3
                        top-3
                        z-20
                        rounded-full
                        border
                        border-white/10
                        bg-black/70
                        px-2.5
                        py-1
                        text-[8px]
                        font-black
                        uppercase
                        tracking-widest
                        text-white
                        backdrop-blur-sm
                      "
                    >
                      Video
                    </span>

                    {/* Fullscreen button */}
                    <button
                      type="button"
                      onClick={enterFullscreen}
                      aria-label={`Fullscreen ${project.title} video`}
                      title="Fullscreen"
                      className="
                        absolute
                        bottom-3
                        right-3
                        z-30
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/10
                        bg-black/80
                        text-white
                        shadow-lg
                        backdrop-blur-sm
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:bg-black
                        focus:outline-none
                        focus:ring-2
                        focus:ring-white
                      "
                    >
                      <Maximize2 size={15} />
                    </button>
                  </>
                ) : project.image ? (
                  /* =================================================
                     IMAGE PREVIEW
                  ================================================== */
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  /* =================================================
                     NO PREVIEW
                  ================================================== */
                  <div className="flex h-full items-center justify-center text-xs font-black uppercase tracking-widest text-gray-400">
                    Preview unavailable
                  </div>
                )}

                {/* Preview badge for image-only projects */}
                {!project.video && (
                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      z-20
                      inline-flex
                      items-center
                      gap-1
                      rounded-full
                      border
                      border-white/10
                      bg-black/70
                      px-2.5
                      py-1
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    <Play size={10} />
                    Preview
                  </span>
                )}
              </div>

              {/* ===================================================
                  PROJECT INFORMATION
              ==================================================== */}
             
              <div className="space-y-3.5 p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-500">
                      Featured project
                    </p>

                    <h3 className="mt-1 text-md font-black leading-tight tracking-tight text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project action */}
                  {shouldStayInPage && useNativeVideo ? (
                    <button
                      type="button"
                      onClick={useNativeVideo ? toggleVideo : enterFullscreen}
                      aria-label={
                        useNativeVideo
                          ? (isPlaying ? `Pause ${project.title} video` : `Play ${project.title} video`)
                          : `Play ${project.title} video`
                      }
                      title={useNativeVideo ? (isPlaying ? 'Pause video' : 'Play video') : 'Play video'}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        text-emerald-600
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:bg-emerald-500
                        hover:text-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-emerald-500/40
                      "
                    >
                      {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                    </button>
                  ) : !shouldStayInPage ? (
                    <a
                      href={project.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500/20
                        text-blue-500
                        transition-all
                        duration-200
                        hover:bg-blue-500
                        hover:text-white
                        hover:shadow-md
                      "
                    >
                      <ExternalLink size={15} />
                    </a>
                  ) : null}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-black/10
                        bg-gray-50
                        px-2
                        py-1
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-gray-500
                        transition-colors
                        group-hover:bg-gray-100
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase;