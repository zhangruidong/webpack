export default (text="hello webpack __zhang") => {
    const ele=document.createElement("div");
    ele.innerHTML=text;
    return ele;
}