## Demos
1. Assistive Technologies
2. 2D Focus Region
3. 3D Focus Region
4. Maximum Records
5. Editor
6. Selection Table
7. Custom Configuration

### Resources
- https://github.com/Esri/feedback-js-api-next
- https://github.com/Esri/feedback-js-api-next/blob/main/CHANGELOG.md
- https://developers.arcgis.com/javascript/latest 

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
http://127.0.0.1:8080/5-focus-region-customize
```

### Option 2: Node `http-server`

```bash
npx http-server -p 8080 .
```

Then open:

```text
http://127.0.0.1:8080/5-focus-region-customize
```