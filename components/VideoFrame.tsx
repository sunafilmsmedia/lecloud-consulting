/**
 * Cadre vidéo 16:9. Passe une URL :
 *  - YouTube/Vimeo en format « embed » (ex. https://www.youtube.com/embed/XXXX)
 *  - ou un fichier .mp4
 * Sans URL, affiche un placeholder « Ta vidéo ici ».
 */
export default function VideoFrame({
  src,
  label = "Ta vidéo ici",
}: {
  src?: string;
  label?: string;
}) {
  const isEmbed = !!src && (src.includes("/embed/") || src.includes("player.") || src.includes("youtu"));

  return (
    <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900 glow-fluo">
      {src ? (
        isEmbed ? (
          <iframe
            src={src}
            title={label}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video src={src} controls playsInline className="absolute inset-0 h-full w-full object-cover" />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
          <div className="aura left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 bg-fluo-600/20" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-fluo-500 text-ink-950">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <p className="relative text-sm text-mist-soft">{label}</p>
        </div>
      )}
    </div>
  );
}
