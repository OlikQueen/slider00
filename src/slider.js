/*

- вывести точки
- активная точка
дз - data-dotted если есть этот атрибут, то выводим, по умолчанию нет
*/

const classes = {
  root: "slider",
  mod: "active"
}



function dots(slider){  

  // создали div элемент
  const dots = document.createElement('div');
  // добавили этому элементу класс
  dots.setAttribute('class','slider__dots');

  

  // нашли все элементы data-item
  const sliderImg = slider.querySelectorAll('[data-item]');
  // 
  for (const iterator of sliderImg) {
    const dot = document.createElement('a');
    dots.appendChild(dot);

  }
  
  slider.appendChild(dots);
}

function setActiveDot(slider, index) {
  console.log(index);

  
}

// clear function
function sliderRun(slider) {
  const sliderImg = slider.querySelectorAll('[data-item]');
  const timeout = slider.getAttribute('data-timeout');
  const dotted = slider.hasAttribute('data-dotted');

  
  sliderImg[0].classList.add(classes.mod);
  
  // 1 хранилище индекса активного эле-та
  let switcing = 1;
  setInterval(function () {
      // 0 удаляем класс у всех эл-в
    for (const iterator of sliderImg) {
      iterator.classList.remove(classes.mod);
    }
    
    // 2 новому активному эл-ту добавляю класс
    sliderImg[switcing++].classList.add(classes.mod);

    // функция, отвечающая за активность точек => slider, switcing
    // нужно будет внутри слайдера найти картинку под индексом switcing и задать класс
    setActiveDot(slider, switcing);
    

    // 3 проверяю совпадает ли текущий эл-т с последним из списка
    if (sliderImg.length === switcing) {
      switcing = 0;
    };
  }, timeout);
  
  if (dotted) {
    dots(slider);
  }
};


export const slider = () => {
    const sliders = document.querySelectorAll(`.${classes.root}`);

    for ( const slider of sliders ) {
      sliderRun(slider)
    }
};