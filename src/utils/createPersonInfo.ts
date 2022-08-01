
import { IPerson } from "../types/IPerson"
import { convertTimestampToDate } from "./convertDate"

export const createPersonInfo = (obj: IPerson | undefined): { label: string, value: string | number }[] => {
	return [
		{ label: 'Карьера', value: obj?.profession.map((i) => i.value).join(', ') || '—' },
		{ label: 'Пол', value: obj?.sex || '—' },
		{ label: 'Рост', value: obj?.growth || '—' },
		{ label: 'Дата рождения', value: obj?.birthday && convertTimestampToDate(obj.birthday, 'D MMMM YYYY') || '—' },
		{ label: 'Дата смерти', value: obj?.death && convertTimestampToDate(obj.death, 'D MMMM YYYY') || '—' },
		{ label: 'Всего фильмов', value: obj?.movies?.length || '—' },
		{
			label: obj?.spouses[0] ? obj?.spouses[0].relation[0].toUpperCase() + obj?.spouses[0].relation.slice(1) : 'Брак',

			value: (obj?.spouses[0]?.name || '—') + ' ' + (obj?.spouses[0]?.divorcedReason || '')
		},
	]
}