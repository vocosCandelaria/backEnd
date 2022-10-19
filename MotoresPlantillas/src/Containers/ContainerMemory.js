class ContainerMemory{
    //creo mi array en memoria
    constructor(){
        this.elements=[]
    }
    //metodos 
    getAll(){
        return this.elements
    }

    save(element){
       element.id = this.elements.length===0 ? 1 : this.elements[this.elements.length - 1].id + 1
       this.elements.push(element)
       return element
    }

    getById(id){
        return this.elements.find(element=>element.id===id)
    }

    updateById(id, newData){ //recibo id y nueva info para modificar
        const elementIndex = this.elements.findIndex(element=> element.id==id) //encuentro el producto a modificar segun el id
        
        this.elements[elementIndex]={
            ...this.elements[elementIndex],
            ...newData,
        }
        return this.elements[elementIndex]
    }

    delateById(id){
        this.elements.filter(element=>element.id!=id)
    }
}

export {ContainerMemory}