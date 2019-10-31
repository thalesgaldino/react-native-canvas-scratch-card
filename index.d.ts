import * as React from "react";
import { ViewProperties, StyleProp, ViewStyle } from "react-native";

type ImageType = "png" | "jpg";

type Size = {
  width: number;
  height: number;
};

type PathData = {
  id: number;
  color: string;
  width: number;
  data: string[];
};

type Path = {
  drawer?: string;
  size: Size;
  path: PathData;
};

export interface LocalSourceImage {
  path: string;
  directory?: string;
  mode?: "AspectFill" | "AspectFit" | "ScaleToFill";
}

export interface ScratchCardProps {
  style?: StyleProp<ViewStyle>;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  bgImage?: LocalSourceImage;
}

export class ScratchCard extends React.Component<
  ScratchCardProps & ViewProperties
> {}