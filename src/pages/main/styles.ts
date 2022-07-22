import styled from "styled-components"

import BannerMobile from "../../assets/banner-intibiome-02.png"
import BannerDesktop from "../../assets/banner-hero.png"
import AdvantagesImage from "../../assets/icons.png"
import BannerProductsMobile from "../../assets/banner-intibiome-products.png"
import BannerProductsDesktop from "../../assets/products.png"

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
`

export const BannerImg = styled.div`
  width: 100%;
  height: 500px;
  background: url(${BannerMobile}) no-repeat center;
  background-size: cover;

  @media (min-width: 768px) {
    background: url(${BannerDesktop}) no-repeat center;
  }
`

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;

  h2 {
    color: var(--blue);
    text-align: center;
    font-size: 31px;
    margin: 35px auto;
  }

  h2 + h2 {
    margin-top: -25px;
  }

  p {
    color: var(--grey);
    text-align: center;
    line-height: 22px;
    margin-bottom: 15px;
    letter-spacing: 0.32px;
  }
`

export const AdvantagesImg = styled.div`
  width: 100%;
  height: 125px;
  background: url(${AdvantagesImage}) no-repeat center;
  background-size: cover;
`
export const StyledH2 = styled.h2`
  color: var(--blue);
  text-align: center;
  font-size: 31px;
  margin: 35px auto;
`
export const BannerProducts = styled.div`
  width: 100%;
  height: 470px;
  margin: 60px auto;
  background: url(${BannerProductsMobile}) no-repeat center;
  background-size: cover;

  @media (min-width: 768px) {
    background: url(${BannerProductsDesktop}) no-repeat center;
  }
`
