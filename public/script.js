document
    .querySelector('header button')
    .addEventListener("click", function() { // adiciona um evento
        document
            .querySelector('.form').classList.toggle('hide') // adiciona uma classe, com a funcionalidade 'toggle' de adiconar ou remover
    })