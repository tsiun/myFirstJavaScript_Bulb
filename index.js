function light(sw) {
    let pic;
    if (sw == 0) {
      pic = "pic_bulboff.gif"
    } else {
      pic = "pic_bulbon.gif"
    }
    document.getElementById('myBulb').src = pic;
  }
