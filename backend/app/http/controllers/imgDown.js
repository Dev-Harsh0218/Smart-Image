const axios = require('axios');
const fs = require('fs');
const path= require('path')
function imgDown() {
  return {
    imgdownRender(req, res) {
      res.send({ message: "Sujal chamhar haiiiii" });
    },

    imgdown(req,res){
      const img_url= req.params[0];
      const folderPath='./test';
      console.log(img_url);
      downloadImage(img_url,folderPath);
      
      res.redirect('/api/test1');
    }    
  };
}

function downloadImage(url, folderPath) {
  // Extract the file name from the URL
  const fileName = path.basename(url);
  console.log(fileName)
  // Create a path for the file to be saved
  const filePath = path.join(folderPath, fileName);

  // Use axios to fetch the image
  axios({
      url: url,
      method: 'GET',
      responseType: 'stream'
  })
  .then(response => {
      // Create a writable stream to save the image data
      const writer = fs.createWriteStream(filePath); // use filePath instead of folderPath
      // Pipe the image data to the writable stream
      response.data.pipe(writer);

      // Return a promise to handle success or failure
      return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
      });
  })
  .catch(error => {
      console.error('Error downloading image:', error);
  });
}


module.exports = imgDown;
