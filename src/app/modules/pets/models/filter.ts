export interface DogsFilter {
    name: string;
    energy: number;
    barking: number;
}

export interface CatsFilter {
    name: string;
    playfulness: number;
    grooming: number;
}

export interface Control {
    type: 'input' | 'select';
    label: string;
    controlName: string;
    selectOption?: { id: number, label: string }[];
}