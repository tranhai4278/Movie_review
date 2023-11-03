import { Button, Col, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import { getCurrentDate } from "./MovieDetailService";

function MovieDetailComment({
  data,
  isParent = false,
  handleSubmitComment,
  movieId,
  userId,
}) {
  const [showReplyForm, setShowReplyForm] = useState(false); // State để kiểm tra xem nút "replies" đã được nhấn chưa
  const [newReply, setNewReply] = useState(""); // State để lưu nội dung bình luận mới
  const [showMore, setShowMore] = useState("Show More"); // State để lưu nội dung bình luận mới

  // Hàm để xử lý khi nhấn nút "replies"
  const handleShowReplyForm = (e) => {
    e.preventDefault();
    setShowReplyForm(!showReplyForm); // Đảo ngược trạng thái khi nút "replies" được nhấn
  };

  // Hàm để xử lý khi thay đổi nội dung bình luận mới
  const handleNewReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleShowMore = (e) => {
    e.preventDefault();
    setShowMore(showMore === "Show More" ? "Show Less" : "Show More");
  };

  // Hàm để xử lý khi nhấn phím "Enter" trong ô nhập bình luận mới
  const handleNewReplyKeyPress = (e, parentCommentId) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Ngăn ngừng hiển thị dòng mới khi ấn "Enter"
      if (newReply.trim() !== "") {
        handleSubmitComment({
          movie_id: movieId,
          user_id: userId,
          content: newReply,
          create_at: getCurrentDate(),
          status: "todo",
          parent_comment_id: parentCommentId,
        }); // Gọi hàm handleSubmitComment và truyền nội dung bình luận mới
        setNewReply(""); // Xóa nội dung bình luận mới
        setShowReplyForm(false); // Ẩn Form.Group
      }
    }
  };

  return (
    <Col
      md={12}
      className="mv-user-review-item"
      style={isParent ? { marginBottom: "20px" } : { padding: "0" }}
    >
      <div className="user-infor">
        <Link to={`user/${data.user.user_id}`}>
          <img
            src={data.user.avatar}
            style={{ borderRadius: "100px", width: "28px", height: "28px" }}
            alt="img"
          />
        </Link>
        <span style={{ paddingLeft: "16px", color: "white" }}>
          <Link to={`user/${data.user.user_id}`}>{data.user.username}</Link>
        </span>
        <span style={{ padding: "0 16px" }} className="time">
          {data.create_at}
        </span>
        {isParent && data.replies.length !== 0 && (
          <a
            style={{ padding: "0 16px" }}
            href="javascript"
            onClick={handleShowMore}
          >
            {showMore}
          </a>
        )}
        <a href="java" className="reply-link" onClick={handleShowReplyForm}>
          replies
        </a>
      </div>
      <p style={{ marginBottom: "4px", whiteSpace: "pre-line" }}>
        {data.content}
      </p>
      {showReplyForm && ( // Hiển thị Form.Group nếu showReplyForm là true
        <Form.Group controlId="comment">
          <Form.Control
            type="text"
            placeholder="Your Comment"
            value={newReply}
            onChange={handleNewReplyChange}
            onKeyPress={(e) => handleNewReplyKeyPress(e, data.id)} // Gọi hàm handleNewReplyKeyPress khi nhấn phím
          />
        </Form.Group>
      )}
      {(showMore !== "Show More" || !isParent) && (
        <div style={{ paddingLeft: "60px" }}>
          {data?.replies.map((item, index) => (
            <MovieDetailComment
              key={index}
              data={item}
              handleSubmitComment={handleSubmitComment}
              movieId={movieId}
              userId={userId}
            />
          ))}
        </div>
      )}
    </Col>
  );
}

export default MovieDetailComment;
