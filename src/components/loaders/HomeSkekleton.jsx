import "./HomeSkeleton.css";

export default function SkeletonLoader() {
  return (
    <div className="skeleton-product">
      <div className="skeleton-image"></div>
      <div className="skeleton-text skeleton-title"></div>
      <div className="skeleton-text skeleton-description"></div>
      <div className="skeleton-text skeleton-rating"></div>
    </div>
  );
}
