import React from 'react'
import IBoardPreview from '../models/IBoardPreview';

interface IBoardPreviewProps {
    boardPreview: IBoardPreview;
    removeBoard: (boardId: number) => void;
}

const BoardPreview = ({boardPreview, removeBoard}: IBoardPreviewProps) => {

    const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        removeBoard(boardPreview.id)
    }

    return (
        <a href={"/board/" + boardPreview.id}  className="dnd-board-item">
            <button className="board-remove" onClick={e => handleRemoveClick(e)}>X</button>
            <div className="board-title">{boardPreview.title}</div>
        </a>
    )
}

export default BoardPreview