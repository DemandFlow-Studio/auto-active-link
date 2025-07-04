# 📌 auto-active-link

A lightweight, Webflow-friendly JavaScript library that highlights navigation links based on scroll position and enables smooth scrolling to sections on click — all using simple custom attributes.

## ✅ Features

- No configuration needed
- Works with multiple instances on the same page
- Fully attribute-driven (no class names required)
- Optional scroll offset (useful for sticky headers)
- CDN-ready (use with jsDelivr)

## 🚀 How to Use

### 1. Add the Script to Your Webflow Project

Place this in the **Before `</body>`** section of Webflow (Page or Site Settings):

```html
<script src="https://cdn.jsdelivr.net/gh/DemandFlow-Studio/auto-active-link@main/dist/autoActiveLink.js"></script>
<script>
  autoActiveLink(); // Initializes the scroll spy logic
</script>
```

### 2. Use These Attributes in Webflow

| Element | Attribute | Description |
|---------|-----------|-------------|
| Component wrapper | `data-index-component` | Required. Wraps the sidebar and all sections. |
| Offset (optional) | `data-offset="80"` | Optional. Set on the wrapper to adjust scroll position. |
| Sidebar container | `data-sidebar` | Optional. Used to anchor scroll position midpoint. |
| Each section | `data-index-section` | Required. Add to every scrollable section. |
| Section heading | `data-target="Section"` | Required. Must match text inside nav link. |
| Navigation link | `data-index-link` | Required. One per link that scrolls to a section. Must have `is-active` combo class set up in Webflow. |

## 🧱 Example HTML Structure

```html
<div data-index-component data-offset="80">
  
  <div data-sidebar>
    <a data-index-link class="is-active">Overview</a> <!-- Set up is-active combo class in Webflow -->
    <a data-index-link>Features</a>
    <a data-index-link>Pricing</a>
  </div>
  
  <div data-index-section>
    <h2 data-target="Overview">Overview</h2>
    <p>...</p>
  </div>
  
  <div data-index-section>
    <h2 data-target="Features">Features</h2>
    <p>...</p>
  </div>
  
  <div data-index-section>
    <h2 data-target="Pricing">Pricing</h2>
    <p>...</p>
  </div>
  
</div>
```

## 🔄 Matching Logic

The value in `data-target="..."` must match the text inside the nav link (case-insensitive).

**Example:**
```html
<a data-index-link class="is-active">Pricing</a> <!-- Set up is-active combo class in Webflow -->
<h2 data-target="Pricing">...</h2>
```

## 📦 CDN Hosting (jsDelivr)

**Latest version (from main branch):**
```
https://cdn.jsdelivr.net/gh/DemandFlow-Studio/auto-active-link@main/dist/autoActiveLink.js
```

**Tag versions like this after release:**
```
https://cdn.jsdelivr.net/gh/DemandFlow-Studio/auto-active-link@v1.0.0/dist/autoActiveLink.js
```

## 🧠 Notes

- Script does not auto-run — you must call `autoActiveLink()` manually.
- For safety, wrap in Webflow's load handler:

```html
<script>
  window.Webflow ||= [];
  window.Webflow.push(() => {
    autoActiveLink();
  });
</script>
```

## ✅ License

MIT — free for personal or commercial use.

---

*Let me know if you want a versioned badge, GIF preview, or to prep it for npm later. You're all set to push this into your repo!*
