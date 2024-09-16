
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './actions';

const Photos = () => {
  const dispatch = useDispatch();

  // Lấy state từ Redux store
  const { loading, items: photos, error } = useSelector((state) => state);

  // Gọi action fetchPhotos khi component được mount
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  // Hiển thị loading
  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  // Hiển thị lỗi nếu có
  if (error) {
    return <p>Lỗi khi tải dữ liệu: {error}</p>;
  }

  // Hiển thị dữ liệu ảnh sau khi fetch thành công
  return (
    <div>
      <h1>Danh sách ảnh</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;
