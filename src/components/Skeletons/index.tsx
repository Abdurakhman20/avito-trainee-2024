import { Skeleton } from "antd";

export const ImageSkeleton = () => {
  return (
    <>
      <Skeleton.Image style={{width: 230, height: 130}} />
    </>
  );
}

export const MovieSkeleton = () => {
  return (
    <>
      <Skeleton style={{width: 250, height: 340}} loading />
    </>
  );
}