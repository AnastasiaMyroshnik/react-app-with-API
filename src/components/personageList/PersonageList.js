import { useSendingRequest, useRenderContentList } from "../../hooks/buildContentList";

import Error from "../error/Error";
import Loading from '../loading/Loading';

const PersonageList = ({ choosenUrl }) => {

  const { contentList, errorStatus, load, newContentLoading, isEnd, getData, pageNum } = useSendingRequest('characters', 12);
  const { renderContent } = useRenderContentList('characters', choosenUrl, 'personageList');

  const loadedPersonages = renderContent(contentList);
  const error = errorStatus ? <Error /> : null;
  const loading = load || newContentLoading ? <Loading /> : null;
  const content = !(load || errorStatus) ? loadedPersonages : null;
  const displayBtn = isEnd ? { display: 'none' } : null;

  return (
    <div className="personage__wrapper">
      {error}
      {content}
      {loading}
      <button
        style={displayBtn}
        className="button button__personage button__long"
        disabled={newContentLoading}
        onClick={() => getData(pageNum)}>
        <div className='btn-text'>load more</div>
      </button>
    </div>
  )
}

export default PersonageList;