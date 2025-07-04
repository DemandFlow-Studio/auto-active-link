# 📌 auto-active-link

A lightweight, Webflow-friendly JavaScript library that highlights navigation links based on scroll position and enables smooth scrolling to sections on click — all using simple custom attributes.

---

## ✅ Features

- No configuration needed
- Works with multiple instances on the same page
- Fully attribute-driven (no class names required)
- Optional scroll offset (useful for sticky headers)
- CDN-ready (use with jsDelivr)

---

## 🚀 How to Use

### 1. Add the Script to Your Webflow Project

Place this in the **Before `</body>`** section of Webflow (Page or Site Settings):

```html
<script src="https://cdn.jsdelivr.net/gh/DemandFlow-Studio/auto-active-link@main/dist/autoActiveLink.js"></script>
<script>
  autoActiveLink(); // Initializes the scroll spy logic
</script>

| Element           | Attribute               | Description                                             |
| ----------------- | ----------------------- | ------------------------------------------------------- |
| Component wrapper | `data-index-component`  | **Required**. Wraps the sidebar and all sections.       |
| Offset (optional) | `data-offset="80"`      | Optional. Set on the wrapper to adjust scroll position. |
| Sidebar container | `data-sidebar`          | Optional. Used to anchor scroll position midpoint.      |
| Each section      | `data-index-section`    | **Required**. Add to every scrollable section.          |
| Section heading   | `data-target="Section"` | **Required**. Must match text inside nav link.          |
| Navigation link   | `data-index-link`       | **Required**. One per link that scrolls to a section.   |


