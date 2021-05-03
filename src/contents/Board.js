import React, { useEffect } from 'react'
import {Table, Td, Th, Li, Ul, ButtonContainer, Container} from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { media } from "../components/StyleUtils";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";


const Board = ({page}) => {
    const {me} = useSelector(state => state.user);
    const {mainPosts} = useSelector(state => state.post);

    const dispatch = useDispatch();

    //게시판 불러오기 
    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST
        });
    }, [page]);


    return (
        <>
        <pageTitle>
            <h1>자유게시판</h1>
            <h4>자유롭게 글을 쓸 수 있는 게시판 입니다. </h4>
        </pageTitle>

        <Container>
            <Table>
                <thead>
                    <tr>
                        <Th style ={{width : 60 }}> NO </Th>
                        <Th style ={{width : 500 }}> 글제목 </Th>
                        <Th style ={{width : 120 }}> 작성자 </Th>
                        <Th style ={{width : 100 }}> 조회수 </Th>
                        <Th style ={{width : 100 }}> 작성일 </Th>
                    </tr>
                </thead>

                <tbody>
                    {mainPosts.map(c => {
                        return (
                            <tr key={c.id}>
                                <Td style ={{ width : 70}}>{c.id}</Td>
                                <Link to ="/detail">
                                    <Td style = {{ width : 500}}>{c.title}</Td>
                                </Link>
                                <Td style = {{ width: 120}}>{c.User.nickname}</Td>
                                <Td style = {{ width: 100}}>{c.views}</Td>
                                <Td style = {{ width: 120}}>{c.createdAt.substring(0, 10)}</Td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <Ul>
                <Li>
                    <Link to ={{ pathname: "/board", query:{ page: "1"} }}
                    as = {`/board/${page}`}
                    >
                        <ALink>1</ALink>
                    </Link>
                </Li>
                <Li>
                    <Link to ={{ pathname: "/board", query:{ page: "2"} }}
                    as = {`/board/${page}`}
                    >
                        <ALink>2</ALink>
                    </Link>
                </Li>
                <Li>
                    <Link to ={{ pathname: "/board", query:{ page: "3"} }}
                    as = {`/board/${page}`}
                    >
                        <ALink>3</ALink>
                    </Link>
                </Li>
                <Li>
                    <Link to ={{ pathname: "/board", query:{ page: "4"} }}
                    as = {`/board/${page}`}
                    >
                        <ALink>4</ALink>
                    </Link>
                </Li>


            </Ul>

        </Container>

        {me && (
            <ButtonContainer>
                <Link to ="/postForm">
                    <a>
                        <Button>글쓰기 </Button>
                    </a>
                </Link>
            </ButtonContainer>
        )}
        </>


    );
};


export default Board;
