
const array = {
    [Symbol.iterator]: () => {
        let items = [
            "a", "b", "c", "d", "e" 
        ];
        let currentIndex = 0;
        return  {
            next: () => {
                if(currentIndex < items.length){
                    return {
                        value: items[currentIndex++],
                        done: false
                    }
                }
                return {
                    done: true
                }
            }
        }
    }
    
}

for (const item of array) {
    item //?
}

const arrayItr = array[Symbol.iterator]();
const item1 = arrayItr.next()
item1
const item2 = arrayItr.next()
item2
const item3 = arrayItr.next()
item3
const item4 = arrayItr.next()
item4
const item5 = arrayItr.next()
item5
const item6 = arrayItr.next()
item6


const arrayItr2 = array[Symbol.iterator]();
let tempItem = arrayItr2.next();
while(!tempItem.done){
    tempItem
    tempItem = arrayItr2.next()
}
