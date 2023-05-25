// function previewFile() {
//   // var preview = document.querySelector("img");
//   var file = document.querySelector("input[type=file]").files[0];
//   var reader = new FileReader();

//   reader.onloadend = function () {
//     // document.getElementById("preview").src = reader.result;
//     document.getElementById("result_img").src = reader.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "";
//   }
// }
// function previewImage() {
//   var fileInput = document.getElementById("uploadBtn");
//   var file = fileInput.files[0];
//   var reader = new FileReader();

//   reader.onloadend = function () {
//     var img = new Image();
//     img.onload = function () {
//       var canvas = document.createElement("canvas");
//       var ctx = canvas.getContext("2d");

//       // Calculate the aspect ratio of the uploaded image
//       var aspectRatio = img.width / img.height;

//       // Calculate the desired width and height for cropping
//       var desiredWidth = 280;
//       var desiredHeight = 345;

//       // Calculate the actual width and height based on the aspect ratio
//       var actualWidth, actualHeight;

//       if (aspectRatio > desiredWidth / desiredHeight) {
//         actualWidth = img.width;
//         actualHeight = img.width / (desiredWidth / desiredHeight);
//       } else {
//         actualWidth = img.height * (desiredWidth / desiredHeight);
//         actualHeight = img.height;
//       }

//       // Calculate the cropping coordinates to center the image
//       var offsetX = (img.width - actualWidth) / 2;
//       var offsetY = (img.height - actualHeight) / 2;

//       // Set the canvas dimensions to the desired final size
//       canvas.width = desiredWidth;
//       canvas.height = desiredHeight;

//       // Draw the cropped image onto the canvas
//       ctx.drawImage(
//         img,
//         offsetX,
//         offsetY,
//         actualWidth,
//         actualHeight,
//         0,
//         0,
//         desiredWidth,
//         desiredHeight
//       );

//       // Get the cropped image as a data URL
//       var croppedDataUrl = canvas.toDataURL();

//       // Display the cropped image
//       var previewImage = document.getElementById("previewImage");
//       previewImage.src = croppedDataUrl;
//     };

//     img.src = reader.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     // Clear the preview image if no file is selected
//     var previewImage = document.getElementById("previewImage");
//     previewImage.src = "";
//   }
// }

function previewImage_mobile() {
  var fileInput = document.getElementById("uploadBtn_mobile");
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    var img = new Image();
    img.onload = function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      // Calculate the aspect ratio of the uploaded image
      var aspectRatio = img.width / img.height;

      // Calculate the desired width and height for cropping
      var desiredWidth = 280;
      var desiredHeight = 345;

      // Calculate the actual width and height based on the aspect ratio
      var actualWidth, actualHeight;

      if (aspectRatio > desiredWidth / desiredHeight) {
        actualWidth = img.width;
        actualHeight = img.width / (desiredWidth / desiredHeight);
      } else {
        actualWidth = img.height * (desiredWidth / desiredHeight);
        actualHeight = img.height;
      }

      // Calculate the cropping coordinates to center the image
      var offsetX = (img.width - actualWidth) / 2;
      var offsetY = (img.height - actualHeight) / 2;

      // Set the canvas dimensions to the desired final size
      canvas.width = desiredWidth;
      canvas.height = desiredHeight;

      // Draw the cropped image onto the canvas
      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        actualWidth,
        actualHeight,
        0,
        0,
        desiredWidth,
        desiredHeight
      );

      // Get the cropped image as a data URL
      var croppedDataUrl = canvas.toDataURL();

      // Display the cropped image
      var previewImage = document.getElementById("previewImage");
      previewImage.src = croppedDataUrl;
    };

    img.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    // Clear the preview image if no file is selected
    var previewImage = document.getElementById("previewImage");
    previewImage.src = "";
  }
}

// function previewFile_mobile() {
//   // var preview_mobile = document.getElementById("preview_mobile");
//   var fileInput_mobile = document.getElementById("uploadBtn_mobile");
//   var file_mobile = fileInput_mobile.files[0];
//   var reader_mobile = new FileReader();

