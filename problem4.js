/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if(fileName.includes("#") || fileName.includes(".pdf") || fileName.includes(".docx")){
    console.log("Store");
}else {
    console.log("Delete");
}

//------------or this can solve like this-------------------------

/*if(fileName.includes("#")){
    console.log("Store");
}else if(fileName.includes(".pdf")){
    console.log("Store");
}else if(fileName.includes(".docx")){
    console.log("Store");
}else {
    console.log("Delete");
} */
