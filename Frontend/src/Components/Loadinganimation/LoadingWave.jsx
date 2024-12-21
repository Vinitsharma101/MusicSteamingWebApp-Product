import "./LoadingWave.css";
const LoadingWave = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingWave;
