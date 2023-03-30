import react from 'react';
import '../App.css'

function Slider() {

  return (
    <div className="slider js-slider">
      <div className="slider__inner js-slider__inner">
        <div className="slide js-slide">
          <div className="slide__content">
            <figure className="slide__img js-slide__img">
              <img src="https://source.unsplash.com/random/265x533" />
            </figure>
            <figure className="slide__img js-slide__img">
              <img src="https://source.unsplash.com/random/266x534" />
            </figure>
          </div>
          <div className="slider__text">
            <div className="slider__text-line js-slider__text-line">
              <div>Very Large</div>
            </div>
            <div className="slider__text-line js-slider__text-line">
              <div>Pretentious</div>
            </div>
            <div className="slider__text-line js-slider__text-line">
              <div>Quotation</div>
            </div>
            <div className="slider__text-line js-slider__text-line"></div>
          </div>
        </div>
        <div className="slide js-slide">
          <div className="slide__content">
            <figure className="slide__img js-slide__img">
              <img src="https://source.unsplash.com/random/267x535" />
            </figure>
            <figure className="slide__img js-slide__img">
              <img src="https://source.unsplash.com/random/268x536" />
            </figure>
          </div>
          <div className="slider__text">
            <div className="slider__text-line js-slider__text-line">
              <div>Very Large</div>
            </div>
            <div className="slider__text-line js-slider__text-line">
              <div>Pretentious</div>
            </div>
            <div className="slider__text-line js-slider__text-line">
              <div>Quotation</div>
            </div>
            <div className="slider__text-line js-slider__text-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
