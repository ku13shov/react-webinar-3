import React from 'react';
import { createElement } from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;

  const handleAddItem = () => {
    store.addItem();
  }

  const showSelectedMessage = (item) => {
    if (item.selectedCount) {
      if (item.selectedCount % 10 === 1 && item.selectedCount % 100 !== 11) {
        return ` | Выделяли ${item.selectedCount} раз`;
      } else if (
        item.selectedCount % 10 >= 2 &&
        item.selectedCount % 10 <= 4 &&
        (item.selectedCount % 100 < 10 || item.selectedCount % 100 >= 20)
      ) {
        return ` | Выделяли ${item.selectedCount} раза`;
      } else {
        return ` | Выделяли ${item.selectedCount} раз`;
      }
    }
  }

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={handleAddItem}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                onClick={() => store.selectItem(item.code)}>
                <div className='Item-code'>{item.code}</div>
                <div className='Item-title'>{item.title} {showSelectedMessage(item)}</div>
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
