
class BetterArray {
    #items
    constructor() {
        this.#items = []
    }
    get Items() {
        return [...this.#items]
    }
    addItems(item) {
        this.#items.push(item)
    }
    removeItem(itemToDelete) {
        this.#items = this.#items.filter((item) => item != itemToDelete)
    }
    modifyItem(itemToChange, newValue) {
        const index = this.#items.indexOf(itemToChange)
        if (index != -1) this.#items[index] = newValue
    }
}

let arr = new BetterArray()

arr.addItems("Hasan")
arr.addItems("Kabir")
console.log(arr.Items)

arr.removeItem("Hasan")
console.log(arr.Items)

arr.modifyItem("Kabir", "XoX")
console.log(arr.Items)





