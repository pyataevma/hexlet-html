const board = document.querySelector('.board');

const LENGTH_OF_ROW = 8;
const LENGTH_OF_COLUMN = 8;
// const fragment = document.createDocumentFragment(); // Создаём "коробочку"

for (let i = 0; i < LENGTH_OF_COLUMN; i += 1) {
  const newRow = document.createElement('div');
  newRow.classList.add('board-row');
  for (let j = 0; j < LENGTH_OF_ROW; j += 1) {
    const newCell = document.createElement('div');
    newCell.classList.add('board-cell');
    newRow.appendChild(newCell);
    // newElement.innerHTML = '<span>' + i + '</span>';
    // fragment.appendChild(newElement); // Складываем созданные элементы в "коробочку"
  }
  board.appendChild(newRow);
}

// container.appendChild(fragment); // И только в конце отрисовываем всё из "коробочки"
