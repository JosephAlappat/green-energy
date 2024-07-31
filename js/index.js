function preloader() {
    const imagesList = [
        "./img/tiles-1191931.webp",
        "./img/solar-panel-1424264.webp",
        "./img/wind-mill-1425007.webp"
    ];


    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);

};

// making the option one pop pn page load 
window.addEventListener("load", preloader);



//Resource list used for populating content
let resources = {

    p1: {
        title: 'Wind Power',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. ',
        url: './img/wind-mill-1425007.webp',
    },


    p2: {
        title: 'Solar Panels',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. ',
        url: './img/solar-panel-1424264.webp',
    },



    p3: {
        title: 'Speciality tiles',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus velit, porta eget scelerisque vitae, eleifend vel neque. Nulla ac urna felis. Morbi viverra bibendum ligula vel ullamcorper. Curabitur metus nibh, accumsan vel nunc maximus, convallis consectetur orci. Sed porttitor nisl sed condimentum posuere. Proin nec tellus eros. Etiam et libero a mauris malesuada bibendum. ',
        url: './img/tiles-1191931.webp',
    }
}







//function and execution of the content manipulation part
let controls = document.getElementById('controls');
let btns = controls.children;
let dc = document.getElementById('dynamic-content');

function clickHappens(cl) {
    let activeClick = cl.target;

    dc.innerHTML = `<h2> ${resources[activeClick.id].title}</h2><br> 
                    
                    <img src= '${resources[activeClick.id].url}' class='optionimage' >
                    
                    <p class = 'optiontext'> ${resources[activeClick.id].bodyText}</p><br>`


    for (let btn of btns) {
        if (btn.id) {
            btn.removeAttribute('class', 'active');
        }
    }

    activeClick.setAttribute('class', 'active');
}

for (let btn of btns) {
    btn.addEventListener('click', clickHappens);
};


window.addEventListener('load', (event) => {
    dc.innerHTML = `<h2> ${resources.p1.title}</h2><br> 
                    
                  <img src= '${resources.p1.url}' class='optionimage' >
                    
                   <p class = 'optiontext'> ${resources.p1.bodyText}</p><br>`;
});


