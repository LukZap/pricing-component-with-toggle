document.querySelector('.toggle-switch__toggle')
    .addEventListener('mouseup', function() {
        var amounts = document
            .getElementsByClassName('card__amount');
        for(var i = 0; i < amounts.length; i++)
        {
            var element = amounts[i];
            var classList = element.classList;
            classList.toggle('card__amount--hidden');
        }
    });