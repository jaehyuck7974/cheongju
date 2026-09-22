import styles from "./mobile-preview.module.css";

export const metadata = {
  title: "모바일 프리뷰 | 청주 한 바퀴",
};

export default function MobilePreviewPage() {
  return (
    <main className={styles.previewPage}>
      <header className={styles.previewHeader}>
        <div>
          <span className={styles.eyebrow}>MOBILE PREVIEW</span>
          <h1>390 × 844</h1>
        </div>
        <a href="/" target="_blank" rel="noreferrer">원본 화면 열기</a>
      </header>

      <section className={styles.device} aria-label="390픽셀 모바일 화면 프리뷰">
        <div className={styles.speaker} aria-hidden="true" />
        <iframe src="/" title="청주 한 바퀴 모바일 프리뷰" />
      </section>
      <p className={styles.hint}>프레임 안에서 스크롤하고 직접 조작할 수 있습니다.</p>
    </main>
  );
}
