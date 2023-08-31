import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { MComment } from "../model/mmovie";
import { addComment, deleteComment, updateComment, selectComment } from '../movies/commentSlice';
import styles from "./Comments.module.css";

const Comment: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const comments = useSelector(selectComment);

  const handleAddComment = () => {
    const id = Date.now();
    const comment: MComment = { id, docs: newComment };
    dispatch(addComment(comment));
    setNewComment('');
  };

  const handleDeleteComment = (id: number) => {
    dispatch(deleteComment(id));
  };

  const handleUpdateComment = (id: number, newText: string) => {
    const updatedComment: MComment = { id, docs: newText };
    dispatch(updateComment(updatedComment));
  };

  const [editCommentId, setEditCommentId] = useState<number | null>(null);

  const handleEditClick = (id: number) => {
    setEditCommentId(id);
  };

  const handleEditSave = (id: number, newText: string) => {
    handleUpdateComment(id, newText);
    setEditCommentId(null);
  };

  return (
    <div>
      <div>
        {comments.length > 0 ? (
          <div>
            <div>
              <ul>
                {comments.map((g) => (
                  <li key={g.id}>
                    {editCommentId === g.id ? (
                      <div>
                        <input
                          type="text"
                          value={g.docs}
                          onChange={(e) => handleUpdateComment(g.id, e.target.value)}
                        />
                        <button onClick={() => handleEditSave(g.id, g.docs)}>Save</button>
                      </div>
                    ) : (
                      <div>
                        {g.docs}
                        <button onClick={() => handleDeleteComment(g.id)}>Delete</button>
                        <button onClick={() => handleEditClick(g.id)}>Update</button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>댓글이 없음</div>
        )}
      </div>
      <input
        type="text"
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>저장</button>
    </div>
  );
};

export default Comment;
