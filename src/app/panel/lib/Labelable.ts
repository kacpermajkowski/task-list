"use client";

import Label from './Label';

export default abstract class Labelable{
    private labels: Set<Label> = new Set<Label>();

    get labelsList(): Set<Label> {
        return new Set<Label>(this.labels);
    }

    hasLabel(refLabel: Label): boolean{
        this.labels.forEach((label) => {
            if(label.equals(refLabel)){
                return true;
            }
        });
        return false;
    }

    addLabel(newLabel: Label): void{
        if(!this.hasLabel(newLabel)){
            this.labels.add(newLabel);
        } else {
            throw new Error('This Labeable has already this label assigned');
        }
    }

    removeLabel(labelToRemove: Label): void {
        if (this.hasLabel(labelToRemove)) {
            this.labels.delete(labelToRemove);
        } else {
            throw new Error('This Labeable does not have this label assigned');
        }
    }

}