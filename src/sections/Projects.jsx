import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [setselectedProjectIndex, setSetselectedProjectIndex] = useState(0);

  const myProjects = t("projects.myProjects", { returnObjects: true });
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSetselectedProjectIndex((prevState) => {
      if (direction === "prev") {
        return prevState === 0 ? projectCount - 1 : prevState - 1;
      } else {
        return prevState === projectCount - 1 ? 0 : prevState + 1;
      }
    });
  };

  const currenProject = myProjects[setselectedProjectIndex];

  return (
    <section id="work" className="max-w-7xl mx-auto c-space my-20">
      <p className="head-text">{t("projects.title")}</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currenProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currenProject.logoStyle}
          >
            <img
              src={currenProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5 ">
            <p className="text-white text-2xl font-semibold animatedText">
              {currenProject.title}
            </p>
            <p className="animatedText">{currenProject.desc}</p>
            <p className="animatedText">{currenProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currenProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            {currenProject.href && (
              <a
                href={currenProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 cursor-pointer text-white-600"
              >
                <p>Demo </p>
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="w-3 h-3"
                />
              </a>
            )}
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="2-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("prev")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="2-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-300 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10.5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currenProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
