function generate(){
    const text = document.getElementById("text");
    const image = document.getElementById("qr_code_generated")
    const go_back = document.getElementById("go_back_btn")
    const generator = document.getElementById("generator")
    const title = document.getElementById("title")
    
    if(text.value==""){
        text.style.display = "none"
        go_back.style.display = "block"
        generator.style.display = "none"
        title.innerHTML = "Enter something"
        
    }
    else{
       
        let img = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value
        console.log(img)
        image.src = img
        text.style.display = "none"
        go_back.style.display = "block"
        title.innerHTML = "Your Generated HTML Code"
        generator.style.display = "none"
    }
    

}

function go_back(){
    const text = document.getElementById("text");
    const image = document.getElementById("qr_code_generated")
    const go_back = document.getElementById("go_back_btn")
    const generator = document.getElementById("generator")
    const title = document.getElementById("title")

    title.innerHTML = "QR Code Generator"
    generator.style.display = "block"
    text.style.display = "block"
    go_back.style.display = "none"
    image.src = "";
    text.value=""
}