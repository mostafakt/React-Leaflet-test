import { Box } from "@mui/system";
import styled from "styled-components";

const FooterSt = styled.footer`
  display: flex;
  flex-direction: column;
`;
const FirstSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  min-height: 312px;
  background: #f2f2f2;
`;
const SecoundSection = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: linear-gradient(
    269.87deg,
    rgba(209, 77, 205, 0.25) 0%,
    rgba(59, 126, 197, 0.25) 100%
  );
`;
const SideContainer = styled(Box)`
  padding-bottom: 45px;
  display: flex;
  min-height: 144px;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
const RightSideContainer = styled(Box)`
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  min-height: 144px;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
`;
const LogoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;
const MapContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;
const LinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
const RightLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
`;
const Line = styled.div<{ width: number }>`
  width: ${(prps) => prps.width}px;

  height: 1px;
  background: #bdbdbd;
`;
const FullLine = styled.line`
  width: calc((100vw - 288px) / 2);
  height: 1px;

  background: #bdbdbd;
`;
const ContuctUs = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #828282;
  }
`;
export {
  ContuctUs,
  RightSideContainer,
  FullLine,
  SideContainer,
  MapContainer,
  RightLinesContainer,
  Line,
  LinesContainer,
  LogoContainer,
  FooterSt,
  FirstSection,
  SecoundSection,
};
