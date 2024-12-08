export default class Label{
    private name: string;
    private color: string;
    
    constructor(name: string, color: string){
        this.name = name;
        this.color = color;
    }

    getName(): string {
        return this.name;
    }

    getColor(): string {
        return this.color;
    }

    setName(name: string): void {
        this.name = name;
    }

    setColor(color: string): void {
        this.color = color;
    }

    equals(label: Label): boolean {
        return this.name === label.getName() && this.color === label.getColor();
    }
}