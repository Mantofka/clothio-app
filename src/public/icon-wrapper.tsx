import React from "react";

import { useAppSelector } from "../redux/store";
import { selectThemeMode } from "../redux/interface/interface.selector";

const IconWrapper: React.FC<{
  Component: React.FC<{
    themeMode: string;
    style?: React.CSSProperties;
    isOpened?: boolean;
  }>;
  isOpened?: boolean;
  otherProps?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ Component, style, isOpened, ...otherProps }) => {
  const themeMode = useAppSelector(selectThemeMode);
  return (
    <div style={style}>
      <Component {...otherProps} isOpened={isOpened} themeMode={themeMode} />
    </div>
  );
};
export default IconWrapper;
