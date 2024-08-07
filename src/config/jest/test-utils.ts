/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Provider } from "@/providers";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: Provider, ...options });

export * from "@testing-library/react";
export { customRender };
