const ajax = require('ajax');
const data = require('data');

const {pen} = ajax;
const noticePen = new data({

    url: "../models/board",
    type: "POST",
    data: "text",
    success : function(result) {
        if (result) {
            alert("저장되었습니다.");
        } else {
            alert("잠시 후 다시 시도 해주세요");
        }
    },
    error : function() {
        alert("에러 발생");
    }
});

export default ('data',noticePen);