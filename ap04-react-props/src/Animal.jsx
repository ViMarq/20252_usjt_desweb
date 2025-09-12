const Animal = ({icone, tamanho, espelhamento}) => {
    return (<i class={`fa-solid fa-${icone} fa-${tamanho}x fa-${espelhamento}`}></i>)
}
export default Animal