import { Accessibility, ArrowDown, Camera, Footprints, MapPin, Route, Timer, Trees } from "lucide-react";
import { TourPlanner } from "@/components/tour-planner";
import { places } from "@/lib/travel-data";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="처음으로"><span className="brand-mark"><MapPin /></span><span>청주 한 바퀴</span></a>
        <nav aria-label="주요 메뉴"><a href="#planner">코스 찾기</a><a href="#places">10개 명소</a><a href="#field-notes">현장 체크</a></nav>
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

      <section className="field-notes" id="field-notes">
        <div className="field-title"><Trees /><p className="section-kicker">FIELD CHECK</p><h2>지도에 없는 정보까지<br />직접 확인합니다</h2><p>현장 탐사에서는 단순한 거리보다 실제로 걷기 좋은지, 누구나 접근할 수 있는지를 기록합니다.</p></div>
        <div className="check-grid">
          {[
            [Footprints, "보행 환경", "노면, 그늘, 혼잡도와 걷기 편한 동선을 확인합니다."],
            [Trees, "쉼터", "벤치, 음수대, 화장실과 그늘의 위치를 기록합니다."],
            [Timer, "실제 이동시간", "사이트의 예상시간과 현장 측정시간을 비교합니다."],
            [Accessibility, "접근성", "단차, 경사로, 점자블록과 대체 경로를 확인합니다."],
            [Camera, "현장 사진", "장소별 다섯 장의 핵심 장면을 같은 기준으로 촬영합니다."],
            [Route, "코스 현실성", "긴 구간은 자전거·대중교통·자동차 대안도 살펴봅니다."],
          ].map(([Icon, title, text], index) => {
            const IconComponent = Icon as typeof Footprints;
            return <article key={String(title)}><span>{String(index + 1).padStart(2, "0")}</span><IconComponent /><h3>{String(title)}</h3><p>{String(text)}</p></article>;
          })}
        </div>
      </section>

      <footer>
        <div><p className="footer-title">청주 한 바퀴</p><p>2026 인문자연탐사 44조 · 도시의 물길과 문화길을 잇는 관광 코스 플래너</p></div>
        <div className="source-list"><span>기초 관광정보</span>{places.map((place) => <a href={place.source} key={place.slug} target="_blank" rel="noreferrer">{place.shortName}</a>)}</div>
      </footer>
    </main>
  );
}
