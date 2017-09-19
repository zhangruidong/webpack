export default (text="hello webpack") => {
    const ele=document.createElement("div");
    ele.innerHTML=text;
    return ele;
}