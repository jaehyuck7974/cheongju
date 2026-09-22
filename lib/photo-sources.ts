export type PhotoSourceGroup = {
  place: string;
  sources: { label: string; url: string }[];
};

export const photoSourceGroups: PhotoSourceGroup[] = [
  {
    place: "청주고인쇄박물관",
    sources: [
      { label: "중부매일 기사", url: "https://www.jbnews.com/news/articleView.html?idxno=1399488" },
      { label: "청주시 고인쇄박물관", url: "https://www.cheongju.go.kr/jikjiworld/index.do#n" },
    ],
  },
  {
    place: "용화사",
    sources: [
      { label: "국가유산포털", url: "https://www.heritage.go.kr/heri/cul/culSelectDetail.do?pageNo=1_1_1_1&sngl=N&ccbaAsno=0009850000000&ccbaCpno=1123309850000" },
    ],
  },
  {
    place: "국립현대미술관 청주",
    sources: [
      { label: "국립현대미술관", url: "https://www.mmca.go.kr/visitingInfo/cheongjuInfo.do" },
      { label: "한국박물관협회", url: "https://museum.or.kr/museum-member/%EA%B5%AD%EB%A6%BD%ED%98%84%EB%8C%80%EB%AF%B8%EC%88%A0%EA%B4%80%EC%B2%AD%EC%A3%BC%EA%B4%80/" },
    ],
  },
  {
    place: "중앙공원",
    sources: [
      { label: "연합뉴스 기사", url: "https://www.yna.co.kr/view/AKR20250411116600542" },
    ],
  },
  {
    place: "성안길",
    sources: [
      { label: "충청일보 기사", url: "https://www.dailycc.net/news/articleView.html?idxno=836616" },
      { label: "중부매일 기사", url: "https://www.jbnews.com/news/articleView.html?idxno=1450062" },
      { label: "온트립 여행정보", url: "https://ontrip.kr/travel-guides/details/1967801" },
      { label: "성안길 공식 사이트", url: "https://www.seongangil.co.kr/30/?bmode=view&idx=10258085" },
    ],
  },
  {
    place: "수암골",
    sources: [
      { label: "대한민국 구석구석", url: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=647f2fd4-e5ac-4987-8e03-25240f8d31cc&utm" },
      { label: "청주시 문화관광", url: "https://cjyu.cheongju.go.kr/home/sub.do?menukey=7104&mode=view&code1=apply1&sn=746" },
    ],
  },
  {
    place: "청주시립미술관",
    sources: [
      { label: "국제뉴스 기사", url: "https://www.gukjenews.com/news/articleView.html?idxno=2382912" },
      { label: "청주시립미술관", url: "https://cmoa.cheongju.go.kr/www/speclExbiView.do?key=61&exbiNo=740" },
      { label: "중부매일 기사 1", url: "https://www.jbnews.com/news/articleView.html?idxno=1468827" },
      { label: "중부매일 기사 2", url: "https://www.jbnews.com/news/articleView.html?idxno=1346005" },
    ],
  },
];
