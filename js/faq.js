var isClicked = false;
var faqCount = 3;

// var questions = document.getElementsByClassName('faq')

function faq(clicked_li) {
    var questions = document.getElementsByClassName('question');
    // var question_ul = document.getElementById('question_ul');

    // console.log(questions.length);
    // console.log(questions.length);
    // console.log(question_ul);

    for (var i = 0; i < questions.length; i++) {

        if (questions[i] == clicked_li) {
            console.log('same')
            questions.insert(i, 'a')
        }
    }
    
    // li.appendChild(a);
    // var k = question_ul.appendChild(li);
    // // 질문 클릭된 적이 있을 때
    // if (faqCount == questions.length) {
    //     console.log("닫기")
    // }
}