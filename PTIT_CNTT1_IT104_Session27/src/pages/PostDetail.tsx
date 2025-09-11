import { useParams } from "react-router-dom";
import "../assets/blog.css";

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    content:
      "React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. " +
      "Với React, bạn có thể tạo các component tái sử dụng để bảo trì và mở rộng dễ dàng. " +
      "Bài viết này sẽ giúp bạn khởi đầu với React và hiểu cách hoạt động cơ bản của nó. " +
      "Nếu bạn mới học, React là lựa chọn tuyệt vời để bắt đầu hành trình lập trình front-end.",
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    content:
      "TailwindCSS là một framework CSS tiện lợi cho phép bạn xây dựng giao diện nhanh chóng. " +
      "Thay vì viết CSS thủ công, bạn có thể dùng các class tiện dụng có sẵn. " +
      "Điều này giúp tăng tốc độ phát triển và dễ dàng tùy chỉnh giao diện. " +
      "TailwindCSS hiện đang rất phổ biến trong cộng đồng front-end.",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    content:
      "React Router giúp bạn định tuyến trong ứng dụng SPA. " +
      "Nó cho phép điều hướng mà không cần tải lại trang, mang lại trải nghiệm mượt mà. " +
      "Bạn có thể xây dựng Nested Routes để quản lý layout phức tạp. " +
      "Đây là công cụ quan trọng cho mọi ứng dụng React hiện đại.",
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    content:
      "Redux là thư viện quản lý state tập trung. " +
      "Nó giúp bạn dễ dàng quản lý và chia sẻ dữ liệu giữa các component. " +
      "Mặc dù có cú pháp hơi dài dòng, Redux rất mạnh khi xử lý ứng dụng lớn. " +
      "Ngày nay, nhiều dự án vẫn kết hợp Redux với React để quản lý state.",
  },
  {
    id: 5,
    title: "Hooks trong React",
    content:
      "React Hooks cho phép bạn sử dụng state và lifecycle trong function component. " +
      "useState và useEffect là hai hook phổ biến nhất. " +
      "Hooks giúp code gọn hơn và dễ tái sử dụng. " +
      "Nếu bạn quen class component, hãy thử chuyển sang hooks để thấy sự tiện lợi.",
  },
];

export default function PostDetail() {
  // chỉ định rõ type để tránh lỗi string | undefined
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <h2>Bài viết không tồn tại</h2>;
  }

  const postId = parseInt(id, 10);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <h2>Bài viết không tồn tại</h2>;
  }

  return (
    <div className="post-detail">
      <h2 className="detail-title">{post.title}</h2>
      <p className="detail-content">{post.content}</p>
    </div>
  );
}