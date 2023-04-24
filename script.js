const quizData = [
	{
		question: "ما هو أكبر مشروع في المملكة العربية السعودية؟ ",
		a: "مشروع نيوم",
		b: "مشروع قطار الحرمين",
		c: " مشروع القدية",
		d: "مشروع جزيرة الفيصلية",
		answer: "a"
	},
	{
		question: "ما هو أكبر مطار في المملكة العربية السعودية؟",
		a: "مطار الملك عبد العزيز الدولي",
		b: "مطار الملك فهد الدولي",
		c: "مطار الملك خالد الدولي",
		d: "مطار الأمير محمد بن عبد العزيز الدولي",
		answer: "b"
	},
	{
		question: "من هو مؤسس المملكة العربية السعودية؟ ",
		a: "الملك سعود بن عبد العزيز آل سعود",
		b: "الملك فيصل بن عبد العزيز آل سعود",
		c: " الملك خالد بن عبد العزيز آل سعود",
		d: "الملك عبد العزيز بن عبد الرحمن آل سعود",
		answer: "d"
	},
	{	question: "ما هي عاصمة المملكة العربية السعودية؟",
		a: "الرياض",
		b: " جازان ",
		c: "جدة  ",
		d: "الدمام  ",
		answer: "a"
	}
];

function renderQuiz() {
	const quizElement = document.getElementById("quiz");
	const resultElement = document.getElementById("result");
	let output = "";
	// الاختيارات
	quizData.forEach((data, index) => {
		output += `<div>
			<h2>${data.question}</h2>
			<label>
				<input type="radio" name="question${index}" value="a">
				${data.a}
			</label>
			<label>
				<input type="radio" name="question${index}" value="b">
				${data.b}
			</label>
			<label>
				<input type="radio" name="question${index}" value="c">
				${data.c}
			</label>
			<label>
				<input type="radio" name="question${index}" value="d">
				${data.d}
			</label>
		</div>`;
	});
	quizElement.innerHTML = output;
	resultElement.innerHTML = "";
}

function submitQuiz() {
	const quizElement = document.getElementById("quiz");
	const resultElement = document.getElementById("result");
	let score = 0;
	quizData.forEach((data, index) => {
		const selectedOption = quizElement.querySelector(`input[name=question${index}]:checked`);
		if (selectedOption) {
			if (selectedOption.value === data.answer) {
				score++;
			}
		}
	});
	resultElement.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

window.onload = function() {
	const submitButton = document.getElementById("submit");
	submitButton.addEventListener("click", submitQuiz);
	renderQuiz();
}
