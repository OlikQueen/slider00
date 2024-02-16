/*

- вывести точки
- активная точка
- data-dotted если есть этот атрибут, то выводим, по умолчанию нет

*/

const classes = {
  root: "slider",
  mod: "active"
}


// clear function
function sliderRun(slider) {
  const sliderImg = slider.querySelectorAll('[data-item]');
  const timeout = slider.getAttribute('data-timeout');
  
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
    // 3 проверяю совпадает ли текущий эл-т с последним из списка
    if (sliderImg.length === switcing) {
      switcing = 0;
    };
  }, timeout);
};


export const slider = () => {
    const sliders = document.querySelectorAll(`.${classes.root}`);
    const sliderImg = document.querySelectorAll(`.${classes.root} [data-item]`);

    for ( const slider of sliders ) {
      sliderRun(slider)
    }
};