const question = '4大将で一番強いのは誰？';
const answers = [
  '青キジ',
  '赤犬',
  '黄猿',
  '藤虎'
];
const correct = '赤犬';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
    }
}
setupQuiz ();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  }else{
    window.alert('残念不正解！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler (e);
  });
  handlerIndex++;
}