var observer=new IntersectionObserver(entries=> {
    for(entry of entries) {
        if(entry.target.classList.contains('heading')) {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_heading')) {
                entry.target.classList.add('show_heading');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_heading');
        } 
        if(entry.target.id == 'my-icon') {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_icon')) {
                entry.target.classList.add('show_icon');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_icon');
        } 
        if(entry.target.classList.contains('images')) {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_images')) {
                entry.target.classList.add('show_images');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_images');
        } 
        if(entry.target.parentNode && entry.target.parentNode.classList.contains('details')) {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_p')) {
                entry.target.classList.add('show_p');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_p');
        } 
        if(entry.target.parentNode && entry.target.parentNode.classList.contains('skills')) {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_certs')) {
                entry.target.classList.add('show_certs');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_certs');
        } 
        else if(entry.target.tagName == 'A') {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_links')) {
                entry.target.classList.add('show_links');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_links');
        } 
        if(entry.target.tagName == 'P' && entry.target.parentNode.classList.contains('contact')) {
            if(entry.isIntersecting===true && !entry.target.classList.contains('show_support_info')) {
                entry.target.classList.add('show_support_info');
            } 
            else if(entry.intersectionRatio == 0)
                entry.target.classList.remove('show_support_info');
        } 
    }
},{
    root:document.body,
    rootMargin:'0px',
    threshold:[...Array(100).keys()].map(x => x / 100)
});
window.onload=()=>{
    observer.observe(document.querySelector('#my-icon'));
    observer.observe(document.querySelector('.contact p'));
    for(let heading of document.querySelectorAll('.heading')) 
        observer.observe(heading);
    for(let cert of document.querySelectorAll('.skills a')) 
        observer.observe(cert);
    for(let a of document.querySelectorAll('social_media a'))
        observer.observe(a);
    for(let img of document.querySelectorAll('.images'))
        observer.observe(img);
    for(let detail of document.querySelectorAll('.details')) {
        for(let p of detail.children) 
            observer.observe(p);
    } 
};
const TriggerAnimation=(e)=>{}