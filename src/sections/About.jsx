import { useState } from "react";
import { useTranslation } from "react-i18next";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const { t } = useTranslation();
  const [hasCopy, setHasCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(t("about.email"));
    setHasCopy(true);
    setTimeout(() => setHasCopy(false), 2000);
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
              <p className="grid-headtext">{t("about.introTitle")}</p>
              <p className="grid-subtext">{t("about.introText")}</p>
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
              <p className="grid-headtext">{t("about.techTitle")}</p>
              <p className="grid-subtext">{t("about.techText")}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
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
                    lat: 4.644,
                    lng: -74.072,
                    text: t("about.remoteTitle"),
                    color: "white",
                    size: 120,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">{t("about.remoteTitle")}</p>
              <p className="grid-subtext">{t("about.remoteText")}</p>
              <a href="#contact" className="w-fit">
                <Button
                  name={t("about.contactButton")}
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
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
              <p className="grid-headtext">{t("about.passionTitle")}</p>
              <p className="grid-subtext">{t("about.passionText")}</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.webp"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">{t("about.copyLabel")}</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopy ? "assets/tick.svg" : "assets/copy.svg"}
                  alt=""
                />
                <p className="lg:text-2xl md:text-xl font-medium text-white">
                  {t("about.email")}
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
