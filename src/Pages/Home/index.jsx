import React from "react";
import Carrosel from "react-elastic-carousel";
import VideoBanner from "../../assets/videos/videoBanner.mp4";
import "./styles.css";
import SerieItem from "../../Components/SerieItem";
const Home = () => {
  return (
    <>
      <header>
        <img
          src="https://fontmeme.com/temporary/d7fa46218581e004139f5ad9298e915d.png"
          draggable={false}
          alt="Netflix logo"
        />
        <div className="options">
          <div className="avatar"></div>
          <p>Teste</p>
        </div>
      </header>
      <div className="banner">
        <div className="description">
          <h1>Apenas um show</h1>
          <p>
            A série gira em torno da vida de dois amigos da classe trabalhadora,
            um gaio azul chamado Mordecai e um guaxinim chamado Rigby, que
            trabalham em um parque. Eles geralmente tentam resolver um problema
            simples que os leva a uma desventura surreal, extrema e muitas vezes
            sobrenatural.
          </p>
        </div>
        <video width="490" height="300" controls>
          <source src={VideoBanner} type="video/mp4" />
        </video>
      </div>
      <section className="series">
        <Carrosel
          itemsToShow={4}
          pagination={false}
          showArrows={false}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={450}
        >
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
        </Carrosel>
      </section>
      <section className="series">
        <Carrosel
          itemsToShow={4}
          pagination={false}
          showArrows={false}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={450}
        >
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
        </Carrosel>
      </section>
      <section className="series">
        <Carrosel
          itemsToShow={4}
          pagination={false}
          showArrows={false}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={450}
        >
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
        </Carrosel>
      </section>
      <section className="series">
        <Carrosel
          itemsToShow={4}
          pagination={false}
          showArrows={false}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={450}
        >
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
          <SerieItem />
        </Carrosel>
      </section>
    </>
  );
};
export default Home;
