module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/sass/")

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/json");
    eleventyConfig.addPassthroughCopy("./src/assets");

    return{
        dir: {
            input: "src",
            output: "public"
        }
    };
}
var nodemailer = require('nodemailer');
console.log(nodemailer)

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hej.recover@gmail.com',
        pass: 'testkode123'
    }
});
var mailOptions = {
    from: 'hej.recover@gmail.com',
    to: 'jacob@erholt.dk',
    subject: 'Hej Jacob',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
