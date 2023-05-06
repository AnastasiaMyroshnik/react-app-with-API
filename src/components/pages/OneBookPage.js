import './oneBookPage.scss';
// import xMen from '../../resources/img/x-men.png';

const OneBookPage = () => {
  const imgArr = ['https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/3/4/34_3.jpg', 'https://content2.rozetka.com.ua/goods/images/big/196211348.jpg', 'https://bookling.ua/upload/iblock/504/a_song_of_ice_and_fire_book3_a_storm_of_swords_hb.jpeg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://ubd.ua/image/cache/catalog/products/anglijskij-yazik/harpercollins/9780007459476-500x500.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://content.rozetka.com.ua/goods/images/big/196211298.jpg', 'https://upload.wikimedia.org/wikipedia/en/f/f6/The_Princess_and_the_Queen.jpg', 'https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg', 'https://bookseller.com.ua/image/catalog/pictures/products/english/9780007580910_247.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg'];
  return (
    <div className="single-comic">
      <img src='' alt="x-men" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
        <p className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
        <p className="single-comic__descr">144 pages</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">9.99$</div>
      </div>
      <a href="#" className="single-comic__back">Back to all</a>
    </div>
  )
}

export default OneBookPage;