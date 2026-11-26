import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Rasterise the SVG favicon so iOS gets the same mark at home-screen size.
const iconData = await readFile(join(process.cwd(), "app/icon.svg"), "base64");
const iconSrc = `data:image/svg+xml;base64,${iconData}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#0d0e0f" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={iconSrc} width={size.width} height={size.height} alt="" />
      </div>
    ),
    size,
  );
}
