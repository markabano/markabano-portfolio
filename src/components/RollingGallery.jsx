import { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'motion/react';

const IMGS = [
  '/imgs/1.jpeg',
  '/imgs/2.jpeg',
  '/imgs/3.jpeg',
  '/imgs/4.jpeg',
  '/imgs/5.jpeg',
  '/imgs/6.jpeg',
  '/imgs/7.jpeg',
  '/imgs/8.jpeg',
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  const [aspectRatios, setAspectRatios] = useState({}); // store per-image aspect ratio

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, val => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = startAngle => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 20, ease: 'linear', repeat: Infinity }
    });
  };

  useEffect(() => {
    if (autoplay) startInfiniteSpin(rotation.get());
    else controls.stop();
  }, [autoplay]);

  const handleUpdate = latest => {
    if (typeof latest.rotateY === 'number') rotation.set(latest.rotateY);
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) startInfiniteSpin(rotation.get());
  };

  // --- dynamically detect image aspect ratio (portrait / landscape)
  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const ratio = naturalWidth / naturalHeight;
    setAspectRatios(prev => ({ ...prev, [index]: ratio }));
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Fading edges */}
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{ background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)' }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)' }}
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d',
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => {
            const ratio = aspectRatios[i] || 1; // fallback 1:1 before load
            const isLandscape = ratio > 1;
            const width = isLandscape ? 300 : 180;
            const height = isLandscape ? 180 : 260;

            return (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={url}
                  alt="gallery"
                  onLoad={e => handleImageLoad(e, i)}
                  className={`pointer-events-none mx-2 rounded-[15px] border-[3px] border-white/10 object-cover
                    transition-transform duration-300 ease-out
                    ${isLandscape ? 'w-[300px] h-[180px]' : 'w-[180px] h-[260px]'}
                    sm:${isLandscape ? 'w-[220px] h-[140px]' : 'w-[160px] h-[220px]'}`}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
