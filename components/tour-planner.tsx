"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bike, Car, Check, ChevronRight, Clock3, Footprints, ImagePlus, Loader2, Map, MapPin, Navigation, RefreshCw, Route, Sparkles, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { courses, placeBySlug, places, type Course, type Place } from "@/lib/travel-data";

type Photo = { key: string; url: string; name: string; uploaded: string };
type TravelMode = "walk" | "drive";
type ThemeFilter = "전체" | Course["theme"];

const themes: ThemeFilter[] = ["전체", "산책", "역사", "예술", "미식", "가족", "종합"];

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return hours ? `${hours}시간${rest ? ` ${rest}분` : ""}` : `${rest}분`;
}

export function TourPlanner() {
  const [selectedPlace, setSelectedPlace] = useState("musimcheon");
  const [theme, setTheme] = useState<ThemeFilter>("전체");
  const [mode, setMode] = useState<TravelMode>("walk");
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [mapExpanded, setMapExpanded] = useState(false);
  const filtered = useMemo(() => courses.filter((course) => course.stops.includes(selectedPlace) && (theme === "전체" || course.theme === theme)), [selectedPlace, theme]);
  const [activeCourseId, setActiveCourseId] = useState("river-art");
  const activeCourse = filtered.find((course) => course.id === activeCourseId) ?? filtered[0] ?? courses.find((course) => course.stops.includes(selectedPlace)) ?? courses[0];

  useEffect(() => {
    if (!filtered.some((course) => course.id === activeCourseId) && filtered[0]) setActiveCourseId(filtered[0].id);
  }, [activeCourseId, filtered]);

  useEffect(() => {
    setShowAllCourses(false);
  }, [selectedPlace, theme]);

  useEffect(() => {
    type ModelContext = { registerTool?: (tool: Record<string, unknown>, options?: { signal?: AbortSignal }) => void | Promise<void> };
    const modelContext = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!modelContext?.registerTool) return;
    const lifecycle = new AbortController();
    try {
      void Promise.resolve(modelContext.registerTool({
        name: "find_cheongju_courses",
        title: "청주 관광 코스 찾기",
        description: "선택한 청주 관광지가 포함된 추천 코스를 화면에 표시합니다.",
        inputSchema: {
          type: "object",
          properties: {
            place: { type: "string", enum: places.map((place) => place.slug) },
            theme: { type: "string", enum: themes },
          },
          required: ["place"], additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input: unknown) {
          const value = input as { place?: string; theme?: ThemeFilter };
          if (!value.place || !placeBySlug[value.place]) throw new Error("장소가 올바르지 않습니다.");
          const nextTheme = value.theme && themes.includes(value.theme) ? value.theme : "전체";
          const matches = courses.filter((course) => course.stops.includes(value.place!) && (nextTheme === "전체" || course.theme === nextTheme));
          setSelectedPlace(value.place); setTheme(nextTheme); if (matches[0]) setActiveCourseId(matches[0].id);
          return { place: placeBySlug[value.place].name, courses: matches.map((course) => ({ title: course.title, walkMinutes: course.walkMinutes, driveMinutes: course.driveMinutes })) };
        },
      }, { signal: lifecycle.signal })).catch(() => undefined);
    } catch { return; }
    return () => lifecycle.abort();
  }, []);

  const choosePlace = (slug: string) => {
    setSelectedPlace(slug);
    setTheme("전체");
    const first = courses.find((course) => course.stops.includes(slug));
    if (first) setActiveCourseId(first.id);
  };

  return (
    <>
      <section className="planner-section" id="planner">
        <div className="planner-topline">
          <div>
            <p className="section-kicker">COURSE FINDER</p>
            <h2>어디를 꼭 가고 싶나요?</h2>
            <p>한 장소를 고르면 그곳이 포함된 코스를 바로 추천합니다.</p>
          </div>
          <div className="planner-summary"><strong>{courses.length}</strong><span>개의 코스<br />10개 명소</span></div>
        </div>

        <div className="place-picker" aria-label="관광지 선택">
          {places.map((place) => (
            <button key={place.slug} onClick={() => choosePlace(place.slug)} className={selectedPlace === place.slug ? "active" : ""} aria-pressed={selectedPlace === place.slug}>
              <span>{place.number}</span><strong>{place.shortName}</strong><small>{place.category}</small>
            </button>
          ))}
        </div>

        <div className="planner-toolbar">
          <div className="selected-destination"><MapPin size={18} /><span>선택한 장소</span><strong>{placeBySlug[selectedPlace].name}</strong></div>
          <div className="toolbar-actions">
            <Select value={theme} onValueChange={(value) => setTheme(value as ThemeFilter)}>
              <SelectTrigger className="theme-select" aria-label="코스 테마"><SelectValue /></SelectTrigger>
              <SelectContent>{themes.map((item) => <SelectItem value={item} key={item}>{item === "전체" ? "모든 테마" : `${item} 코스`}</SelectItem>)}</SelectContent>
            </Select>
            <ToggleGroup type="single" value={mode} onValueChange={(value) => value && setMode(value as TravelMode)} variant="outline" aria-label="이동 수단">
              <ToggleGroupItem value="walk" aria-label="도보"><Footprints /> 도보</ToggleGroupItem>
              <ToggleGroupItem value="drive" aria-label="자동차"><Car /> 자동차</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="planner-workspace">
          <div className={`course-results ${showAllCourses ? "expanded" : ""}`}>
            <div className="result-head"><span>추천 코스</span><strong>{filtered.length}개</strong></div>
            {filtered.length ? filtered.map((course) => (
              <CourseCard key={course.id} course={course} mode={mode} active={activeCourse.id === course.id} onClick={() => setActiveCourseId(course.id)} />
            )) : (
              <div className="no-results"><Route /><strong>해당 테마의 코스가 아직 없습니다.</strong><button onClick={() => setTheme("전체")}>모든 코스 보기</button></div>
            )}
            {filtered.length > 3 ? <button className="mobile-results-toggle" onClick={() => setShowAllCourses((value) => !value)} aria-expanded={showAllCourses}>{showAllCourses ? "코스 접기" : `나머지 ${filtered.length - 3}개 코스 보기`}</button> : null}
          </div>
          <div className="map-column">
            <CourseDetail course={activeCourse} mode={mode} className="mobile-only mobile-course-detail" />
            <button className="mobile-map-toggle" onClick={() => setMapExpanded((value) => !value)} aria-expanded={mapExpanded}>{mapExpanded ? "개념 지도 접기" : "개념 지도 보기"}<ChevronRight /></button>
            <div className={`mobile-map-shell ${mapExpanded ? "expanded" : ""}`}><TourMap course={activeCourse} selectedPlace={selectedPlace} onSelectPlace={choosePlace} /></div>
            <CourseDetail course={activeCourse} mode={mode} className="desktop-course-detail" />
          </div>
        </div>
        <p className="time-disclaimer">이동시간은 장소 사이의 예상 이동시간 합계이며 관람·식사 시간은 제외됩니다. 교통, 신호, 주차와 현장 상황에 따라 달라질 수 있습니다.</p>
      </section>

      <PlaceDirectory selectedPlace={selectedPlace} onSelectPlace={choosePlace} />
    </>
  );
}

