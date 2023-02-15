const slider = document.querySelector(".body__header__lineslider");
const right = document.querySelector(".slider__right");
const left = document.querySelector(".slider__left");

let active = 0;


console.log(left)
right.addEventListener('click', () => {
slider.classList.remove(`active${active}`)
if(active < 4)
{
active = active + 1;
}
slider.classList.add(`active${active}`)
console.log(1);
})
left.addEventListener('click', () => {
slider.classList.remove(`active${active}`)
if(active > 0)
{
active = active - 1;
}
slider.classList.add(`active${active}`)
console.log(1);
if(active == 0)
{
    slider.classList.remove(`active${active}`)
}
})