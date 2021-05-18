import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from '../contents/Pagination';

const NoticeComponent = (props) => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async() => {
            let res = await('./contents/noticeList');
        }

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="lf-menu-nav"><span>게시판이 저장되는 곳입니다.</span></div>
            <div className="lf-contents pd12">
            <div className="top-controls">
                <a href="/boardWriteForm"><button>글쓰기</button></a>
            </div>
                <div style={{ padding: "0 12px" }}>
                <table className="board_list text-center">
                    <colgroup>
                        <col width="5%" />
                        <col width="*" />
                        <col width="50%" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호입니다.  </th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일시</th>
                            <th>조회수</th>
                            <th>첨부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map(post => (
                            <tr key={post._id}>
                            <td>{post._id}</td>
                            <td>{post.type}</td>
                            <td className="text-left"><Link className="text-ellipsis" to={{ pathname: '/noticeDetail', state: { _id: post._id } }} style={{ color: '#909090' }}>{post.title}</Link></td>
                            <td>{post.userName}</td>
            
                            <td>{post.readCount}</td>

                            </tr>
                        ))}
                    </tbody>

                </table>
                </div>

                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate}></Pagination>
            </div>
        </div>
    )
    };


    export default NoticeComponent;