function CourseCard({ course, mode, active, onClick }: { course: Course; mode: TravelMode; active: boolean; onClick: () => void }) {
  const travel = mode === "walk" ? course.walkMinutes : course.driveMinutes;
  return (
    <button className={`course-card ${active ? "active" : ""}`} onClick={onClick} style={{ "--course-color": course.color } as React.CSSProperties}>
      <span className="course-theme">{course.theme}</span>
      <div className="course-title-row"><div><strong>{course.title}</strong><small>{course.subtitle}</small></div><ChevronRight /></div>
      <div className="course-stop-preview">{course.stops.map((slug, index) => <span key={slug}>{placeBySlug[slug].shortName}{index < course.stops.length - 1 ? <i>·</i> : null}</span>)}</div>
      <div className="course-metrics">
        <span>{mode === "walk" ? <Footprints /> : <Car />}<b>{travel}분</b> 이동</span>
        <span><Clock3 /><b>{formatDuration(course.recommendedMinutes)}</b> 권장</span>
        <span><Map /><b>{course.stops.length}곳</b></span>
      </div>
    </button>
  );
}

function TourMap({ course, selectedPlace, onSelectPlace }: { course: Course; selectedPlace: string; onSelectPlace: (slug: string) => void }) {
  const points = course.stops.map((slug) => placeBySlug[slug].map);
  return (
    <div className="tour-map" aria-label={`${course.title} 관광 동선 개념도`}>
      <div className="map-head"><div><Navigation size={16} /><span>CHEONGJU ROUTE MAP</span></div><strong>관광 동선 개념도</strong></div>
      <svg viewBox="0 0 680 500" role="img" aria-label={`${course.title}: ${course.stops.map((slug) => placeBySlug[slug].name).join("에서 ")} 순서`}>
        <defs><pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="currentColor" strokeOpacity=".08" /></pattern></defs>
        <rect width="680" height="500" fill="url(#grid)" />
        <path className="map-river" d="M255 0 C220 90 284 140 246 220 S275 350 236 500" />
        <path className="map-road" d="M30 300 C160 260 310 305 650 150" />
        <path className="map-road" d="M65 410 C235 395 395 330 610 350" />
        <path className="map-road" d="M420 30 C410 170 390 320 445 480" />
        <text x="266" y="80" className="river-label">무심천</text>
        <text x="495" y="58" className="district-label">청원구</text>
        <text x="490" y="390" className="district-label">상당구</text>
        <text x="76" y="438" className="district-label">흥덕구 · 서원구</text>
        <polyline className="active-route-shadow" points={points.map((point) => `${point.x},${point.y}`).join(" ")} />
        <polyline className="active-route" style={{ stroke: course.color }} points={points.map((point) => `${point.x},${point.y}`).join(" ")} />
        {places.map((place) => {
          const order = course.stops.indexOf(place.slug);
          const onRoute = order >= 0;
          return (
            <g key={place.slug} className={`map-pin ${onRoute ? "on-route" : ""} ${selectedPlace === place.slug ? "selected" : ""}`} role="button" tabIndex={0} aria-label={`${place.name} 선택`} onClick={() => onSelectPlace(place.slug)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onSelectPlace(place.slug); }}>
              <circle cx={place.map.x} cy={place.map.y} r={onRoute ? 16 : 7} style={onRoute ? { fill: course.color } : undefined} />
              {onRoute ? <text x={place.map.x} y={place.map.y + 4} className="pin-number">{order + 1}</text> : null}
              <text x={place.map.x + (place.map.x > 500 ? -18 : 18)} y={place.map.y - 12} textAnchor={place.map.x > 500 ? "end" : "start"} className="pin-label">{place.shortName}</text>
            </g>
          );
        })}
      </svg>
      <div className="map-legend"><span><i className="river-key" /> 물길</span><span><i className="route-key" style={{ background: course.color }} /> 선택 코스</span><span>※ 실제 축척·도로와 다른 개념도</span></div>
    </div>
  );
}

