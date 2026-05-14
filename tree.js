const members = document.querySelectorAll(".member");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
});

members.forEach(member=>{
member.style.opacity="0";
member.style.transform="translateY(40px)";
member.style.transition="0.6s";

observer.observe(member);
});