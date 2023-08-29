const char = createSorcerer();
const monster = createSpider();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);