export default (text="hello webpack __zrd") => {
    const ele=document.createElement("div");
    ele.innerHTML=text;
    ele.style.border="1px solid red";
    ele.style.width="200px"
    return ele;
}