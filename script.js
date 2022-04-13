const dotContainer = $(".dots");
const octaves = [1, 2, 3, 4, 5, 6, 7];
let curOctave = 3;

// Functions
const createDots = function () {
  octaves.forEach(function (_, i) {
    dotContainer.append(`<input type="radio" id="${i}" class="dots__btn" />`);
  });
};

const generateDots = function () {
  createDots();
  $(`.dots__btn:nth-child(4)`).prop("checked", true);
};

generateDots();

// Radio Button functioality to update octaves
$(".dots__btn").click(function (e) {
  curOctave = e.target.id;
  $(".dots__btn").prop("checked", false);
  $(this).prop("checked", true);
});

// Piano Key Click Event Listener
$(".keyboard").click(function (e) {
  let pitch = e.target.dataset.pitch;
  let octave = octaves[curOctave];
  if (pitch === "HighC") {
    octave = octaves[curOctave] + 1;
    pitch = "C";
  }
  var sound = new Audio(`sounds/${pitch}${octave}.mp3`);
  sound.play();
});

// Computer Key Press Event Listener
$("body").keypress(function (e) {
  let pitch = e.originalEvent.key;
  let octave = octaves[curOctave];
  var sound = new Audio(`sounds/${pitch}${octave}.mp3`);
  sound.play();
});
