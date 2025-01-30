export interface Unidade{

    id: number,
    title: string,
    content: string,
    opened: boolean,
    mask: string,
    towel: string,
    fountain: string,
    locker_room: string,
    schedules: Horario[]

}

interface Horario{

    weekdays: string,
    hour: string

}