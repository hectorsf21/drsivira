import React from 'react'
import Image from 'next/image';
// IMAGENES
// slider 1
import slider1 from '../assets/image/slider-1.jpg';
import sliderMobilem from '../assets/image/slider-mobilem.jpg';
import sliderMobilem2 from '../assets/image/slider-mobilem2.jpg';
import sliderMobile1 from '../assets/image/slider-mobile1.jpg';
import sliderSm1 from '../assets/image/slider-sm1.jpg';
import sliderMd1 from '../assets/image/slider-md1.jpg';
// slider 2
import slider2 from '../assets/image/slider-2.jpg'
import sliderMobile2 from '../assets/image/slider-mobile2.jpg'
import sliderSm2 from '../assets/image/slider-sm2.jpg';
import sliderMd2 from '../assets/image/slider-md2.jpg';
// slider 3
import slider3 from '../assets/image/slider-3.jpg'
import sliderMobile3 from '../assets/image/slider-mobile3.jpg'
import sliderSm3 from '../assets/image/slider-sm3.jpg';
import sliderMd3 from '../assets/image/slider-md3.jpg';
// slider 4
import slider4 from '../assets/image/slider-4.jpg'
import sliderMobile4 from '../assets/image/slider-mobile4.jpg'
import sliderSm4 from '../assets/image/slider-sm4.jpg';
import sliderMd4 from '../assets/image/slider-md4.jpg';

import Navbar from './Navbar';
import sliderStyle from '../styles/Slider.module.css';

export default function slider() {
  return (
    <div id='Inicio'>
      <Navbar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          {/* SLIDER 1 */}
          <div className="carousel-item active  position-relative">
            <div className={sliderStyle.cel}>
              <Image src={sliderMobilem} alt='img-sliderMobilem'/>
            </div>
            <div className={sliderStyle.cel2}>
              <Image src={sliderMobilem2} alt='img-sliderMobilem'/>
            </div>
            <div className={sliderStyle.mobileMin}>
              <div className='d-block d-sm-none d-md-none'>
                <Image src={sliderMobile1} className="d-block w-100" alt='img-slider-mobile1' />
              </div>
            </div>
            <div className='d-none d-sm-block d-md-none'>
              <Image src={sliderSm1} className="d-block w-100" alt='img-slider-sm1' />
            </div>
            <div className='d-none d-sm-none d-md-block d-lg-none'>
              <Image src={sliderMd1} className="d-block w-100" alt='img-slider-md1' />
            </div>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
              <Image src={slider2} className="d-block w-100" alt='img-slider-desk1' />
            </div>
            <div className={sliderStyle.contentSlider1}>
              <h1>Dr. José Manuel Sivira</h1>
              <p>Cirujano Ortopedista</p>
              <p>Especialista en Rodilla y Cadera</p>
            </div>
            {/* <img src={slider1} className="d-block w-100" alt="1" /> */}
          </div>
          {/* SLIDER 2 */}
          <div className="carousel-item position-relative">
            <div className='d-block d-sm-none'>
              <Image src={sliderMobile2} className="d-block w-100" alt='img-slider-mobile1' />
            </div>
            <div className='d-none d-sm-block d-md-none'>
              <Image src={sliderSm2} className="d-block w-100" alt='img-slider-sm2' />
            </div>
            <div className='d-none d-sm-none d-md-block d-lg-none'>
              <Image src={sliderMd2} className="d-block w-100" alt='img-slider-md2' />
            </div>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
              <Image src={slider1} className="d-block w-100" alt='img-slider-desk2' />
            </div>
            <div className={sliderStyle.contentSlider2}>
              <h1>Alta experiencia en reemplazo articular</h1>
            </div>
            {/* <img src={slider2} className="d-block w-100" alt="2" /> */}
          </div>
          {/* SLIDER 3 */}
          <div className="carousel-item   position-relative">
            <div className='d-block d-sm-none'>
              <Image src={sliderMobile3} className="d-block w-100" alt='img-slider-mobile3' />
            </div>
            <div className='d-none d-sm-block d-md-none'>
              <Image src={sliderSm3} className="d-block w-100" alt='img-slider-sm3' />
            </div>
            <div className='d-none d-sm-none d-md-block d-lg-none'>
              <Image src={sliderMd3} className="d-block w-100" alt='img-slider-md3' />
            </div>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
              <Image src={slider3} className="d-block w-100" alt='img-slider-desk3' />
            </div>
            <div className={sliderStyle.contentSlider3}>
              <h1>No te acostumbres al <span>DOLOR</span>, vivir con dolor no es realmente vivir</h1>
            </div>
            {/* <img src={slider3} className="d-block w-100" alt="3" /> */}
          </div>
          {/* SLIDER 4 */}
          <div className="carousel-item  position-relative">
            <div className='d-block d-sm-none'>
              <Image src={sliderMobile4} className="d-block w-100" alt='img-slider-mobile1' />
            </div>
            <div className='d-none d-sm-block d-md-none'>
              <Image src={sliderSm4} className="d-block w-100" alt='img-slider-sm2' />
            </div>
            <div className='d-none d-sm-none d-md-block d-lg-none'>
              <Image src={sliderMd4} className="d-block w-100" alt='img-slider-md2' />
            </div>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
              <Image src={slider4} className="d-block w-100" alt='img-slider-desk2' />
            </div>
            <div className={sliderStyle.contentSlider4}>
              <h1>Técnica de abordaje de cadera tipo bikini</h1>
            </div>
            {/* <img src={slider2} className="d-block w-100" alt="2" /> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
