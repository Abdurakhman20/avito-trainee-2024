import { Button } from "antd";

type MyButtonProps = {
  text: string;
}

const MyButton = ({ text } : MyButtonProps) => {
  return (
    <>
      <Button size="large" type="primary" >{text}</Button>
    </>
  );
};

export default MyButton;
