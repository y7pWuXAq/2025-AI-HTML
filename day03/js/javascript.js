function goChangeMessage(msg) {
    // 팝업창 띄우기
    // alert('잇츠 굿~'); // 확인 완료

    // 매개변수로 받은 값을 팝업창에 출력
    // alert(msg); // 확인 완료

    // p태그 중 id가 p1인 태그의 정보 가져오기
    // 이 문서 안에서(document) id가 p1인 값을 가지는 태그의 정보 가져오기

    /* 변수 선언 방법
        - 변수명
        - 변수명 = "문자열값" or 1(숫자형) or True(bool형) or {key : value}(딕셔너리) or [1, 2, 3](리스트)
            - 변수명 왼쪽에 아무것도 제시하지 않아도 무방함
            - 지향하지는 않음

        - var 변수명
        - var 변수명 = "문자열값" or 1(숫자형) or True(bool형) or {key : value}(딕셔너리) or [1, 2, 3](리스트)
            - var는 자바스크립트 초기에 사용하던 명령
            - 내부 버그 문제로 사용 잘 안함

        - let 변수명
        - let 변수명 = "문자열값" or 1(숫자형) or True(bool형) or {key : value}(딕셔너리) or [1, 2, 3](리스트)
            - let은 var의 버그를 해소하기 위해 사용됨
            - 현재 let으로 사용하고 있음

        - const 변수명 = "문자열값" or 1(숫자형) or True(bool형) or {key : value}(딕셔너리) or [1, 2, 3](리스트)
            - const는 상수
            - 최초 선언과 값의 정의가 동시에 필요함 이후 값의 수정은 불가
            - 단, 오브젝트(딕셔너리)의 경우 값(value)만 수정이 가능
    */
   
    // let p1Tap = document.getElementById("p1");
    
    // p1Tap 태그 내에 텍스트 정보를 수정
    // innerHTML : 해당 태그와 태그 사이에 값(html 태그, 스타일, js 등) 사용 가능
    // p1Tap.innerHTML = "<b>임의의 값 넣기!</b> : " + msg;

    /* p1 버튼 > id가 p1인 태그의 데이터를 p1클릭, p2 버튼 > id가 p2인 태그의 데이터를 p2 클릭으로 변경 */
    document.getElementById(msg).innerHTML = msg + "이(가) 클릭되었습니다.";
}