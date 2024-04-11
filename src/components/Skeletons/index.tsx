import { Skeleton } from "antd";

export const ImageSkeleton = () => {
  return (
    <>
      <Skeleton.Image style={{width: 230, height: 130}} />
    </>
  );
}