//   reader_mobile.onloadend = function () {
//     // document.getElementById("preview_mobile").src = reader_mobile.result;
//     document.getElementById("result_img_mobile").src = reader_mobile.result;
//   };

//   if (file_mobile) {
//     reader_mobile.readAsDataURL(file_mobile);
//   } else {
//     preview_mobile.src = "";
//   }
// }

// function previewFile_mobile() {
//   var fileInput_mobile = document.getElementById("uploadBtn_mobile");
//   var file_mobile = fileInput_mobile.files[0];
//   var reader_mobile = new FileReader();

//   reader_mobile.onloadend = function () {
//     var img = new Image();
//     img.src = reader_mobile.result;

//     img.onload = function () {
//       var canvas = document.createElement("canvas");
//       var ctx = canvas.getContext("2d");

//       // Calculate aspect ratio
//       var aspectRatio = img.width / img.height;

//       // Calculate new dimensions
//       var newWidth, newHeight;
//       if (aspectRatio >= 280 / 345) {
//         newWidth = img.width;
//         newHeight = img.width * (345 / 280);
//       } else {
//         newWidth = img.height * (280 / 345);
//         newHeight = img.height;
//       }

//       // Calculate cropping position
//       var cropX = (img.width - newWidth) / 2;
//       var cropY = (img.height - newHeight) / 2;

//       // Set canvas dimensions
//       canvas.width = 280;
//       canvas.height = 345;

//       // Perform cropping
//       ctx.drawImage(img, cropX, cropY, newWidth, newHeight, 0, 0, 280, 345);

//       // Get cropped image as data URL
//       var croppedDataUrl = canvas.toDataURL();

//       // Display cropped image
//       document.getElementById("result_img_mobile").src = croppedDataUrl;
//     };
//   };

//   if (file_mobile) {
//     reader_mobile.readAsDataURL(file_mobile);
//   } else {
//     document.getElementById("result_img_mobile").src = "";
//   }
// }

function displayText() {
  var name = document.getElementById("name_input").value;
  var age = document.getElementById("age_input").value;
  var level = document.getElementById("level_input").value;
  var major = document.getElementById("major_input").value;
  var birth = document.getElementById("birth_input").value;
  var fcolor = document.getElementById("fcolor_input").value;
  var flunch = document.getElementById("flunch_input").value;
  var fmusic = document.getElementById("fmusic_input").value;

  console.log(name);

  document.getElementById("name_p").innerHTML = name;
  document.getElementById("age_p").innerHTML = age;
  document.getElementById("level_p").innerHTML = level;
  document.getElementById("major_p").innerHTML = major;
  document.getElementById("birth_p").innerHTML = birth;
  document.getElementById("fcolor_p").innerHTML = fcolor;
  document.getElementById("flunch_p").innerHTML = flunch;
  document.getElementById("fmusic_p").innerHTML = fmusic;
}

function displayText_mobile() {
  var name = document.getElementById("name_input_mobile").value;
  var age = document.getElementById("age_input_mobile").value;
  var level = document.getElementById("level_input_mobile").value;
  var major = document.getElementById("major_input_mobile").value;
  var birth = document.getElementById("birth_input_mobile").value;
  var fcolor = document.getElementById("fcolor_input_mobile").value;
  var flunch = document.getElementById("flunch_input_mobile").value;
  var fmusic = document.getElementById("fmusic_input_mobile").value;

  console.log(name);

  document.getElementById("name_p_mobile").innerHTML = name;
  document.getElementById("age_p_mobile").innerHTML = age;
  document.getElementById("level_p_mobile").innerHTML = level;
  document.getElementById("major_p_mobile").innerHTML = major;
  document.getElementById("birth_p_mobile").innerHTML = birth;
  document.getElementById("fcolor_p_mobile").innerHTML = fcolor;
  document.getElementById("flunch_p_mobile").innerHTML = flunch;
  document.getElementById("fmusic_p_mobile").innerHTML = fmusic;
}
