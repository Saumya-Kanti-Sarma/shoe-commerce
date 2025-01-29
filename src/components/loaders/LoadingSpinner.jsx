import "./LoadingSpinner.css";

export default function LoadingSpinner({ display }) {
  return <div className="loading-spinner" style={{ display: display || "" }}></div>;
}
