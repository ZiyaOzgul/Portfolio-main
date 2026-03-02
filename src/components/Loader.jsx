import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="font-medium text-sm text-white-100">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
