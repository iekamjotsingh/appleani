var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper',{scale:4,transformOrigin:"center top"})
.to('.iphone-image-wrapper', 3, {scale:2.2, y:'-30%'})
.to('.iphone-image-wrapper', 3, {scale:1, y:'0%'})

var controller = new ScrollMagic.Controller();

// Scene 1

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    duration:"100%",
    triggerHook:"0"
})

.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);

var tlSecondScroll = new TimelineMax();

tlSecondScroll
.to('.iphone1',3,{x:"-50%"})
.to('.iphone2',3,{x:"50%"},"-=3")
.from('.iphone1-text',0.3,{autoAlpha:0},"-=3")
.from('.iphone2-text',0.3,{autoAlpha:0},"-=3")
.to('.iphone1-text',3,{x:"-27%"},"-=3")
.to('.iphone2-text',3,{x:"25%"},"-=3")

.to(".iphone-stick",0.1, { display:"block"})
.to('.iphone1-img-behind',3,{x:"-50%"})
.to('.iphone2-img-behind',3,{x:"60%"},"-=3")

.to('.iphone1-img',0.3,{autoAlpha:"0"},"-=3")
.to('.iphone2-img',0.3,{autoAlpha:"0"},"-=3")
.to('.iphone1-text',0.3,{autoAlpha:"0"},"-=3")
.to('.iphone2-text',0.3,{autoAlpha:"0",scale:"0.95"},"-=3")


var Scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger2',
    duration:"100%",
    triggerHook:"0"
})

.setTween(tlSecondScroll)
.setPin('.trigger2')
.addIndicators()
.addTo(controller);