function CourseDetail({ course, mode, className = "" }: { course: Course; mode: TravelMode; className?: string }) {
  return (
    <div className={`course-detail ${className}`} style={{ "--course-color": course.color } as React.CSSProperties}>
      <div className="detail-heading">
        <div><span>{course.theme} COURSE</span><h3>{course.title}</h3></div>
        <div className="detail-time">{mode === "walk" ? <Footprints /> : <Car />}<strong>{mode === "walk" ? course.walkMinutes : course.driveMinutes}분</strong><small>예상 이동</small></div>
      </div>
      <ol className="detail-stops">
        {course.stops.map((slug, index) => (
          <li key={slug}><span>{index + 1}</span><div><strong>{placeBySlug[slug].name}</strong><small>{placeBySlug[slug].category} · {placeBySlug[slug].lead}</small></div></li>
        ))}
      </ol>
      <div className="detail-footer"><span><Clock3 /> 권장 전체 일정 {formatDuration(course.recommendedMinutes)}</span><span><Sparkles /> {course.note}</span></div>
    </div>
  );
}

function PlaceDirectory({ selectedPlace, onSelectPlace }: { selectedPlace: string; onSelectPlace: (slug: string) => void }) {
  const [activeGuide, setActiveGuide] = useState(selectedPlace);
  useEffect(() => setActiveGuide(selectedPlace), [selectedPlace]);
  const place = placeBySlug[activeGuide];
  return (
    <section className="directory-section" id="places">
      <div className="directory-head"><div><p className="section-kicker">10 DESTINATIONS</p><h2>코스를 이루는 청주의 장소들</h2></div><p>각 장소의 특징과 촬영 계획을 확인하고 현장에서 직접 찍은 사진을 최대 5장까지 기록할 수 있습니다.</p></div>
      <div className="place-card-grid">
        {places.map((item) => (
          <button key={item.slug} onClick={() => { setActiveGuide(item.slug); onSelectPlace(item.slug); }} className={activeGuide === item.slug ? "active" : ""} style={{ "--place-color": item.accent } as React.CSSProperties}>
            <span>{item.number}</span><small>{item.category}</small><strong>{item.name}</strong><p>{item.lead}</p><ChevronRight />
          </button>
        ))}
      </div>
      <article className="place-guide" style={{ "--place-color": place.accent } as React.CSSProperties}>
        <div className="guide-copy">
          <div className="guide-meta"><span>{place.number}</span><b>{place.category}</b></div>
          <h3>{place.name}</h3><p className="guide-lead">{place.lead}</p><p className="guide-description">{place.description}</p>
          <div className="guide-address"><MapPin />{place.address}</div>
          <div className="guide-highlights">{place.highlights.map((item) => <span key={item}>{item}</span>)}</div>
          <a className="source-link" href={place.source} target="_blank" rel="noreferrer">관광정보 출처 확인 <ChevronRight /></a>
        </div>
        <PhotoGallery place={place} />
      </article>
    </section>
  );
}

