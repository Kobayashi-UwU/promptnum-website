function previewFile() {
  var preview = document.querySelector("img");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();
  console.log(file);

  reader.onloadend = function () {
    // document.getElementById("preview").src = reader.result;
    document.getElementById("result_img").src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function previewFile_mobile() {
  var preview_mobile = document.getElementById("preview_mobile");
  var fileInput_mobile = document.getElementById("uploadBtn_mobile");
  var file_mobile = fileInput_mobile.files[0];
  var reader_mobile = new FileReader();

  reader_mobile.onloadend = function () {
    // document.getElementById("preview_mobile").src = reader_mobile.result;
    document.getElementById("result_img_mobile").src = reader_mobile.result;
  };

  if (file_mobile) {
    reader_mobile.readAsDataURL(file_mobile);
  } else {
    preview_mobile.src = "";
  }
}

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
