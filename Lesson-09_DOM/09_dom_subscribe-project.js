

        function Subscribe(){

            const subbtnElem = document.querySelector('.sub');

            if(subbtnElem.innerText === 'Subscribe'){

            subbtnElem.innerText = 'Subscribed';
            subbtnElem.classList.add('js-sub-click');
            }else{
                subbtnElem.innerText = 'Subscribe';
                subbtnElem.classList.remove('js-sub-click')
            }

        }
