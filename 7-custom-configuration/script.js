const themeToggle = document.querySelector("#theme-toggle");
const mapElement = document.querySelector("#a11y-map");
const status = document.querySelector(".map-status");
const borderColorInput = document.querySelector("#border-color");
const borderColorToken = "--arcgis-focus-region-outer-border-color";
const innerColorInput = document.querySelector("#inner-color");
const innerColorToken = "--arcgis-focus-region-inner-border-color";
const borderWidthInput = document.querySelector("#border-width");
const borderWidthToken = "--arcgis-focus-region-border-width";
const borderColorValue = document.querySelector("#border-color-value");
const innerColorValue = document.querySelector("#inner-color-value");
const borderWidthValue = document.querySelector("#border-width-value");
const codeSnippetBlock = document.querySelector("#code-snippet-block");

function updateSnippetValue(input, snippetValue) {
const value = (input.value ?? "").trim();
snippetValue.textContent = value;
snippetValue.closest("p").hidden = value === "";
codeSnippetBlock.hidden = ![borderColorInput, innerColorInput, borderWidthInput].some(
    (input) => (input.value ?? "").trim() !== "",
);
return value;
}

for (const [input, token, snippetValue] of [
[borderColorInput, borderColorToken, borderColorValue],
[innerColorInput, innerColorToken, innerColorValue],
[borderWidthInput, borderWidthToken, borderWidthValue],
]) {
input.value = getComputedStyle(mapElement).getPropertyValue(token).trim();
updateSnippetValue(input, snippetValue);
input.addEventListener("calciteInputInput", () => {
    mapElement.style.setProperty(token, updateSnippetValue(input, snippetValue));
});
}

function applyTheme(dark) {
document.documentElement.classList.toggle("calcite-mode-dark", dark);
document.documentElement.classList.toggle("calcite-mode-light", !dark);
document.getElementById("map-code").textContent = dark ? ".calcite-mode-dark arcgis-map {" : "arcgis-map {";
themeToggle.checked = dark;
mapElement.basemap = dark ? "dark-gray" : "gray";
}

applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
themeToggle.addEventListener("calciteSwitchChange", () => applyTheme(themeToggle.checked));