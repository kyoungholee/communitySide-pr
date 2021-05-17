import React, {useState, useRef, useEffect} from 'react';
import ajax from '../contents/noticeList';
import {Link} from 'react-router-dom';
import Editor from '../contents/editorComponent';



const noticeWriteForm = () => {

    const tabs = [
        { value: '공지사항', text: '공지사항' },
        { value: '업데이트', text: '업데이트' }
    ]

    const [id, setId] = useState.setId('0');
    const [title, setTitle] = useState.setTitle('');
    const [desc, setDesc] = useState.setDesc('');
    const [type, setType] = useState.setType("공지사항");
    const uploadReferenece = React.createRef();

    async function onClickSearch() {

        if (title.trim() == '') {
            alert('제목을 입력해주세요'); return;
        }

        if (desc.trim() == '') {
            alert('내용을 입력해주세요'); return;
        }

        await uploadReferenece.current.upload().then(function (result) {

            const files = result;


            ajax('/api/notice/saveNotice', { title: title, desc: desc, type: type, files: files }, (res) => {
                if (res.data && res.data.ok === 1) {
                    alert('저장 완료');
                    setId(res.data.insertedId);
                    var linkToClick = document.getElementById('notice_Detail_Link');
                    linkToClick.click();
                } else {
                    alert('공지사항을 저장하는 도중 오류가 발생하였습니다.')
                }
            }, null, true); 

        }).catch(function (err) {

        });

    }

    function onEditorChange(value) {
        setDesc(value)
    }

    return (
        <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
            <div className="lf-menu-nav"><span>설정</span><span>공지사항</span></div>
            <div className="lf-contents pd12">
                <div className="top-controls">
                    <a href="/"><button className="lf-button primary float-right">목록으로</button></a>
                </div>

                <div style={{ padding: "12px" }}>
                    <div className="form-group">
                    <input type="text" placeholder="제목" className="form-control" onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <Editor value={desc} onChange={onEditorChange} />
                    <div className="text-center pd12">
                        <button className="lf-button primary" onClick={onClickSearch}>저장</button>
                    </div>
                    <Link id="notice_Detail_Link" to={{ pathname: '/noticeDetail', state: { _id: id } }}></Link>
                </div>
            </div>
        </div>
    )
};


export default noticeWriteForm;