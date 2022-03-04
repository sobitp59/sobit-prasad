const targets = document.querySelectorAll('img');

const lazyload = target => {
    const lazy = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);

                observer.disconnect()
            }
        })
    }); 

    lazy.observe(target)
}

targets.forEach(lazyload);