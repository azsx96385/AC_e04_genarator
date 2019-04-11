const task = {
  engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
  designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
  entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
};
const phrase = ["很簡單", "很容易", "很快", "很正常"];

function e04_generate(data) {
  let jobTarget = "";
  let jobTask = "";
  let jobPharse = "";

  //1.判定選擇的身分-個別處理
  if (data.target === "engineer") {
    jobTarget += "工程師";
    jobTask += random_word(task.engineer);
    jobPharse += random_word(phrase);
  } else if (data.target === "designer") {
    jobTarget += "設計師";
    jobTask += random_word(task.designer);
    jobPharse += random_word(phrase);
  } else if (data.target === "entrepreneur") {
    jobTarget += "創業家";
    jobTask += random_word(task.entrepreneur);
    jobPharse += random_word(phrase);
  }

  //2.組合一句話
  let e04_sentence = `身為一個${jobTarget},${jobTask},${jobPharse}`;

  //3.回傳

  return e04_sentence;
}

function random_word(words) {
  //計算句長
  let word_len = words.length;
  //亂數index
  let index = Math.floor(Math.random() * word_len);
  return words[index];
}

module.exports = e04_generate;
