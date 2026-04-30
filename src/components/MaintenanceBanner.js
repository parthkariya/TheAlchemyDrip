// MaintenanceBanner.jsx
import React from "react";

const MaintenanceBanner = () => {
  const message =
    "⚠️  Website Maintenance Notice  •  Our website will be temporarily unavailable from 29 April 2026, 10:30 PM to 30 April 2026, 10:00 AM due to scheduled server transfer. We apologize for the inconvenience. Thank you for your patience!  •  ";

  const doubleMessage = message + message;

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#f5c518",
        padding: "10px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderBottom: "2px solid #f5c518",
        borderTop: "2px solid #f5c518",
        position: "relative",
        // zIndex: 9999,
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "marqueeScroll 30s linear infinite",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        {doubleMessage}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MaintenanceBanner;
