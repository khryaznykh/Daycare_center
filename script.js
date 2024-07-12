
gsap.registerPlugin(ScrollTrigger);
const move = gsap.utils.toArray(".movecontainer");

move.forEach (triggerForEach);

function triggerForEach(item, index) {
    const moveItem = item.querySelectorAll (".move");
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "center bottom"} ,
     })
     .from (moveItem, {
        x: 200, 
        duration: 0.6,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.3
     })
}
 
const moveGroups = gsap.utils.toArray(".row");

moveGroups.forEach (triggerForEachGroup);

function triggerForEachGroup(item, index) {
    const moveGroup = item.querySelectorAll (".col");
    const moveReview = item.querySelectorAll (".col-lg-4");
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "center bottom"} ,
     })
     .from (moveGroup, {
        y: 50, 
        duration: 0.6,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.3
     })
     .from (moveReview, {
        x: 200, 
        duration: 0.6,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.3
     })
}
  
const moveDescr = gsap.utils.toArray(".accordion");

moveDescr.forEach (triggerForEachDescr);

function triggerForEachDescr(item, index) {
    const moveGroup = item.querySelectorAll (".accordion-item");
   
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "center bottom"} ,
     })
     .from (moveGroup, {
        y:-20,
        duration: 0.8,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.5
     })
}