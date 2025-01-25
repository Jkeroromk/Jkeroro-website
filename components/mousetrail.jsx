'use client'

import React, { useEffect } from "react";
import '../app/globals.css';

const MouseTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    const cursor = document.querySelector(".cursor");

    // Initialize circle positions
    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });

    // Function to update mouse coordinates
    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    // Track mouse movement inside the iframe
    const iframe = document.querySelector("iframe");

    if (iframe) {
      // You will need access to the iframe's contentDocument
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDocument) {
        iframeDocument.addEventListener("mousemove", (e) => {
          coords.x = e.clientX;
          coords.y = e.clientY;
        });
      }
    }

    // Also track mouse movements in the parent document
    window.addEventListener("mousemove", handleMouseMove);

    // Animate the circles based on mouse position
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDocument) {
          iframeDocument.removeEventListener("mousemove", handleMouseMove);
        }
      }
    };
  }, []);

  return (
    <div className="cursor">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default MouseTrail;
