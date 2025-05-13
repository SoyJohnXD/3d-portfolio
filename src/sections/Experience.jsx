import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const { t } = useTranslation();
  const workExperiences = t("workExperiences", { returnObjects: true });

  return (
    <section id="experience" className="max-w-7xl mx-auto c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">{t("experience.title")}</h3>
        <div className="work-container">
          <div className="work-canvas cursor-grab">
            <Canvas>
              <PerspectiveCamera
                makeDefault
                position={[0.01, 19.07, 29.05]}
                fov={10}
              />
              <ambientLight intensity={4} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
              />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  animationName={animationName}
                  position-y={-3}
                  scale={3}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, icon, duration, title, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-auto" />
                      </div>
                      <div className="work-content-bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">
                        {t(`experience.jobs.${id}.name`, name)}
                      </p>
                      <p className="text-sm mb-5">
                        {t(`experience.jobs.${id}.pos`, pos)} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {t(`experience.jobs.${id}.title`, title)}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