function PhotoGallery({ place }: { place: Place }) {
  const photoApiOrigin = process.env.NEXT_PUBLIC_PHOTO_API_ORIGIN ?? "";
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const loadPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${photoApiOrigin}/api/photos?place=${place.slug}`, { cache: "no-store" });
      if (!response.ok) throw new Error();
      const data = await response.json() as { photos?: Photo[] }; setPhotos(data.photos ?? []); setMessage("");
    } catch { setMessage("사진 보관함을 불러오지 못했습니다."); }
    finally { setLoading(false); }
  }, [photoApiOrigin, place.slug]);
  useEffect(() => { void loadPhotos(); }, [loadPhotos]);
  const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; if (!file) return;
    if (photos.length >= 5) { setMessage("지역마다 사진은 최대 5장까지 올릴 수 있습니다."); return; }
    setUploading(true); setMessage("");
    try {
      const form = new FormData(); form.append("place", place.slug); form.append("photo", file);
      const response = await fetch(`${photoApiOrigin}/api/photos`, { method: "POST", body: form }); const data = await response.json() as { error?: string };
      if (!response.ok) throw new Error(data.error || "업로드에 실패했습니다.");
      await loadPhotos(); setMessage("사진이 저장되었습니다.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "업로드에 실패했습니다."); }
    finally { setUploading(false); if (inputRef.current) inputRef.current.value = ""; }
  };
  const remove = async (key: string) => {
    if (!window.confirm("이 사진을 삭제할까요?")) return;
    try { const response = await fetch(`${photoApiOrigin}/api/photos`, { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ place: place.slug, key }) }); if (!response.ok) throw new Error(); await loadPhotos(); setMessage("사진을 삭제했습니다."); }
    catch { setMessage("사진을 삭제하지 못했습니다."); }
  };
  return (
    <div className="gallery-wrap">
      <div className="gallery-head"><div><span>FIELD PHOTOS</span><strong>{photos.length} / 5</strong></div><Button variant="outline" size="sm" onClick={() => void loadPhotos()} disabled={loading} aria-label="사진 새로고침"><RefreshCw className={loading ? "animate-spin" : ""} /></Button></div>
      <div className="photo-grid">
        {loading ? Array.from({ length: 5 }).map((_, i) => <div className="photo-slot loading" key={i}><Loader2 className="animate-spin" /></div>) : <>
          {photos.map((photo, index) => <figure className="photo-slot filled" key={photo.key}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={photo.url} alt={`${place.name} 현장 사진 ${index + 1}`} /><figcaption>{String(index + 1).padStart(2, "0")}</figcaption><button onClick={() => void remove(photo.key)} aria-label={`${index + 1}번 사진 삭제`}><Trash2 /></button></figure>)}
          {Array.from({ length: Math.max(0, 5 - photos.length) }).map((_, i) => <button className="photo-slot add" key={`empty-${i}`} onClick={() => inputRef.current?.click()} disabled={uploading}>{i === 0 ? <><ImagePlus /><span>{uploading ? "올리는 중…" : "사진 추가"}</span><small className="mobile-only gallery-capacity">{5 - photos.length}장 더 추가 가능</small></> : <><X /><span>{photos.length + i + 1}</span></>}</button>)}
        </>}
      </div>
      <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={upload} hidden />
      <p className="gallery-note">직접 촬영한 JPG, PNG, WEBP · 파일당 최대 10MB</p>{message ? <p className="gallery-message" aria-live="polite">{message}</p> : null}
    </div>
  );
}
