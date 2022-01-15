import styled from "styled-components";
import { CustomHeader } from "../ui";
// import RoadmapFullImage from "./../../assets/images/background/roadmap.png";
import RoadmapImage from "./../../assets/images/roadmap.png";

export const RoadmapWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const RoadmapHeader = styled(CustomHeader)`
  width: 100%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 72px;
    wdith: 75%;
    margin: 0 auto;
  }
`;

export const RoadmapLineBg = styled.div`
  height: 1200px;
  background: url(${RoadmapImage});
  background-repeat: no-repeat;
  margin-top: 50px;
  width: 100%;
  background-position: top left;
  position: absolute;
  left: 50%;
  transform: translate(-25%);
`;

export const RoadmapBgWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const RoadmapContent = styled.div`
  position: absolute;
  withd: 100%;
  top: 800px;
  left: 25%;
  transform: translate(-25%);
`;

export const RoadmapImageWrapper = styled.div`
  margin-top: 45px;
  text-align: center;
`;

export const RoadmapImageSection = styled.img``;

export const RoadmapContentWrapper = styled.div`
  margin-top: 45px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
`;

export const RoadmapContentLine = styled.div`
  width: 50%;
  height: 15px;
  border-radius: 20px;
  position: relative;
  &:nth-child(1) {
    background: #347a8c;
  }
  &:nth-child(2) {
    background: #f0bf28;
  }
  &:nth-child(3) {
    background: #347a8c;
  }
  &:nth-child(4) {
    background: #f2dd93;
  }
  &:nth-child(5) {
    background: #c0c4c5;
  }
  &:nth-child(6) {
    background: #f0bf28;
  }
  &:nth-child(7) {
    background: #c0c4c5;
  }
  &:nth-child(8) {
    background: #f0bf28;
  }
  margin: 0 auto;
`;

export const RoadmapContentLineOuterPointer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #b8b8b8;
`;

export const RoadmapContentLineInnerPointer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
`;

export const RoadmapContentCirlce = styled.div`
  width: 75px;
  height: 75px;
  border: 5px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoadmapLineContent = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  width: 100%;
`;

export const RoadmapContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  // background: linear-gradient(45deg, #209cff, #68e0cf);
  padding: 3rem 0;
`;

export const RoadmapContentMainWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 2.5rem;
  border-radius: 15px;
`;

export const RoadmapContentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const RoadmapContentListItem = styled.li`
  list-style: none;
  padding: 0;

  padding-bottom: 3rem;
  border-left: 1px solid #b7f84d;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
  &:last-child {
    border: 0px;
    padding-bottom: 0;
  }
  &:before {
    content: "";
    width: 15px;
    height: 15px;
    background: rgba(183, 248, 77, 1);
    border: 1px solid #b7f84d;
    box-shadow: 3px 3px 0px rgba(183, 248, 77, 0.5);
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: 0px;
  }
`;

export const RoadmapContentTime = styled.div`
  color: #b7f84d;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  @media screen and (min-width: 601px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
  }
`;

export const RoadmapContentText = styled.p`
  color: rgba(255, 255, 255, 1);
  font-family: sans-serif;
  line-height: 1.5;
  margin-top: 0.4rem;
  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const RoadmapTextTitle = styled.h1`
  font-size: 1.1rem;
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 25px;
  background: -webkit-linear-gradient(
    270.35deg,
    #b7f84d 0.39%,
    #ffffff 102.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
