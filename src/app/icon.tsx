import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            color: "#c9a96e",
            fontSize: 36,
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 1,
          }}
        >
          SO
        </span>
      </div>
    ),
    { ...size }
  );
}
