## Demos
1. [Assistive Technologies](https://geospatialem.github.io/nacis-2026-apps/1-assistive-technologies/)
2. [2D Focus Region](https://geospatialem.github.io/nacis-2026-apps/2-focus-region-2d/)
3. [3D Focus Region](https://geospatialem.github.io/nacis-2026-apps/3-focus-region-3d/)
4. [Maximum Records](https://geospatialem.github.io/nacis-2026-apps/4-maximum-records/)
5. [Editor](https://geospatialem.github.io/nacis-2026-apps/5-editor/)
6. [Selection Table](https://geospatialem.github.io/nacis-2026-apps/6-selection-table/)
7. [Custom Configuration](https://geospatialem.github.io/nacis-2026-apps/7-custom-configuration)

### Resources
- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/)
- [feedback-js-api-next GitHub repo](https://github.com/Esri/feedback-js-api-next)
- [feedback-js-api-next changelog](https://github.com/Esri/feedback-js-api-next/blob/main/CHANGELOG.md)

### Other tools
- Keyviz
- JAWS

## Run locally

These demos use JavaScript modules, so they must be served over `http://`.
Opening `index.html` files directly with `file://` may fail.

### Option 1: Node (no install)

1. Open a terminal in the repository root.
2. Start a local server:

   ```bash
   npx serve .
   ```

3. Open a demo in your browser, for example:

```text
http://127.0.0.1:8080/5-editor
```

### Option 2: Node `http-server`

```bash
npx http-server -p 8080 .
```

Then open:

```text
http://127.0.0.1:8080/5-editor
```