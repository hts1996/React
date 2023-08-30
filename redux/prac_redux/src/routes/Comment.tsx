import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { MComment } from "../model/mmovie";
import { addComment, deleteComment, updateComment, defaultComment,selectComment } from '../movies/commentSlice';
const Comment: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState('');
  const comments = useSelector(selectComment);

//   const getMovie = useCallback(async () => {
//     await axios({
//       method: "get",
//       url: `https://api.themoviedb.org/3/movie/${id}?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko`,
//     })
//       .then((response) => {
//         setMovie(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id, setMovie]);

//   useEffect(() => {
//     getMovie();
//   }, [getMovie]);
const handleAddComment = () => {
    const id = Date.now(); // You can use a more suitable ID generation logic
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
  return (
    <div>
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : comments.length>0 ?( // movie가 null이 아닌 경우에만 JSX 렌더링
        <div >
          <div>
            <ul >
              {comments.map((g) => (
                <li key={g.id}>{g.docs}
                 <button onClick={() => handleDeleteComment(g.id)}>Delete</button>
            <button onClick={() => handleUpdateComment(g.id, 'Updated Text')}>Update</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>댓글이 없음</div> // movie가 null인 경우에 메시지 출력
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
