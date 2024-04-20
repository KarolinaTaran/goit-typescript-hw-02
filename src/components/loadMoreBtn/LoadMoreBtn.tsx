interface Props {
  onLoadMore: (searchQuery: string | undefined) => void;
  searchQuery?: string | null;
}
const LoadMoreBtn: React.FC<Props> = ({ onLoadMore, searchQuery }) => {
  const loadMore = () => {
    onLoadMore(searchQuery !== null ? searchQuery : undefined);
  };
  return (
    <div>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
