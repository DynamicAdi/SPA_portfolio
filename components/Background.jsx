import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 


export const Links = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
        background: {
            color: {
              value: "#dddddd",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              mode: {
                push: {
                  quantity: 0,
                },
                grab: {
                 duration: 0.1,
                  distance: 50,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#262626",
            },
            links: {
              color: {
                value: "#000",
              },
              enable: true,
              width: 1,
              opacicty: 1,
              distance: 200,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: true,
            },
            collisions: {
              enable: true,
            },
            number: {
              value: 90,
              density: {
                enable: true,
                area: 500,
              },
            },
            shape: {
              type: "circle",
            },

            size: {
              min: 1,
              max: 3,
            },
          },
          detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};