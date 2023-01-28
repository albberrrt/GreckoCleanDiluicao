import React, { FC } from "react";
import { Center, Spinner } from "native-base";

interface ILoadingProps {
    size?: string;
}

const Loading: FC<ILoadingProps> = ({ size }) => {
  return (
    <Center flex={1} bgColor="orange">
      <Spinner color="greckoGreen.800" size={size}></Spinner>
    </Center>
  );
}

export default Loading;