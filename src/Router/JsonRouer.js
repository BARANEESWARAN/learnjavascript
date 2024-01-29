let Contact=[
{
    id:1,
    name:"barani",
    age:22,
    roll:"developer"
}
,
{ id:2,
    name:"rani",
    age:22,
    roll:"developer"
}
,{
    id:3,
    name:"raja",
    age:21,
    roll:"developer"
}


]

export const ContactDta=()=>Contact

export function getData(number){
    return Contact.find(data=>data.id===number)
}