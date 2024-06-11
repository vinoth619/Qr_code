let qr_data=document.getElementById("qr_value");
let qrform=document.getElementById("qrform");
let qrcode;

function  generateQrcode(){
    return new QRCode("qr-code",{
        text:"qrContent",
         with:150,
         height:150,
         colorDark:"#000000",
          colorLight:"#ffffff",
         correctLevel :QRCode.CorrectLevel.Q,
    })
}


qrform.addEventListener('submit',function(event){
    event.preventDefault();
    let qrcontent=qr_data.value;
    
    if(qrcode==null){
        qrcode=generateQrcode(qrcontent);

       
    }
    

})