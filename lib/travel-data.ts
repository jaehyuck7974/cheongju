export type Place = {
  slug: string;
  number: string;
  shortName: string;
  name: string;
  category: "자연" | "역사" | "시장" | "거리" | "미술" | "박물관" | "전망";
  address: string;
  lead: string;
  description: string;
  highlights: string[];
  photoGuide: string[];
  accent: string;
  map: { x: number; y: number };
  source: string;
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  theme: "산책" | "역사" | "예술" | "미식" | "가족" | "종합";
  stops: string[];
  walkMinutes: number;
  driveMinutes: number;
  recommendedMinutes: number;
  storyTitle: string;
  story: string;
  note: string;
  color: string;
};

export const places: Place[] = [
  {
    slug: "musimcheon", number: "01", shortName: "무심천", name: "무심천",
    category: "자연", address: "청주대교 사거리와 무심천 산책로 일대",
    lead: "청주를 남북으로 잇는 물길과 계절 산책로",
    description: "무심천은 청주 도심의 대표적인 물길이자 시민의 일상적인 산책 공간입니다. 봄철 벚꽃길과 자전거길이 잘 알려져 있으며, 현장에서는 그늘·벤치·노면과 보행 동선을 함께 살펴볼 수 있습니다.",
    highlights: ["벚꽃길", "하천 산책", "자전거길"], photoGuide: ["하천 전경", "계절 풍경", "산책로", "쉼터", "진입로"], accent: "#1b8a83", map: { x: 253, y: 354 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=69af1fbc-fe22-4f08-b43e-a362792871bc",
  },
  {
    slug: "yonghwasa", number: "02", shortName: "용화사", name: "용화사",
    category: "역사", address: "청주시 서원구 무심서로 565",
    lead: "무심천 곁에서 만나는 칠존 석불과 고요한 경내",
    description: "현재의 용화사는 1902년에 세워졌으며 무심천변에서 발견된 일곱 석불을 모신 이야기로 알려져 있습니다. 도심과 사찰의 고요함이 맞닿는 풍경이 인상적인 곳입니다.",
    highlights: ["칠존 석불", "미륵보전", "무심천 연결"], photoGuide: ["사찰 전경", "석불군", "건축 세부", "무심천 연결길", "접근시설"], accent: "#d76435", map: { x: 222, y: 332 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=aa342e45-8135-4555-b228-2296c1fba9e5",
  },
  {
    slug: "jungang-park", number: "03", shortName: "중앙공원", name: "중앙공원",
    category: "역사", address: "청주시 상당구 남사로 117",
    lead: "압각수와 망선루가 있는 도심 속 역사 공원",
    description: "중앙공원에는 오랜 세월을 지닌 은행나무 압각수와 고려시대 누각 망선루 등 여러 문화유산이 모여 있습니다. 성안길과 바로 이어져 짧은 도보 코스의 중심이 됩니다.",
    highlights: ["압각수", "망선루", "도심 쉼터"], photoGuide: ["공원 전경", "압각수", "망선루", "문화유산", "쉼터"], accent: "#4b8b45", map: { x: 382, y: 314 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=ef667365-7501-4e1c-9629-09949f68505c",
  },
  {
    slug: "seongan-gil", number: "04", shortName: "성안길", name: "성안길",
    category: "거리", address: "청주시 상당구 성안로·상당로 일대",
    lead: "옛 청주읍성 안에서 이어지는 쇼핑·음식 거리",
    description: "성안길은 옛 청주읍성 안쪽의 거리라는 뜻을 품고 있습니다. 상점과 식당, 카페가 모인 보행 중심 거리로 중앙공원과 육거리종합시장 사이의 연결축입니다.",
    highlights: ["보행 거리", "상점과 골목", "도심 연결"], photoGuide: ["거리 입구", "대표 골목", "상점 풍경", "거리 시설", "연결길"], accent: "#7d5db3", map: { x: 390, y: 355 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=893666c4-c22e-4a47-9825-6a3e075e689b",
  },
  {
    slug: "yukgeori", number: "05", shortName: "육거리", name: "육거리종합시장",
    category: "시장", address: "청주시 상당구 석교동 일대",
    lead: "청주의 먹거리와 생활문화가 모이는 전통시장",
    description: "육거리종합시장은 농수산물과 반찬, 먹거리, 생활용품이 골목마다 이어지는 청주의 대표 전통시장입니다. 가게의 종류와 시장 안 길 찾기, 방문객의 흐름을 함께 관찰하기 좋습니다.",
    highlights: ["전통 먹거리", "시장 골목", "생활문화"], photoGuide: ["시장 입구", "아케이드", "대표 먹거리", "가게", "안내시설"], accent: "#d99a19", map: { x: 420, y: 418 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=263be09c-2e8a-4124-be3d-be2abd207a36",
  },
  {
    slug: "jikji", number: "06", shortName: "고인쇄박물관", name: "청주고인쇄박물관",
    category: "박물관", address: "청주시 흥덕구 직지대로 713",
    lead: "직지와 금속활자의 역사를 만나는 기록문화 공간",
    description: "흥덕사지와 함께 자리한 박물관으로, 현존하는 세계 최고 금속활자본 직지와 한국 인쇄문화의 흐름을 살펴볼 수 있습니다. 기록문화와 도시 역사를 묶는 코스의 출발점으로 적합합니다.",
    highlights: ["직지", "금속활자", "흥덕사지"], photoGuide: ["박물관 전경", "직지 전시", "인쇄 도구", "흥덕사지", "무장애 동선"], accent: "#bd493f", map: { x: 92, y: 286 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=aac31768-49f2-491f-bf2e-7e977d7c43b7",
  },
  {
    slug: "mmca", number: "07", shortName: "MMCA 청주", name: "국립현대미술관 청주",
    category: "미술", address: "청주시 청원구 상당로 314",
    lead: "수장과 보존의 과정을 공개하는 수장형 미술관",
    description: "옛 연초제조창을 재생한 문화제조창 안에 자리합니다. 개방수장고와 보이는 수장고, 보존과학 공간을 통해 작품이 전시되기 전후의 과정까지 가까이 볼 수 있습니다.",
    highlights: ["개방수장고", "보존과학", "문화제조창"], photoGuide: ["건물 외관", "개방수장고", "전시 공간", "문화제조창", "편의시설"], accent: "#2b6db1", map: { x: 430, y: 164 },
    source: "https://www.mmca.go.kr/visitingInfo/cheongjuInfo.do",
  },
  {
    slug: "cmoa", number: "08", shortName: "시립미술관", name: "청주시립미술관",
    category: "미술", address: "청주시 서원구 충렬로18번길 50",
    lead: "무심천과 사직동을 잇는 청주의 공공 미술관",
    description: "청주 지역 미술과 동시대 시각예술을 소개하는 전시 공간입니다. 무심천·용화사와 가까워 산책과 전시를 결합한 반나절 코스를 구성하기 좋습니다.",
    highlights: ["기획전시", "지역 미술", "무심천 인접"], photoGuide: ["미술관 전경", "전시 작품", "전시실", "야외 공간", "접근로"], accent: "#a84f8b", map: { x: 166, y: 311 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=6e3d42c1-fd46-4c34-9679-06db5ed94f9d",
  },
  {
    slug: "suamgol", number: "09", shortName: "수암골", name: "수암골 전망대·벽화마을",
    category: "전망", address: "청주시 상당구 수동 일대",
    lead: "골목 벽화와 청주 시가지를 함께 보는 언덕 마을",
    description: "좁은 골목과 벽화, 전망대가 이어지는 언덕 마을입니다. 오르막과 계단이 있어 실제 보행 난이도와 쉬어 갈 공간을 확인하기 좋으며, 해 질 무렵 도심 전망 코스에 어울립니다.",
    highlights: ["도심 전망", "벽화 골목", "카페거리"], photoGuide: ["전망대", "벽화 골목", "계단과 경사", "카페거리", "야경"], accent: "#d36a73", map: { x: 528, y: 230 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=a32a00f2-f223-44e1-a1aa-1774a849221c",
  },
  {
    slug: "national-museum", number: "10", shortName: "국립청주박물관", name: "국립청주박물관",
    category: "박물관", address: "청주시 상당구 명암로 143",
    lead: "충북의 선사·고대 문화를 담은 숲속 박물관",
    description: "충북 지역에서 출토된 문화유산을 시대별로 살펴볼 수 있는 국립박물관입니다. 자연과 어우러진 건축과 야외 공간까지 함께 둘러볼 수 있어 가족·교육형 코스의 중심이 됩니다.",
    highlights: ["충북 문화유산", "건축과 정원", "가족 관람"], photoGuide: ["박물관 전경", "상설전시", "대표 유물", "야외 정원", "편의시설"], accent: "#6476b6", map: { x: 594, y: 82 },
    source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=ee2ed063-ec93-40c8-9e63-b659d32df637",
  },
];

export const courses: Course[] = [
  { id: "river-art", title: "물길 옆 예술 산책", subtitle: "사찰에서 미술관까지 천천히", theme: "산책", stops: ["yonghwasa", "musimcheon", "cmoa"], walkMinutes: 42, driveMinutes: 14, recommendedMinutes: 210, storyTitle: "고요함, 물길, 예술을 한 번에", story: "관광지를 빠르게 소비하기보다 청주의 차분한 분위기에 천천히 스며들고 싶다면 이 코스가 잘 맞습니다. 용화사의 고요함에서 무심천의 열린 풍경으로, 다시 청주시립미술관의 작품으로 이어져 짧은 이동 안에서도 분위기가 세 번 바뀝니다. 평탄한 하천 구간이 중심이라 걷는 부담은 낮추면서 휴식과 문화 경험을 함께 챙길 수 있습니다.", note: "평탄한 하천 구간 중심", color: "#1b8a83" },
  { id: "downtown-classic", title: "청주 도심 클래식", subtitle: "시장·거리·공원을 한 번에", theme: "미식", stops: ["yukgeori", "seongan-gil", "jungang-park"], walkMinutes: 34, driveMinutes: 16, recommendedMinutes: 210, storyTitle: "청주의 생활문화를 가장 압축적으로", story: "청주다운 먹거리와 거리의 활기, 도심의 역사를 짧은 시간에 모두 보고 싶을 때 선택하기 좋은 코스입니다. 육거리시장에서 지역의 맛을 경험하고 성안길의 현재를 지나 중앙공원의 오래된 나무와 문화유산에 닿습니다. 장소들이 가깝게 이어져 이동보다 구경과 식사에 시간을 더 쓸 수 있다는 점도 큰 장점입니다.", note: "차보다 도보 이동 추천", color: "#d99a19" },
  { id: "print-river", title: "직지에서 무심천까지", subtitle: "기록문화와 물길을 잇는 탐사", theme: "역사", stops: ["jikji", "cmoa", "yonghwasa", "musimcheon"], walkMinutes: 62, driveMinutes: 19, recommendedMinutes: 300, storyTitle: "기록의 도시가 오늘의 풍경으로 이어지는 길", story: "직지를 한 점의 유물로만 보는 대신 그 기록 정신이 오늘의 청주 문화와 어떻게 이어지는지 경험할 수 있습니다. 고인쇄박물관에서 출발해 지역 미술과 사찰의 시간을 차례로 만나고, 마지막에는 무심천의 일상적인 풍경으로 나아갑니다. 역사 관람 뒤 자연 속에서 숨을 돌릴 수 있어 긴 박물관 코스가 부담스러운 사람에게도 균형이 좋습니다.", note: "박물관 관람시간 확보", color: "#bd493f" },
  { id: "art-city", title: "현대미술과 도심 전망", subtitle: "수장고에서 언덕 골목까지", theme: "예술", stops: ["mmca", "suamgol", "jungang-park", "seongan-gil"], walkMinutes: 61, driveMinutes: 21, recommendedMinutes: 300, storyTitle: "작품 안과 도시 밖을 함께 보는 예술 여행", story: "전시장 안의 작품만 보고 돌아오기 아쉽다면 도시 전체를 하나의 풍경처럼 감상해 보세요. 국립현대미술관의 수장과 보존 공간을 본 뒤 수암골에 올라 청주를 넓게 바라보고, 공원과 성안길로 내려오며 예술이 일상과 만나는 장면을 발견합니다. 전시 감상과 전망, 골목 사진을 한 번에 즐기고 싶은 사람에게 특히 잘 맞습니다.", note: "수암골 오르막 포함", color: "#2b6db1" },
  { id: "museum-belt", title: "청주 박물관 벨트", subtitle: "고대부터 기록과 현대미술까지", theme: "역사", stops: ["national-museum", "mmca", "jikji"], walkMinutes: 150, driveMinutes: 31, recommendedMinutes: 390, storyTitle: "청주의 시간을 한 번에 관통하는 박물관 여행", story: "서로 다른 박물관 세 곳을 연결하면 청주와 충북의 시간이 고대에서 현대까지 한눈에 정리됩니다. 국립청주박물관의 문화유산, 국립현대미술관의 수장·보존 현장, 고인쇄박물관의 직지를 차례로 보며 ‘무엇을 남기고 어떻게 전하는가’를 비교할 수 있습니다. 단순 관람보다 깊이 있는 문화 탐방을 원하는 사람에게 가장 밀도 높은 선택입니다.", note: "차량·대중교통 추천", color: "#6476b6" },
  { id: "market-river", title: "시장과 무심천", subtitle: "먹거리 뒤 가볍게 걷는 코스", theme: "미식", stops: ["yukgeori", "musimcheon", "yonghwasa"], walkMinutes: 30, driveMinutes: 12, recommendedMinutes: 180, storyTitle: "먹고 걷고 쉬는 균형 좋은 반나절", story: "여행 일정은 짧지만 청주의 맛과 분위기를 모두 놓치고 싶지 않을 때 알맞습니다. 육거리시장에서 든든하게 먹고 무심천을 걸으며 몸을 가볍게 한 뒤, 용화사의 조용한 경내에서 여정을 마무리합니다. 활기와 휴식의 대비가 분명하고 이동 거리도 짧아 부담 없이 청주를 경험할 수 있습니다.", note: "반나절 도보 코스", color: "#e17f32" },
  { id: "three-museums", title: "세 개의 미술·박물관", subtitle: "충북 문화와 동시대 미술", theme: "예술", stops: ["national-museum", "mmca", "cmoa"], walkMinutes: 108, driveMinutes: 24, recommendedMinutes: 360, storyTitle: "세 문화기관의 서로 다른 시선을 비교하는 하루", story: "한 곳의 전시만 보는 것보다 문화유산과 현대미술, 지역 미술을 비교할 때 청주의 문화적 폭이 더 선명해집니다. 국립청주박물관에서 시대의 토대를 보고, 국립현대미술관에서 작품이 보존되는 과정을 살핀 뒤, 청주시립미술관에서 지역의 현재를 만납니다. 전시를 깊이 보고 싶거나 날씨에 구애받지 않는 문화 중심 일정을 찾는 사람에게 추천합니다.", note: "월요일 휴관 여부 확인", color: "#7d5db3" },
  { id: "old-cheongju", title: "오래된 청주의 결", subtitle: "직지부터 전통시장까지", theme: "역사", stops: ["jikji", "jungang-park", "seongan-gil", "yukgeori"], walkMinutes: 64, driveMinutes: 23, recommendedMinutes: 300, storyTitle: "박제된 역사가 아닌 살아 있는 도심의 역사", story: "청주의 역사를 전시실 안에서만 배우지 않고 지금도 사람들이 오가는 거리와 시장에서 확인하는 코스입니다. 직지의 기록문화에서 출발해 중앙공원의 문화유산, 옛 읍성 안쪽의 성안길을 지나 육거리시장에 닿습니다. 과거의 흔적이 오늘의 상점과 생활 속에 어떻게 남아 있는지 직접 걸으며 이해할 수 있습니다.", note: "도심부 주차 이동 고려", color: "#7b6542" },
  { id: "sunset-city", title: "전망과 야경 코스", subtitle: "수암골에서 성안길 저녁까지", theme: "산책", stops: ["suamgol", "mmca", "seongan-gil", "jungang-park"], walkMinutes: 67, driveMinutes: 21, recommendedMinutes: 270, storyTitle: "시간이 풍경을 바꾸는 순간을 따라가는 코스", story: "같은 도시도 오후와 저녁에는 전혀 다른 표정을 보여줍니다. 수암골에서 넓은 시야로 청주를 바라보고 문화제조창을 거쳐, 불빛이 켜지는 성안길과 차분해지는 중앙공원까지 이동합니다. 전망과 골목, 야경을 함께 담고 싶은 사진 여행이나 여유로운 저녁 데이트에 어울립니다.", note: "해 질 무렵 출발 추천", color: "#d36a73" },
  { id: "family-culture", title: "가족 문화 나들이", subtitle: "박물관과 공원을 여유롭게", theme: "가족", stops: ["national-museum", "mmca", "jungang-park"], walkMinutes: 105, driveMinutes: 25, recommendedMinutes: 300, storyTitle: "아이와 어른 모두 속도를 맞출 수 있는 문화 여행", story: "가족 여행에서는 배움과 재미만큼 쉬어 갈 공간도 중요합니다. 국립청주박물관에서 충북의 옛이야기를 만나고 국립현대미술관의 색다른 수장 공간을 탐색한 뒤, 중앙공원에서 자유롭게 쉬며 이야기를 나눌 수 있습니다. 실내 관람과 야외 휴식이 번갈아 이어져 서로 다른 연령대가 함께 움직이기 좋습니다.", note: "어린이 동반 차량 추천", color: "#4b8b45" },
  { id: "slow-downtown", title: "느린 도심 산책", subtitle: "전시·하천·골목을 잇는 길", theme: "산책", stops: ["cmoa", "musimcheon", "jungang-park", "seongan-gil"], walkMinutes: 60, driveMinutes: 18, recommendedMinutes: 240, storyTitle: "목적지보다 걷는 과정이 기억에 남는 길", story: "유명 장소를 빠르게 확인하는 여행보다 도시의 속도와 분위기를 느끼고 싶다면 이 코스를 권합니다. 청주시립미술관에서 감각을 열고 무심천의 바람, 중앙공원의 나무, 성안길의 골목을 차례로 만납니다. 전시와 자연, 사람들의 일상이 부드럽게 이어져 혼자 걷거나 생각을 정리하고 싶은 날에도 좋습니다.", note: "걷기 좋은 날 추천", color: "#1b8a83" },
  { id: "full-downtown", title: "청주 도심 하루 완주", subtitle: "기록·예술·물길·시장 총정리", theme: "종합", stops: ["jikji", "cmoa", "musimcheon", "yukgeori", "seongan-gil", "jungang-park"], walkMinutes: 92, driveMinutes: 31, recommendedMinutes: 480, storyTitle: "처음 온 청주를 하루에 이해하고 싶다면", story: "무엇을 골라야 할지 고민되는 첫 방문자에게 청주 도심의 핵심 요소를 한 번에 보여주는 코스입니다. 직지의 기록과 시립미술관의 예술에서 시작해 무심천의 자연, 육거리시장의 맛, 성안길과 중앙공원의 생활·역사로 이어집니다. 일정은 길지만 하루가 끝날 때 청주가 어떤 도시인지 자신의 말로 설명할 수 있을 만큼 서로 다른 장면이 촘촘하게 연결됩니다.", note: "오전 일찍 시작", color: "#17201f" },
  { id: "north-art", title: "북동권 문화 삼각형", subtitle: "박물관·전망·수장형 미술관", theme: "예술", stops: ["national-museum", "suamgol", "mmca"], walkMinutes: 78, driveMinutes: 20, recommendedMinutes: 300, storyTitle: "건축·전망·현대미술을 연결하는 삼각형", story: "전시 내용뿐 아니라 공간과 도시의 변화까지 함께 보고 싶은 사람에게 흥미로운 구성입니다. 자연과 어우러진 국립청주박물관에서 출발해 수암골에서 도시 지형을 바라보고, 옛 공장을 재생한 국립현대미술관으로 이동합니다. 서로 다른 높이와 건축, 쓰임을 비교하다 보면 청주 북동권의 문화 풍경이 입체적으로 보입니다.", note: "수암골 경사 주의", color: "#5568a8" },
  { id: "river-history", title: "기록과 하천의 하루", subtitle: "직지에서 시장 먹거리까지", theme: "역사", stops: ["jikji", "yonghwasa", "musimcheon", "yukgeori"], walkMinutes: 74, driveMinutes: 25, recommendedMinutes: 330, storyTitle: "청주의 기록과 일상을 물길로 잇는 하루", story: "역사 코스가 실내 관람에만 머무르지 않아 지루할 틈이 없습니다. 직지의 인쇄문화와 용화사의 시간을 살핀 뒤 무심천을 따라 이동하고, 육거리시장의 맛과 사람들 속에서 여행을 마칩니다. 기록 속 청주가 자연과 현재의 생활문화로 이어지는 흐름을 걷거나 자전거로 직접 느낄 수 있습니다.", note: "강변 구간 자전거 가능", color: "#b35738" },
  { id: "art-market", title: "미술관 다음은 시장", subtitle: "문화제조창에서 육거리까지", theme: "미식", stops: ["mmca", "jungang-park", "seongan-gil", "yukgeori"], walkMinutes: 58, driveMinutes: 20, recommendedMinutes: 300, storyTitle: "예술 감상을 시장의 감각으로 확장하는 코스", story: "미술관에서 본 색과 형태를 도시의 실제 풍경 속에서 다시 발견하는 재미가 있습니다. 국립현대미술관에서 감각을 깨운 뒤 중앙공원과 성안길을 지나 육거리시장의 색, 소리, 냄새와 만납니다. 예술과 먹거리를 따로 즐기기보다 청주의 창작과 생활문화를 하나의 경험으로 연결하고 싶은 사람에게 추천합니다.", note: "점심 또는 저녁 시장 방문", color: "#8a6b2f" },
  { id: "grand-tour", title: "청주 10대 명소 그랜드 투어", subtitle: "열 곳을 모두 잇는 1박 2일형 코스", theme: "종합", stops: ["national-museum", "mmca", "suamgol", "jungang-park", "seongan-gil", "yukgeori", "musimcheon", "yonghwasa", "cmoa", "jikji"], walkMinutes: 228, driveMinutes: 58, recommendedMinutes: 840, storyTitle: "청주를 하나의 이야기로 완성하는 1박 2일", story: "한두 곳만 고르기보다 청주의 서로 다른 얼굴을 빠짐없이 경험하고 싶은 여행자를 위한 완성형 코스입니다. 첫날에는 박물관과 현대미술, 수암골 전망으로 도시를 넓게 이해하고, 이튿날에는 공원·거리·시장·무심천·사찰을 지나 직지의 기록문화에 닿습니다. 이동량은 많지만 열 곳이 개별 명소가 아니라 역사와 예술, 자연과 생활이 연결된 하나의 도시 이야기로 남습니다.", note: "차량 기준 1박 2일 추천", color: "#0e615d" },
];

export const placeBySlug = Object.fromEntries(places.map((place) => [place.slug, place])) as Record<string, Place>;
