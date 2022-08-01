import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { IFact, IMoviePerson } from '../../../types/IFilmsById';
import { Movie } from '../../../types/IPerson';
import PersonFilms from '../../PersonPage/PersonFilms/PersonFilms';
import ItemActors from './ItemActors/ItemActors';
import { ItemFacts } from './ItemFacts/ItemFacts';
import './itemTabs.css'

interface IItemTabs {
	description?: string | undefined;
	actors?: IMoviePerson[] | undefined;
	facts: IFact[] | undefined
	filmsWithPerson?: Movie[]
}

export const ItemTabs = (props: IItemTabs) => {
	return (
		<Tabs>
			<TabList>
				{props.description && <Tab>Описание</Tab>}
				{props.actors && <Tab>Актеры</Tab>}
				{props.filmsWithPerson && <Tab>Фильмы и сериалы</Tab>}
				{props.facts?.length !== 0 && <Tab>Факты</Tab>}
			</TabList>
			{props.facts && props.description &&
				<TabPanel>
					<div className='tabs-description'>
						{props.description}
					</div>
				</TabPanel>
			}
			{props.actors &&
				<TabPanel>
					<>
						<ItemActors actors={props.actors} />
					</>
				</TabPanel>
			}
			{props.filmsWithPerson &&
				<TabPanel>
					<>
						<PersonFilms movies={props.filmsWithPerson} len={props.filmsWithPerson?.length} />
					</>
				</TabPanel>
			}
			{props.facts?.length !== 0 &&
				<TabPanel>
					<>
						<ItemFacts facts={props.facts} />
					</>
				</TabPanel>
			}
		</Tabs>
	)
}