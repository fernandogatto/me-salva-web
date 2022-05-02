export interface IOptionProps {
    label: string;
    value: number;
}

export interface IExerciseProps {
    id: number;
    label: string;
    image: string;
    correct: number;
    options: Array<IOptionProps>;
}
