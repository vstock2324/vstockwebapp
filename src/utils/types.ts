/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fabric from "fabric";
import {z} from "zod";
export type EditorElementBase<T extends string> = {
  readonly id: string;
  readonly type: T;
};
export type VideoEditorElement = EditorElementBase<"video">;
export type ImageEditorElement = EditorElementBase<"image">;
export type AudioEditorElement = EditorElementBase<"audio">;
export type TextEditorElement = EditorElementBase<"text">;

export type MenuOption =
  | "Video"
  | "Audio"
  | "Images"
  | "Export"
  | "Animation"
  | "Effect"
  | "Fill"
  | "Assets"
  | "Stickers"
  | "Shapes"
  | null;

export type EditorElement =
  | VideoEditorElement
  | ImageEditorElement
  | AudioEditorElement
  | TextEditorElement;

export type Placement = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
};


export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const Pages = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
});