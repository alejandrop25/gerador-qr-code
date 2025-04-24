import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"


inquirer.prompt([
    {
        message: "Digite a URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (error)=>{
        if(error){
            console.log(error);
            throw new error;
        }
        console.log("Arquivo salvo.");
    })
  })
  .catch((error) => {
    console.log(error);
});