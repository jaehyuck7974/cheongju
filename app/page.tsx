import { ArrowDown, MapPin, Menu, Route } from "lucide-react";
import { TourPlanner } from "@/components/tour-planner";
import { places } from "@/lib/travel-data";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="처음으로"><span className="brand-mark"><MapPin /></span><span>청주 한 바퀴</span></a>
        <nav className="desktop-nav" aria-label="주요 메뉴"><a href="#planner">코스 찾기</a><a href="#places">10개 명소</a></nav>
        <details className="mobile-nav">
          <summary aria-label="모바일 메뉴 열기"><Menu /><span>메뉴</span></summary>
          <nav aria-label="모바일 주요 메뉴"><a href="#planner">코스 찾기</a><a href="#places">10개 명소</a></nav>
        </details>
      </header>

      <section className="product-hero" id="top">
        <div className="hero-main">
          <p className="section-kicker">2026 인문자연탐사 · 44조</p>
          <h1>가고 싶은 곳을 고르면,<br /><span>청주 코스가 완성됩니다.</span></h1>
          <p>무심천부터 고인쇄박물관, 국립현대미술관 청주까지. 한 장소를 선택하면 그곳이 포함된 여행 코스와 이동시간을 지도에서 비교해 보세요.</p>
          <a href="#planner" className="hero-button">지금 코스 찾기 <ArrowDown /></a>
        </div>
        <div className="hero-dashboard" aria-label="사이트 주요 정보">
          <div><span>DESTINATIONS</span><strong>10</strong><p>자연·역사·시장·미술</p></div>
          <div><span>CURATED ROUTES</span><strong>16</strong><p>반나절부터 1박 2일까지</p></div>
          <div><span>TRAVEL MODES</span><strong>02</strong><p>도보와 자동차 시간 비교</p></div>
          <div className="hero-map-mark"><Route /><p>장소 선택<br />→ 코스 필터<br />→ 지도 확인</p></div>
        </div>
      </section>

      <TourPlanner />

      <footer>
        <div><p className="footer-title">청주 한 바퀴</p><p>2026 인문자연탐사 44조 · 도시의 물길과 문화길을 잇는 관광 코스 플래너</p></div>
        <div className="source-list"><span>기초 관광정보</span>{places.map((place) => <a href={place.source} key={place.slug} target="_blank" rel="noreferrer">{place.shortName}</a>)}</div>
      </footer>
    </main>
  );
}
