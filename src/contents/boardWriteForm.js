import React, { Component } from "react";
import { Button, Form} from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardWriteForm extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    if (this.props.location.query !== undefined) {
      this.boardTitle.value = this.props.location.query.title;
    }
  }

  componentWillMount(){
    if (this.props.location.query !== undefined) {
      this.setState({
        data: this.props.location.query.content
      });
    }
  }

  writeBoard = () => {
    let url;
    let send_param;

    const boardTitle = this.boardTitle.value;
    const boardContent = this.state.data;

    if (boardTitle === undefined || boardTitle === "") {
      alert("글 제목을 입력 해주세요.");
      boardTitle.focus();
      return;
    } else if (boardContent === undefined || boardContent === "") {
      alert("글 내용을 입력 해주세요.");
      boardContent.focus();
    }
    
    if (this.props.location.query !== undefined) {
      url = "http://localhost:8080/board/update";
      send_param = {
        headers,
        "_id" : this.props.location.query._id,
        "title": boardTitle,
        "content": boardContent
      };
    } else {
      url = "http://localhost:8080/board/write";
      send_param = {
        headers,
        "_id" : this.props.body._id,
        "title": boardTitle,
        "content": boardContent
      };

    }

    axios
      .post(url, send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.href = "/";
        } else {
          alert("글쓰기 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };

  onEditorChange = evt => {
    this.setState({
      data: evt.editor.getData()
    });
  };

  render() {
  
    return (
      <div  className="App">
        <h2>글쓰기</h2>
        <Form.Control
            type="text"
            
            placeholder="글 제목"
            ref={ref => (this.boardTitle = ref)}
        />
        <Button onClick={this.writeBoard} block>
          저장하기
        </Button>
      </div>
    );
  }
}

export default BoardWriteForm;