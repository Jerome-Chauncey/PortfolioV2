import React, { useEffect, useRef } from 'react';

const DotCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    let cursorVisible = true;
    let cursorEnlarged = false;
    let _x = 0;
    let _y = 0;
    let endX = window.innerWidth / 2;
    let endY = window.innerHeight / 2;
    const delay = 8;

    const $dot = dotRef.current;
    const $outline = outlineRef.current;

    const toggleCursorSize = () => {
      if (cursorEnlarged) {
        $dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
        $outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        $dot.style.transform = 'translate(-50%, -50%) scale(1)';
        $outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const toggleCursorVisibility = () => {
      if (cursorVisible) {
        $dot.style.opacity = 1;
        $outline.style.opacity = 1;
      } else {
        $dot.style.opacity = 0;
        $outline.style.opacity = 0;
      }
    };

    const animateDotOutline = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;
      $outline.style.top = `${_y}px`;
      $outline.style.left = `${_x}px`;
      requestAnimationFrame(animateDotOutline);
    };

    // Event Listeners
    const handleMouseMove = (e) => {
      cursorVisible = true;
      toggleCursorVisibility();

      // Use clientX/clientY instead of pageX/pageY to fix scrolling issue
      endX = e.clientX;
      endY = e.clientY;
      $dot.style.top = `${endY}px`;
      $dot.style.left = `${endX}px`;
    };

    const handleMouseEnter = () => {
      cursorVisible = true;
      toggleCursorVisibility();
      $dot.style.opacity = 1;
      $outline.style.opacity = 1;
    };

    const handleMouseLeave = () => {
      cursorVisible = false;
      toggleCursorVisibility();
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('[role="button"]')) {
        cursorEnlarged = true;
        toggleCursorSize();
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('[role="button"]')) {
        cursorEnlarged = false;
        toggleCursorSize();
      }
    };

    const handleMouseDown = () => {
      cursorEnlarged = true;
      toggleCursorSize();
    };

    const handleMouseUp = () => {
      cursorEnlarged = false;
      toggleCursorSize();
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Start animation
    animateDotOutline();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-dot-outline" />
    </>
  );
};

export default DotCursor;