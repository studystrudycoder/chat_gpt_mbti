// result.js

// 페이지가 로드될 때 실행
window.addEventListener('DOMContentLoaded', () => {
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  // 로컬스토리지에서 MBTI 결과 가져오기
  const mbtiResult = localStorage.getItem('mbti_result');

  if (mbtiResult) {
    // 값이 있으면 "~입니다!" 표시
    resultElement.textContent = `${mbtiResult}입니다!`;
  } else {
    // 값이 없으면 테스트 진행 안내 표시
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
  }

  // 버튼 텍스트 변경
  restartButton.textContent = '테스트 하러 가기';
});
