class DataStore<T>{
    private data:T[] = [];

    add(item:T):void{
        this.data.push(item);
    }

    getAll():T[]{
        return this.data;
    }

    remove(index:number):void{
        this.data.splice(index,1);
    }

}

const numbers = new DataStore<number>();
numbers.add(10);
numbers.add(20);
numbers.add(30);
console.log(numbers.getAll());

numbers.remove(0);
console.log(numbers.getAll());