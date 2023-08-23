function verif() {
  const str = document.getElementById("str");
  let n = str.value.length - 1;
  let voy_count = 0;
  let word_count = 1;
  let char_count = 0;
  for (let i = 0; i < n; i++) {
    if ("aeyuioAEYUIO".includes(str.value[i])) {
      voy_count += 1;
      char_count += 1;
    } else if (str.value[i] == " ") {
      word_count += 1;
    } else {
      char_count += 1;
    }
  }
  if (str.value[n] != ".") {
    n = str.length - 1;
    alert("it must end with point");
    str.value = "";
  } else {
    document.getElementById("res").value =
      "voiyelle num" +
      voy_count +
      "   words num" +
      word_count +
      "  letters num" +
      char_count;
  }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", verif);
