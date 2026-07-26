type BrowserArtProps = {
  className?: string;
  variant: "blocks" | "arch" | "editorial";
};

export function BrowserArt({ className = "", variant }: BrowserArtProps) {
  return (
    <div className={`browser-art ${className}`}>
      <div className="browser-bar">
        <span className="bg-orange" />
        <span className="bg-ochre" />
        <span className="bg-cobalt" />
        <i />
      </div>

      {variant === "blocks" && (
        <div className="art-blocks">
          <span className="circle" />
          <span className="paper" />
          <span className="ink" />
          <span className="orange" />
          <div className="copy-lines" />
        </div>
      )}

      {variant === "arch" && (
        <div className="art-arch">
          <div className="archway">
            <span />
          </div>
          <div className="art-caption">
            <i />
            <i />
            <i />
          </div>
        </div>
      )}

      {variant === "editorial" && (
        <div className="art-editorial">
          <div className="paint-title" />
          <div className="editorial-copy" />
          <div className="vessel-row">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
    </div>
  );
}
