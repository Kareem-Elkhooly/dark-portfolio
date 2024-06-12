
const uploadFilesHandle= (e, containerId)=>{
    let filesArr = [];
    if(document.querySelectorAll("#newUploadedFile").length > 0){
        document.querySelectorAll("#newUploadedFile").forEach((img)=>{
            document.getElementById(containerId).removeChild(img)
        })
    }
    for(let i=0; i < e.target.files.length; i++){
        filesArr.push(e.target.files[i])
        let file = e.target.files[i]
        let reader = new FileReader();
        reader.addEventListener('load', ()=>{
            const url = reader.result
            const img = new Image()
            img.src = url
            img.key = i
            img.id = "newUploadedFile"
            img.className = "h-[7rem] border-2 border-solid border-gainsboro-200"
            document.getElementById(containerId).appendChild(img)
        })
        reader.readAsDataURL(file)
    }
    return(filesArr)
} 

export default uploadFilesHandle