import { useSendingRequest, useRenderContentList } from '../../hooks/buildContentList';

import Error from '../error/Error';
import Loading from '../loading/Loading';

import '../personageList/personageList.scss';

const HouseList = ({choosenUrl}) => {

  const { contentList, errorStatus, load, newContentLoading, isEnd, getData, pageNum } = useSendingRequest('houses', 9);

  const { renderContent } = useRenderContentList('houses', choosenUrl, 'housesList');

  const loadedHouses = renderContent(contentList);
  const error = errorStatus ? <Error /> : null;
  const loading = load || newContentLoading ? <Loading /> : null;
  const content = !(load || errorStatus) ? loadedHouses : null;
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

export default HouseList;