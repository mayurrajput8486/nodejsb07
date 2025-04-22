const fs = require('fs')
//to create folder
/* fs.mkdir("public",(error)=>{
    if(error){
        console.log('Folder not created....')
    }else{
        console.log("folder created")
    }
}) */

//to create file
/* fs.writeFile("public/read.txt","We are using async fs method",(error)=>{
    if(error){
        console.log('File not created')
    }else{
        console.log('file created')
    }
}) */

//to read data
/* fs.readFile("public/read.txt","utf-8",(error,result)=>{
    if(error){
        console.log('Data not read')
    }else{
        console.log(result)
    }
}) */

//to update data
/* fs.appendFile("public/read.txt"," Welcome to Nodejs ",(error)=>{
    if(error){
        console.log('Data not updated')
    }else{
        console.log('Data Update !!!')
    }
}) */

//ro rename file
/* fs.rename("public/read.txt","public/readme.txt",(error)=>{
    if(error){
        console.log('Rename Failed')
    }else{
        console.log('File Name Change')
    }
}) */

//to copy file
/* fs.copyFile("public/readme.txt","public/pqr.txt",(error)=>{
    if(error){
        console.log('Copy Failed')
    }else{
        console.log('File Copy')
    }
}) */

//to delete file
/* fs.unlink("public/readme.txt",(error)=>{
    if(error){
        console.log('file not deleted')
    }else{
        console.log('File Delete !!!')
    }
}) */

//to delete folder
/* fs.rmdir("public",(error)=>{
    if(error){
        //console.log(error)
        console.log('folder not deleted, folder not empty')
    }else{
        console.log('folder deleted')
    }
}) */

/* fs.rm("public/read.txt",(error)=>{
    if(error){
        console.log('folder not deleted')
    }else{
        console.log('folder deleted')
    }   
    }) */

/* import fs from 'fs-extra';

async function deleteFolder(folderPath) {
    try {
        await fs.remove(folderPath);
        console.log(`Folder "${folderPath}" deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting folder: ${error.message}`);
    }
}

// Usage
deleteFolder('./myFolder'); */ 
// Replace with your folder path