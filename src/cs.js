export default function cs(...classes){
    return classes.filter(Boolean).join(" ")
}