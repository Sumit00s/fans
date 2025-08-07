export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      <div className="relative z-20">

      </div>
    </div>
  );
}
