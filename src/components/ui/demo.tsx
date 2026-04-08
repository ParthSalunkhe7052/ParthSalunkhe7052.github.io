import { useScreenSize } from "../../hooks/use-screen-size"
import { PixelTrail } from "./pixel-trail"
import { GooeyFilter } from "./gooey-filter"

function GooeyDemo() {
  const screenSize = useScreenSize()

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center gap-8 bg-black overflow-hidden">
      <img
        src="https://images.aiscribbles.com/34fe5695dbc942628e3cad9744e8ae13.png?v=60d084"
        alt="impressionist painting"
        className="w-full h-full object-cover absolute inset-0 opacity-70"
      />

      <div className="absolute inset-0 bg-black/25" />

      <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ filter: "url(#gooey-filter-pixel-trail)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 24 : 32}
          fadeDuration={700}
          delay={40}
          pixelClassName="bg-white/85"
        />
      </div>
    </div>
  )
}

export { GooeyDemo }
