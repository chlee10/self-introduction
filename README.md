# 이치훈 · 자기소개 모바일 웹사이트

모바일 우선(Mobile-first)으로 만든 1페이지 자기소개 사이트입니다.
모던 그라데이션 테마, 스크롤 등장 애니메이션, 터치 인터랙션을 포함합니다.

## 미리보기

`index.html`을 브라우저에서 열면 됩니다. 별도 빌드나 설치가 필요 없습니다.

- 데스크톱: 파일을 더블클릭하거나 브라우저로 드래그
- 모바일 보기: 브라우저 개발자도구(`F12`) → 기기 모드(`Ctrl+Shift+M`)

## 파일 구성

| 파일 | 설명 |
|---|---|
| `index.html` | 페이지 구조 (Hero · 소개 · 스킬 · 프로젝트 · 연락처) |
| `style.css` | 디자인 — 모던 그라데이션 테마, 반응형, 애니메이션 |
| `script.js` | 스크롤 시 섹션이 나타나는 효과 (IntersectionObserver) |

## 주요 특징

- **모바일 우선** — 440px 폭 기준, `100svh`·`safe-area-inset`으로 모바일 화면에 최적화
- **모던 그라데이션** — 움직이는 배경 블롭, 그라데이션 텍스트/버튼, 글래스 카드
- **인터랙션** — 터치 시 눌리는 버튼·카드, 스크롤 등장 애니메이션
- **접근성** — 시맨틱 태그, `prefers-reduced-motion`(모션 최소화) 대응
- **의존성 없음** — 순수 HTML/CSS/JS (웹폰트만 외부 로드)

## 내용 수정하기

모든 텍스트는 `index.html`에서 수정합니다.

| 바꿀 것 | 위치 |
|---|---|
| 이름 / 직무 / 한 줄 소개 | `.hero-name`, `.hero-role`, `.hero-tagline` |
| 프로필 이니셜 → 사진 | `.avatar` 안의 "이치"를 `<img src="...">`로 교체 |
| 소개 글 · 통계 숫자 | `#about` 섹션 |
| 기술 스택 | `#skills`의 `.chip` 목록 |
| 프로젝트 | `#projects`의 `.card` (링크는 `href` 속성) |
| 이메일 · GitHub · LinkedIn | `#contact`의 `href` |

### 색상 테마 변경

`style.css` 맨 위 `:root`의 `--grad` 한 줄만 바꾸면 사이트 전체 색상이 바뀝니다.

```css
--grad: linear-gradient(135deg, #6d5dfc 0%, #4f9cff 50%, #ff7eb6 100%);
```

## 배포 (선택)

정적 사이트이므로 아래 어디든 폴더만 올리면 바로 공개됩니다.

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/) — 폴더를 드래그&드롭
- [Vercel](https://vercel.com/)

## 라이선스

개인 용도로 자유롭게 사용하세요.

---

© 2026 이치훈
