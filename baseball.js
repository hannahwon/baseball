let body = document.body;
let nums;
let num_array;
const question = () => {
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    num_array = [];
    for (let i = 0; i < 4; i++) {
        let output = nums.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        num_array.push(output);
    }
}
question();
let result = document.createElement('h1');
body.append(result);
let form = document.createElement('form');
document.body.append(form);
let input_blank = document.createElement('input');
form.append(input_blank);
input_blank.type = 'text';
input_blank.maxLength = 4;
let button = document.createElement('button');
button.textContent = '입력';
form.append(button);

console.log(num_array); //정답을 콘솔창에 출력함

//user가 정답을 입력했을 때 작동할 로직
let wrong = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let user_answer = input_blank.value;
    if (user_answer === num_array.join('')) {
        result.textContent = '홈런!';
        input_blank.value = '';
        input_blank.focus();
        question();
        wrong = 0;
    } else {
        let answer_array = user_answer.split('');
        let strike = 0;
        let ball = 0;
        wrong += 1;
        if (wrong > 10) {
            result.textContent = `실패! 정답은 ${num_array.join('')} 입니다!`;
            input_blank.value = '';
            input_blank.focus();
            question();
            wrong = 0;
        } else {
            for (let i = 0; i < 3; i++) {
                if (Number(answer_array[i] === num_array[i])) {
                    strike += 1;
                    ball += 1;
                } else if (num_array.indexOf(Number(answer_array[i]) > -1)) {
                    ball += 1;
                }
            }
            result.textContent = `${strike} 스트라이크 ${ball} 볼입니다. 현재 남은 횟수 ${10 - wrong}`;
            input_blank.value = '';
            input_blank.focus();
        }
    }
})