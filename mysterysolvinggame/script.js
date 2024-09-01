const answerInput = document.getElementById('answerInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    const answer = answerInput.value;

    if (answer === '5050') {
        window.location.href = 'msg_getpoint.html'; // ダミーページへ遷移
    } else {
        alert('不正解です。');
    }
});