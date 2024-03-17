import Header from './components/Header';
import InfoCataloge from './components/InfoCataloge';
import SendEmail from './components/SendEmail';
import ItemSlider from './components/Slider/ItemSlider';
import Card from './components/Slider/ItemSlider/Card/index.jsx';
import TitleSlider from './components/Slider/TitleSlider';
import Comment from './components/Slider/ItemSlider/Comment/index.jsx';
import Footer from './components/Footer/index.jsx';

import './scss/main.scss';

import { itemsData } from './itemsData.js';
import { commentData } from './commentData.js';

function App() {
  return (
    <>
      <Header />
      <TitleSlider />
      <InfoCataloge />
      <ItemSlider
        data={itemsData}
        countPage={3}
        slidesToShow={3} // how many items the slider should display
        slidesToScroll={3} // how many elements to display in the slider
        title="Найгарячіші товари">
        {/* data transfer for component rendering */}
        {itemsData.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </ItemSlider>
      <SendEmail />
      <ItemSlider
        data={commentData}
        countPage={4}
        slidesToShow={4} // how many items the slider should display
        slidesToScroll={4} // how many elements to display in the slider
        title="Відгуки наших клієнтів">
        {/* data transfer for component rendering */}
        {commentData.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </ItemSlider>
      <Footer />
    </>
  );
}

export default App;
