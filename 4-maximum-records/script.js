      //# sourceURL=play-app.js
      const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
      // Get a reference to the map component
      const viewElement = document.querySelector("arcgis-map");
      await viewElement.viewOnReady();
      const template = {
        // autocasts as new PopupTemplate()
        title: "{NAME} in {COUNTY}",
        content: [
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "B12001_calc_pctMarriedE",
                label: "Married %",
              },
              {
                fieldName: "B12001_calc_numMarriedE",
                label: "People Married",
                fieldFormat: {
                  type: "number",
                  useGrouping: "always",
                  maximumFractionDigits: 0,
                },
              },
              {
                fieldName: "B12001_calc_numNeverE",
                label: "People that Never Married",
                fieldFormat: {
                  type: "number",
                  useGrouping: "always",
                  maximumFractionDigits: 0,
                },
              },
              {
                fieldName: "B12001_calc_numDivorcedE",
                label: "People Divorced",
                fieldFormat: {
                  type: "number",
                  useGrouping: "always",
                  maximumFractionDigits: 0,
                },
              },
            ],
          },
        ],
      };
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Marital_Status_Boundaries/FeatureServer/2",
        popupTemplate: template,
      });
      // Add the layer to the map component
      viewElement.map.layers.add(featureLayer);