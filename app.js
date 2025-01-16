const quiz = [
  {
    question: '4大将で一番強いのは誰？',
    answers: [
      '青キジ',
      '赤犬',
      '黄猿',
      '藤虎'
    ],
    correct: '赤犬'
  },{
    question: 'ルフィがかぶっている帽子は？',
    answers: [
      'ハット帽子',
      '麦わら帽子',
      'ニット帽子',
      'かぶっていない'
    ],
    correct: '麦わら帽子'
  },{
    question: 'ゾロは何本刀を持っている？',
    answers: [
      '1本',
      '3本',
      '5本',
      '基本持っていない',
    ],
    correct: '3本'
  },{
    question: 'チームAの人数は？',
    answers: [
      '1人',
      '3人',
      '4人',
      'ライフコーチ合わせて4人'
    ],
    correct: '4人'
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz ();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  }else{
    window.alert('残念不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    // 問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler (e);
  });
  handlerIndex++;
};