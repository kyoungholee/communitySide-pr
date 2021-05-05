import React, { Component } from 'react';
import {Nav, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";



class BoardRow extends Component {
    render() {
        return(
            <tr>
                <td>
                    <NavLink
                        to={{ pathname: "/board/detail", query : {_id:this.props._id}}}
                    >
                        {this.props.createdAt.substring(0,10)}
                    </NavLink>
                </td>
                <td>
                    <NavLink
                        to ={{pathname : "/board/detal", query : {_id : this.props._id}}}
                    >
                        {this.title}    
                    </NavLink>
                </td>
            </tr>
        ); 
    }
}

class BoardForm extends Component {
    state = {
        boardList : []
    };

    componentDidMount() {
        this.getBoardList();
    }

    getBoardList = () => {
        const send_param = {
            headers,
            _id: "login_id"
        };
        axios
            .post("http://localhost:8080/board/getBoardList", send_param)
            .then(returnData => {
                let boardList;
                if (returnData.data.list.length > 0) {
                    const boards = returnData.data.list;
                    boardList = boards.map(item =>(
                        <BoardRow
                            key = {Date.now() + Math.random() * 500}
                            _id = {item._id}
                            title = {item.title}
                            createdAt = {item.createdAt}
                            ></BoardRow> 
                    ));
                    this.setState({
                        boardList : boardList
                    });
                } else {
                    boardList = (
                        <tr>
                            <td colSpan ="2">게시글이 존재하지 않습니다.</td>
                        </tr>
                    );
                    this.setState({
                        boardList: boardList
                    });

                }
            })
            .catch(err => {
                console.log(err);
            });
    };
    

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>제목</th>
                            <th>지은이</th>
                        </tr>
                    </thead>
                    <tbody> {this.state.boardList}</tbody>
                </Table>
            </div>
        );
    }
}
