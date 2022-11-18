let findLayoutDiv=document.getElementsByClassName("recovero_checkout_layout");
let findIframe=document.getElementById("recovero_checkout_iframe").contentWindow;
// let checkIframeLoaded=findIframe.contentDocument || findIframe.contentWindow.document;
  //  console.log(findLayoutDiv,"find layout div ",createIFrame,findIframe)
  //  if(findLayoutDiv.length>0 && findIframe !==null && checkIframeLoaded && checkIframeLoaded.readyState){
  //        let findCloseBtnId=document.getElementById("recovero_checkout_layout_close");
  //        console.log(findCloseBtnId,":money_mouth_face::money_mouth_face::money_mouth_face:",findIframe.contentWindow.document,findIframe.contentWindow,":sunglasses::sunglasses::sunglasses::sunglasses::sunglasses:")
  //  }
   if(findIframe){
         window.addEventListener("message",function (event){
          if(event.data=="close-iframe-recovero"){
            findLayoutDiv[0].remove();
          }
            if(event.data.success){
              console.log("Check !!@#@$%$:face_with_symbols_on_mouth::rage::face_with_symbols_on_mouth::rage::rage::face_with_symbols_on_mouth:",);
              document.cookie=`CUSTOMERCOOKIE=${event.data.token}; path=/; secure; samesite=none`;
              // document.cookie=`check=render ;path=/`;
              // document.cookie=event.data.token;
              // console.log(document.cookie,"cookies :zipper_mouth_face::zipper_mouth_face::zipper_mouth_face::zipper_mouth_face::zipper_mouth_face:")
            }
            let obj={
              sending:true,
              cookie:document.cookie
            }
          findIframe.postMessage(obj,"*");
         })
   }
