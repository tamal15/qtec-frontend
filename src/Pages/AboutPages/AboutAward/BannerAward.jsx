
const BannerAward = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold">AWARDS</h1>
      </div>
    </div>
  );
};

export default BannerAward;
