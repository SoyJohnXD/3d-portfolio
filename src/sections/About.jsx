import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopy, setHasCopy] = useState(false);
  const handdleCopy = () => {
    navigator.clipboard.writeText("johnjulin2@gmail.com");
    setHasCopy(true);

    setTimeout(() => {
      setHasCopy(false);
    }, 2000);
  };
  return (
    <section className="max-w-7xl mx-auto c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hola mi nombre es John Breyner</p>
              <p className="grid-subtext">
                Tengo +4 años de experiencia, perfeccionando mis habilidades en
                el desarrollo frontend, enfocándome ahora en sitios web animados
                y implementando 3D.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] object-contain mx-auto"
            />
            <div>
              <p className="grid-headtext">Tecnologías</p>
              <p className="grid-subtext">
                Me especializo en JavaScript/TypeScript y Java/PHP, me enfoco en
                ecosistemas React y Next.js, aunque puedo adaptarme a cualquier
                framework basado en JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] hfit flex justify-center items-center">
              <Globe
                height={366}
                width={366}
                size={1.5}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 4.644000377642925,
                    lng: -74.07215412143057,
                    text: "Estoy Aqui!",
                    color: "white",
                    size: 120,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Trabajo remotamente en todo el mundo
              </p>
              <p className="grid-subtext">
                Me ubico en Colombia, disponible para trabajar remotamente.
              </p>
              <Button name="Contactame" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Mi pasión por el código</p>
              <p className="grid-subtext">
                Amo resolver problemas y construir mediante el código. Hacer
                código no es solamente mi profesión, sino una de mis pasiones.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top "
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contáctame</p>
              <div className="copy-container" onClick={handdleCopy}>
                <img
                  src={hasCopy ? "assets/tick.svg" : "assets/copy.svg"}
                  alt=""
                />
                <p className="lg:text-2xl md:text-xl font font-medium text-gray_gradient text-white">
                  johnjulin2@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
