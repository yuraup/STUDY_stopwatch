let min = 0;
let sec = 0;
let ms = 0; // 시간의 초기값을 설정합니다.

// 각 변수 별로 html에서 element(요소)를 가져오는 코드를 작성하세요 (*변수명을 수정하지 말아주세요)
const millisec = document.querySelector('#millisec');
const second = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// 스톱워치 상태
let intervalId;

//시작 버튼 클릭 시 시간이 10ms씩 증가합니다.
function startTimer () {
  clearInterval(intervalId)
  intervalId = setInterval(operateTimer, 10)
};

startBtn.addEventListener("click", startTimer);

//일시정지 버튼 클릭 시 시간 증가가 정지됩니다.
function stopTimer () {
  clearInterval(intervalId) 
};

stopBtn.addEventListener("click", stopTimer);

//리셋 버튼 클릭 시 시간이 상태로 초기화 됩니다.
function resetTimer() {
  clearInterval(intervalId)
  ms = 0; sec = 0; min = 0;
  millisec.textContent = "00"
  second.textContent = "00"
  minutes.textContent = "00"
};

resetBtn.addEventListener("click", resetTimer);


function operateTimer() {
  ms++;
  millisec.textContent = ms > 9 ? ms : '0' + ms 
  if(ms > 99) {                                       //ms가 100이 되면
    sec++;                                            //초 증가
    second.textContent = sec > 9 ? sec : '0' + sec    //초가 증가한 값 표시, 두 자리수로 나타내기
    ms = 0                                            // ms는 다시 0이 됨
    millisec.textContent= "00" 
  }
  if(sec > 59) {                                      //초가 60이 되면
    min++;                                            //분이 올라간다
    minutes.textContent = min > 9 ? min : '0' + min   //분 표시
    sec = 0                                           //초는 다시 0부터 시작
    second.textContent = "00"
  };
};
