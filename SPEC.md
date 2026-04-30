# SyncBuddy Team Pages - Bold Redesign Specification

## 1. Concept & Vision

**"Digital Atelier"** — 每個團隊成員的頁面如同一個藝術家工作室，展示他們的專業成就與獨特個性。大膽的排版、戲劇性的光影效果、前衛的佈局，打破傳統個人頁面的沉闷感。讓訪問者感覺他們即將見證一些特別的東西。

---

## 2. Design Language

### Aesthetic Direction
**Neo-Brutalist meets Glassmorphism** — 粗獷大膽的幾何形狀 + 前衛的玻璃質感。不同於傳統的柔和漸變，採用更尖銳的角度、更有衝擊力的色彩運用。

### Color Palette

**Calvin (紫色)**:
- Primary: `#8B5CF6` (violet)
- Secondary: `#6366F1` (indigo)
- Accent: `#A78BFA`
- Background: `#0A0A0F`
- Text: `#FFFFFF`

**Match (青色)**:
- Primary: `#06B6D4` (cyan)
- Secondary: `#22D3EE`
- Accent: `#67E8F9`
- Background: `#0A0A0F`
- Text: `#FFFFFF`

**Kenneth (金色)**:
- Primary: `#F59E0B` (amber)
- Secondary: `#FBBF24`
- Accent: `#FCD34D`
- Background: `#0A0A0F`
- Text: `#FFFFFF`

**Carine (綠色)**:
- Primary: `#10B981` (emerald)
- Secondary: `#34D399`
- Accent: `#6EE7B7`
- Background: `#0A0A0F`
- Text: `#FFFFFF`

### Typography
- **Display**: "Clash Display" (Google Fonts) — 大膽、有衝擊力的幾何無襯線字體
- **Body**: "Inter" — 保持可讀性
- Fallbacks: system-ui, sans-serif

### Spatial System
- Base unit: 8px
- Container max-width: 1400px
- Section padding: 80px vertical, 40px horizontal
- Card padding: 48px

### Motion Philosophy
- **戲劇性進場** — 元素不是平淡地出現，而是有預告、有張力
- **反應式互動** — 每個元素都對用戶輸入有回應
- **流體動畫** — 使用 cubic-bezier 曲線，感覺自然但有力
- 所有動畫 duration: 300-600ms (entrance), 150-200ms (interaction)

### Visual Assets
- **無 emoji** — 使用自定義 SVG icons
- **幾何裝飾** — 三角形、圓弧、網格等 abstract shapes
- **光效** — 徑向漸變、發光效果模擬舞台燈光

---

## 3. Layout & Structure

### Page Architecture
**Asymmetric Split Layout** — 頁面分為左右兩個不對稱區域：
- **Left (40%)**: 純淨的品牌區域 + 導航元素，絕對留白，大字標題
- **Right (60%)**: 內容區域，玻璃質感卡片承載所有信息

### Visual Pacing
1. **Hero Moment** (top) — 巨大的名字 title，佔據 50vh
2. **Credential Bar** — 橫跨全寬的技能/證書展示
3. **Info Grid** — 2x2 網格展示核心信息
4. **Contact Strip** — 底部固定，緊湊的聯繫方式

### Responsive Strategy
- Desktop (>1024px): Full asymmetric split
- Tablet (768-1024px): 堆疊佈局，左側縮小
- Mobile (<768px): 完全堆疊，profile 上移

---

## 4. Features & Interactions

### Core Features
1. **Name Animation** — 頁面載入時，名字字母依次進場
2. **Profile Frame** — 頭像區域有持續的微動畫（breathing glow）
3. **Scroll Reveal** — 內容區塊在視線進入時才 reveal
4. **Color Theme** — 每個頁面鮮明的個人主題色

### Interaction Details
- **Hover on cards**: 輕微上浮 + 陰影加深
- **Hover on icons**: 背景色填充 + 輕微放大
- **Profile glow**: 持續的 pulse 動畫 (2s cycle)
- **Corner decorations**: 緩慢旋轉動畫

### Edge Cases
- **No image**: 顯示抽象的 initials 設計
- **Long content**: 內容區域豎向滾動，外層容器 sticky

---

## 5. Component Inventory

### Hero Title
- 字體: Clash Display, 120px (desktop), 60px (mobile)
- 漸變文字填充
- Letter-spacing: -0.05em
- 進場動畫: clip-path reveal

### Profile Circle
- 直徑: 320px (desktop), 200px (mobile)
- 雙層 border: 內層 solid, 外層 gradient animated
- 底部發光 shadow
- 內部: initials 或 photo

### Info Card
- Background: 半透明玻璃
- Border: 1px solid rgba(255,255,255,0.1)
- Border-radius: 24px
- Hover: translateY(-8px) + border-color 變亮

### Credential Tag
- 小型膠囊形狀
- 背景: 主題色 20% opacity
- Border: 1px solid 主題色 40%
- Hover: 背景變亮

### Contact Button
- Full-width
- Icon + text 水平排列
- Hover: 背景從透明變為主題色 20%

### Navigation Link (if added)
- Underline animation on hover
- Active state: 主題色

---

## 6. Technical Approach

### Stack
- Pure HTML5 + CSS3 + Vanilla JavaScript
- No frameworks — 最大靈活性和性能
- CSS Custom Properties for theming
- CSS Grid + Flexbox for layout

### Architecture
- Each page is self-contained HTML file
- Shared CSS in `<style>` block (or external stylesheet)
- Minimal JS for animations
- No build step required

### Performance
- Lazy load images
- CSS animations (GPU accelerated)
- Minimal DOM manipulation
- Target: 95+ Lighthouse score

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
