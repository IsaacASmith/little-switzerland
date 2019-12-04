var navDisplayed = false;

function toggleNav(){
    if(navDisplayed) {
        document.getElementById('top-nav').style.display = 'none';
        document.getElementById('close-nav-btn').style.display = 'none';
        document.getElementById('open-nav-btn').style.display = 'block';
    }
    else {
        document.getElementById('top-nav').style.display = 'flex';
        document.getElementById('close-nav-btn').style.display = 'block';
        document.getElementById('open-nav-btn').style.display = 'none';
    }
    
    navDisplayed = !navDisplayed;
}

var cabinsLinkHovered = false;
var cabinOptionsLinksHovered = false;

function cabinsHovered(){
    if(window.innerWidth < 600){
        return;
    }
    cabinsLinkHovered = true;
    document.getElementById("cabin-options").style.display = 'flex';
}

function cabinsUnHovered(){
    cabinsLinkHovered = false;
    if(window.innerWidth < 600 || cabinOptionsLinksHovered){
        return;
    }
    document.getElementById("cabin-options").style.display = 'none';
}

function cabinOptionsHovered(){
    if(window.innerWidth < 600){
        return;
    }
    cabinOptionsLinksHovered = true;
    document.getElementById("cabin-options").style.display = 'flex';
}

function cabinOptionsUnHovered(){
    cabinOptionsLinksHovered = false;
    if(window.innerWidth < 600 || cabinsLinkHovered){
        return;
    }
    document.getElementById("cabin-options").style.display = 'none';
}

