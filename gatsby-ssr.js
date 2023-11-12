import React from "react"
import CustomLayout from "./wrapPageElement"

export const wrapPageElement = CustomLayout

const PostBodyComponents = [
  <script key="library-script" src="https://widget.packeta.com/v6/www/js/library.js"></script>,
  <script key="body-script" 
    dangerouslySetInnerHTML={{
      __html: `
      const packetaApiKey = 'a27ac5f8cac4d754';

      const packetaOptions = {
          country: "cz", 
    valueFormat: "\'Packeta\',id,carrierId,carrierPickupPointId,name,city,street", 
    defaultCurrency: "CZK"
      };
  
      function showSelectedPickupPoint(point) {
          // Add here an action on pickup point selection
          const saveElement = document.querySelector(".packeta-selector-value");
          saveElement.innerText = '';
          if (point) {
            console.log("Selected point", point);
            saveElement.innerText = "Address: " + point.formatedValue; 
          };
      }
      `,
    }}
  >
</script>
]
export const onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents(PostBodyComponents)
  
}