const MODE_REMOVE = 'REMOVE';
const MODE_SAVE = 'SAVE';
const MODE_SELECT_ROW = 'SELECT_ROW';

export const boardSave = (saveData) => ({
    type: MODE_SAVE,
    saveDate: {
        boardId:saveData.boardId,
        boardTitle: saveDate.boardTitle,
        boardContent: saveData.boardContent
    }
});

export const boardRemove = (boardId) => ({
    type : MODE_REMOVE,
    boardId : boardId
});

export const boardSelectRow = (boardId) => ({
    type : MODE_SELECT_ROW,
    boardId: boardId
});

const initialState = {
    boards : [
        {
            boardId : 1,
            boardTitle : '제목 1',
            boardContent : '안녕하세요 '
        },
        {
            boardId : 2,
            boardTitle : '제목 2',
            boardContent : '여행  '
        },
        {
            boardId : 3,
            boardTitle : '제목 3',
            boardContent : '좋은 밤 되세요 ' 
        }

    ],
    lastId: 3,
    selectRowData : {}
}



