
function mail() {
    var mm = document.getElementById("m_content");
    mm.innerHTML = "<span class='material-symbols-outlined'>content_copy</span><p>복사됨</p>";
    copy("gdsc.inha@gmail.com");
}

const copy = (text) => {
    // 임시의 textarea 생성
    const $textarea = document.createElement("textarea");

    // body 요소에 존재해야 복사가 진행됨
    document.body.appendChild($textarea);
    
    // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
    $textarea.value = text;
    $textarea.select();
    
    // 복사 후 textarea 지우기
    document.execCommand('copy');
    document.body.removeChild($textarea);
}